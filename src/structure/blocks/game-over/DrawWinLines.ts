import { Graphics } from 'pixi.js'
import { Block } from '../../Block'
import { GAME, gameConfig } from '../../../GAME'

export class DrawWinLines extends Block {
	private darkenOverlays: Graphics[] = []

	constructor(name: string) {
		super(name)
	}

	start() {
		requestAnimationFrame(() => {
			this._darkenNonWinningSymbols()
			this.end()
		})
	}

	private _darkenNonWinningSymbols(): void {
		const { result } = this.models
		const { activeWinLines, winLines, spinResult } = result

		if (!activeWinLines || activeWinLines.length === 0) {
			return
		}

		if (
			!GAME.containers.masterReelContainer ||
			!GAME.containers.mainGameContainer
		) {
			return
		}

		this._clearOverlays()

		const reelContainers = [
			GAME.containers.reelAContainer,
			GAME.containers.reelBContainer,
			GAME.containers.reelCContainer,
			GAME.containers.reelDContainer,
			GAME.containers.reelEContainer,
		]

		if (reelContainers.some(container => !container)) {
			return
		}

		const symbolHeight = gameConfig.gameWidth / 5
		const symbolWidth = gameConfig.gameWidth / 5

		const winningPositions = new Set<string>()

		activeWinLines.forEach(winLineKey => {
			const pattern = winLines[winLineKey]
			if (!pattern) return

			for (let row = 0; row < pattern.length; row++) {
				for (let col = 0; col < pattern[row].length; col++) {
					if (pattern[row][col] === 'X') {
						winningPositions.add(`${row}-${col}`)
					}
				}
			}
		})

		for (let row = 0; row < spinResult.length; row++) {
			for (let col = 0; col < spinResult[row].length; col++) {
				const positionKey = `${row}-${col}`

				if (!winningPositions.has(positionKey)) {
					const container = reelContainers[col]
					if (container && container.parent) {
						try {
							const containerGlobalPos = container.getGlobalPosition()
							const symbolGlobalX = containerGlobalPos.x
							const symbolGlobalY = containerGlobalPos.y + symbolHeight * row

							const localPos = GAME.containers.mainGameContainer.toLocal({
								x: symbolGlobalX,
								y: symbolGlobalY,
							})

							const darkenOverlay = new Graphics()
							darkenOverlay.label = 'win-darken-overlay'

							GAME.containers.mainGameContainer.addChild(darkenOverlay)

							darkenOverlay
								.rect(localPos.x, localPos.y, symbolWidth, symbolHeight)
								.fill({ color: 0x000000, alpha: 0.6 })

							this.darkenOverlays.push(darkenOverlay)
						} catch (e) {
							console.warn('Error creating darken overlay:', e)
						}
					}
				}
			}
		}
	}

	private _clearOverlays(): void {
		this.darkenOverlays.forEach(overlay => {
			if (overlay.parent) {
				overlay.parent.removeChild(overlay)
			}
			overlay.destroy()
		})
		this.darkenOverlays = []
	}
}
