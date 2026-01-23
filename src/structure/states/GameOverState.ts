import { State } from '../State'
import { GAME, gameConfig } from '../../GAME'
import { GameState } from './StateDefinitions'

import { Ticker } from 'pixi.js'
import { CleanUpGame } from '../blocks/game-over/CleanUpGame'
import { SetSymbolsToReel } from '../blocks/game-ready/SetSymbolsToReel'
import { AnimateWinlines } from '../blocks/game-over/AnimateWinLines'
import { DrawWinLines } from '../blocks/game-over/DrawWinLines'
import { WinAmountModal } from '../blocks/game-over/WinAmountModal'
import GameUI from '../../ui/GameUI'
import { winMultipliers } from '../../models/ReelModel'
import GameControlArea from '../../ui/GameControlArea'
import { updateBonusCounter } from '../blocks/intro/DrawBonusCounter'

export class GameOverState extends State {
	private _currentBet: number = 0
	private _insufficientFunds: boolean
	private _landedWinLines: string[] = []
	private _bonusCounter: number = 0
	private _updateGameInfoHandler = this._updateGameInfo.bind(this)

	setupEvents(): void {
		console.log('💀------GameOverState------💀')
		GAME.events.gameInfo.add(this._updateGameInfoHandler)
	}

	modelChanges(): void {
		this._resetWin()
		this._trimReelDisplay()
		this._checkWinLines()
		this._deductNextBet()
		this._awardPayout()
		this._checkInsufficientFunds()
	}

	setupBlocks(): void {
		this.blocks = [
			new CleanUpGame('Clean up reel overflow'),
			new SetSymbolsToReel('Set symbols to reel'),
			new AnimateWinlines('Animate Winlines'),
			new DrawWinLines('Draw Win Lines'),
			new WinAmountModal('Win amount modal'),
		]
	}

	removeEvents(): void {
		GAME.events.gameInfo.remove(this._updateGameInfoHandler)
	}

	exitState(): void {
		if (this._insufficientFunds) {
			GameUI.getInstance()?.showPopup(true)
			this.models.progress.isPaused = true
			const ticker = Ticker.shared
			ticker.stop()
		}

		GAME.states[GameState.GAME_READY].enterState()
	}

	private _resetWin(): void {
		this.models.result.isWin = false
	}

	private _trimReelDisplay(): void {
		this.models.reel.reelDisplay = this.models.result.spinResult
	}

	private _checkInsufficientFunds(): void {
		const { bet, result } = this.models

		if (bet.bankBalance === 0 && bet.betAmount === 0 && !result.isWin) {
			this._insufficientFunds = true
		}
	}

	private _deductNextBet(): void {
		const { bet } = this.models

		this._currentBet = bet.betAmount

		if (bet.bankBalance < this._currentBet) {
			if (bet.bankBalance >= gameConfig.betChangeAmount) {
				bet.betAmount = gameConfig.betChangeAmount
			} else {
				bet.betAmount = 0
			}
		}

		if (bet.bankBalance >= bet.betAmount) {
			bet.bankBalance -= bet.betAmount
		}
	}
	private _awardPayout(): void {
		const { bet, result } = this.models

		if (result.isWin) {
			let totalWin = 0

			for (const winLineKey of this._landedWinLines) {
				const pattern = result.winLines[winLineKey]
				let symbol: string | null = null
				for (let row = 0; row < pattern.length; row++) {
					for (let col = 0; col < pattern[row].length; col++) {
						if (pattern[row][col] === 'X') {
							symbol = result.spinResult[row][col]
							break
						}
					}
					if (symbol) break
				}

				if (symbol === 'B1') {
					const multiplier = winMultipliers.H1
					const winForLine = this._currentBet * multiplier
					console.log(
						`💵 Win line ${winLineKey}: Symbol ${symbol} (B1 = high symbol), Multiplier ${multiplier}, Win ${winForLine}`,
					)
					totalWin += winForLine
				} else if (symbol === 'W1') {
					const multiplier = winMultipliers.H1
					const winForLine = this._currentBet * multiplier
					console.log(
						`💵 Win line ${winLineKey}: Symbol ${symbol} (3 wild = high symbol), Multiplier ${multiplier}, Win ${winForLine}`,
					)
					totalWin += winForLine
				} else if (
					symbol &&
					winMultipliers[symbol as keyof typeof winMultipliers]
				) {
					const multiplier =
						winMultipliers[symbol as keyof typeof winMultipliers]
					const winForLine = this._currentBet * multiplier
					console.log(
						`💵 Win line ${winLineKey}: Symbol ${symbol}, Multiplier ${multiplier}, Win ${winForLine}`,
					)
					totalWin += winForLine
				}
			}

			bet.bankBalance += totalWin
			result.lastWinAmount = totalWin
		}
	}

	private _checkWinLines(): void {
		const { result } = this.models
		const { spinResult } = result

		if (!spinResult || spinResult.length < 3) return

		result.linesToAnimate = []
		result.activeWinLines = []
		this._landedWinLines = []
		this._bonusCounter = 0

		// Подсчитываем уникальные B1 на поле (упрощенное накопление)
		const b1Positions = new Set<string>()
		for (let row = 0; row < spinResult.length; row++) {
			for (let col = 0; col < spinResult[row].length; col++) {
				if (spinResult[row][col] === 'B1') {
					b1Positions.add(`${row}-${col}`)
				}
			}
		}
		this._bonusCounter = b1Positions.size

		Object.entries(result.winLines).forEach(([winLineKey, winLinePattern]) => {
			const checkResult = this._checkWinLinePattern(spinResult, winLinePattern)
			if (checkResult.isWin) {
				result.isWin = true
				this._landedWinLines.push(winLineKey)
				result.activeWinLines.push(winLineKey)

				const positions = this._getPositionsForWinLine(winLineKey)
				result.linesToAnimate.push(...positions)

				if (checkResult.isOnlyB1) {
					console.log(`⭐ Bonus ${winLineKey} `)
				}
			}
		})

		if (this._bonusCounter > 0) {
			console.log(`🔥 Bonus: +${this._bonusCounter} B1 symbols found`)
		}

		result.bonusCounter += this._bonusCounter

		while (result.bonusCounter >= 7) {
			const bonusPayout = 20
			this.models.bet.bankBalance += bonusPayout
			result.lastWinAmount = bonusPayout
			console.log(`🎉 Bonus reached! $${bonusPayout}`)

			result.bonusCounter -= 7
			console.log(`💾 Remaining bonus: ${result.bonusCounter}`)
		}

		updateBonusCounter()

		GAME.events.gameInfo.dispatch()

		if (this._bonusCounter > 0) {
			console.log(
				`🎁 Bonus counter: +${this._bonusCounter}, total: ${result.bonusCounter}`,
			)
		}
	}

	private _checkWinLinePattern(
		spinResult: string[][],
		pattern: string[][],
	): { isWin: boolean; b1Count: number; isOnlyB1: boolean } {
		const xPositions: Array<{ row: number; col: number }> = []

		for (let row = 0; row < pattern.length; row++) {
			for (let col = 0; col < pattern[row].length; col++) {
				if (pattern[row][col] === 'X') {
					xPositions.push({ row, col })
				}
			}
		}

		if (xPositions.length === 0) {
			return { isWin: false, b1Count: 0, isOnlyB1: false }
		}

		const symbols = xPositions.map(pos => spinResult[pos.row][pos.col])
		const firstSymbol = symbols[0]
		const allSame = symbols.every(symbol => symbol === firstSymbol)

		const b1Count = symbols.filter(symbol => symbol === 'B1').length
		const isOnlyB1 = allSame && firstSymbol === 'B1'

		return {
			isWin: allSame,
			b1Count,
			isOnlyB1,
		}
	}

	private _getPositionsForWinLine(
		winLineKey: string,
	): Array<{ reelIndex: number; symbolIndex: number }> {
		const positions: Array<{ reelIndex: number; symbolIndex: number }> = []
		const pattern = this.models.result.winLines[winLineKey]

		for (let row = 0; row < pattern.length; row++) {
			for (let col = 0; col < pattern[row].length; col++) {
				if (pattern[row][col] === 'X') {
					positions.push({ reelIndex: col, symbolIndex: row })
				}
			}
		}

		return positions
	}

	private _updateGameInfo(): void {
		const { bet } = this.models

		const gameControlArea = GameControlArea.getInstance()

		if (gameControlArea) {
			gameControlArea.setBankInfo(bet.betAmount, bet.bankBalance)
		}
	}
}
