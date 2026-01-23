import { GAME, gameConfig } from '../../GAME'
import { State } from '../State'
import { SetSymbolsToReel } from '../blocks/game-ready/SetSymbolsToReel'
import { AnimateOccasional } from '../blocks/game-ready/AnimateOccasional'
import { PlayerControlButton } from '../blocks/game-ready/PlayerControlButton'
import { GameState } from './StateDefinitions'
import GameControlArea from '../../ui/GameControlArea'

export class GameReadyState extends State {
	private _updateGameInfoHandler = this._updateGameInfo.bind(this)

	setupEvents(): void {
		console.log('🎮------GameReadyState------🎮')

		const { events } = GAME
		events.changeBet.add(this._updateBet.bind(this))
		events.gameInfo.add(this._updateGameInfoHandler)
	}

	modelChanges(): void {
		this._prepareDisplayReel()
		this._resetLastWinAmount()
	}

	setupBlocks(): void {
		this.blocks = [
			new SetSymbolsToReel('Set symbols to reel'),
			new AnimateOccasional('Animate occasional'),
			new PlayerControlButton('Player control button'),
		]
	}

	removeEvents(): void {
		const { events } = GAME

		events.changeBet.removeAll()
		events.spinButton.removeAll()
		events.gameInfo.remove(this._updateGameInfoHandler)
	}

	exitState(): void {
		GAME.states[GameState.SPIN_RESULT].enterState()
	}

	private _prepareDisplayReel(): void {
		const { result, reel } = this.models

		reel.reelDisplay = []
		reel.reelDisplay = result.spinResult
		result.spinResult = []
	}

	private _resetLastWinAmount(): void {
		this.models.result.lastWinAmount = 0
	}

	private _updateBet(betChange: number): void {
		const { bet } = this.models
		const { events } = GAME

		GAME.sound?.play('UI-pick')

		if (betChange === 1) {
			const dynamicChangeAmount =
				bet.betAmount >= 50 ? 50 : gameConfig.betChangeAmount

			const potentialSpend =
				((bet.bankBalance + bet.betAmount) / dynamicChangeAmount) *
				dynamicChangeAmount

			const incrementsRemaining =
				(potentialSpend - bet.betAmount) / dynamicChangeAmount
			if (incrementsRemaining >= 1) {
				bet.betAmount += dynamicChangeAmount
				bet.bankBalance -= dynamicChangeAmount
			}
		}

		if (betChange === -1) {
			const dynamicChangeAmount =
				bet.betAmount > 50 ? 50 : gameConfig.betChangeAmount
			const decrementsRemaining = bet.betAmount / dynamicChangeAmount
			if (decrementsRemaining > 1) {
				bet.betAmount -= dynamicChangeAmount
				bet.bankBalance += dynamicChangeAmount
			}
		}

		events.gameInfo.dispatch()
	}

	private _updateGameInfo(): void {
		const { bet } = this.models

		const gameControlArea = GameControlArea.getInstance()

		if (gameControlArea) {
			gameControlArea.setBankInfo(bet.betAmount, bet.bankBalance)
		}
	}
}
