import { GAME, gameConfig } from '../../GAME'
import { SYMBOLS } from '../../models/ReelModel'
import GameControlArea from '../../ui/GameControlArea'
import { getRandomForcedResult } from '../../utils/ReelHelper'
import { SetSymbolsToReel } from '../blocks/game-ready/SetSymbolsToReel'
import { AnimateReels } from '../blocks/spin-result/AnimateReels'
import { PositionStartOfSpin } from '../blocks/spin-result/PositionStartOfSpin'
import { State } from '../State'
import { GameState } from './StateDefinitions'

export class SpinResultState extends State {
	setupEvents(): void {
		console.log('🎲------SpinResultState------🎲')
		GAME.events.gameInfo.add(this._updateGameInfo.bind(this))
	}

	modelChanges(): void {
		this._generateSpinResult()
	}

	setupBlocks(): void {
		this.blocks = [
			new SetSymbolsToReel('SetSymbolsToReel'),
			new PositionStartOfSpin('Position Start Of Spin'),
			new AnimateReels('Animate Reels'),
		]
	}

	removeEvents(): void {
		GAME.events.gameInfo.removeAll()
	}

	exitState(): void {
		GAME.states[GameState.GAME_OVER].enterState()
	}

	private _updateGameInfo(): void {
		const { bet } = this.models

		const gameControlArea = GameControlArea.getInstance()
		if (gameControlArea) {
			gameControlArea.setBankInfo(bet.betAmount, bet.bankBalance)
		}
	}

	private _generateSpinResult(): void {
		if (gameConfig.useForcedResult || this._randomDecideUseForcedResult()) {
			this._generateForcedSpinResult()
		} else {
			this._generateRandomSpinResult()
		}
	}

	private _randomDecideUseForcedResult(): boolean {
		const probability = gameConfig.probabilityFRChosen
		return Math.floor(Math.random() * probability) + 1 === 1
	}

	private _generateRandomDisplayRow(): string[] {
		const symbols = Object.values(SYMBOLS)
		const row = []
		for (let x = 0; x < 5; x++) {
			row.push(symbols[Math.floor(Math.random() * symbols.length)])
		}
		return row
	}

	private _generateRandomSpinResult(): void {
		const { reel, result } = this.models
		for (let y = 0; y < 12; y++) {
			const randomRow = this._generateRandomDisplayRow()
			reel.reelDisplay.unshift(randomRow)
		}

		for (let y = 0; y < 3; y++) {
			const randomRow = this._generateRandomDisplayRow()
			reel.reelDisplay.unshift(randomRow)
			result.spinResult.unshift(randomRow)
		}
	}

	private _generateForcedSpinResult(): void {
		const { reel, result } = this.models

		const randomForcedResult = getRandomForcedResult()

		for (let y = 0; y < 12; y++) {
			const randomRow = this._generateRandomDisplayRow()
			reel.reelDisplay.unshift(randomRow)
		}

		const resultCopy = randomForcedResult.result.map((row: string[]) => [
			...row,
		])
		reel.reelDisplay.unshift(...resultCopy)
		result.spinResult = resultCopy
	}
}
