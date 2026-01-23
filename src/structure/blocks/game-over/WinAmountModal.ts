import { Block } from '../../Block'
import { GAME } from '../../../GAME'
import { Text, Ticker, Graphics } from 'pixi.js'
import { TGraphics } from '../../../pixi/TGraphics'

export class WinAmountModal extends Block {
	private _skipAnimation: boolean = false

	constructor(name: string) {
		super(name)
	}

	start() {
		const { isWin, lastWinAmount } = this.models.result
		if (isWin && lastWinAmount > 0) {
			this._drawBankPanel()
		} else {
			GAME.events.gameInfo.dispatch()
			this.end()
		}
	}

	private _drawBankPanel(): void {
		const { lastWinAmount } = this.models.result

		let countValue = 0
		let frequency = 0
		const { win_text_panel } = GAME.config.getConfig()

		const basicText = new Text({
			text: `BANK\n$${countValue.toString()}`,
			style: {
				fontFamily: 'NicoPaint',
				fontSize: 20,
				fill: 0xffffff,
				align: 'center',
			},
		})

		const bankPanel = new TGraphics(win_text_panel)
		bankPanel.graphics.cursor = 'pointer'
		bankPanel.graphics.zIndex = 20

		const skipAnimation = () => {
			this._skipAnimation = true
			window.removeEventListener('click', skipAnimation)
			window.addEventListener('click', handleClick)
		}

		const handleClick = () => {
			GAME.sound?.stop('coin-count-loop')
			GAME.sound?.play('coin-flung')
			countUpTicker.stop()
			countUpTicker.destroy()
			GAME.containers.winPanelContainer.children.forEach(child =>
				child.destroy(),
			)
			GAME.containers.winPanelContainer.removeChildren()

			this._clearDarkenOverlays()

			window.removeEventListener('click', handleClick)
			GAME.events.gameInfo.dispatch()
			this.end()
		}

		window.addEventListener('click', skipAnimation)

		GAME.containers.winPanelContainer.addChild(bankPanel.graphics)
		GAME.containers.winPanelContainer.addChild(basicText)

		basicText.position.y = bankPanel.graphics.height / 2
		basicText.position.x = bankPanel.graphics.width / 2
		basicText.anchor.set(0.5)

		const minScale = 2.5 
		const maxScale = 3.2 
		const frequencyChange = 0.05 

		let countUpTicker = new Ticker()

		countUpTicker.add(() => {
			const normalizedSine = (Math.sin(frequency) + 1) / 2 // Convert from [-1,1] to [0,1]
			const scale = minScale + (maxScale - minScale) * normalizedSine

			if (countValue < lastWinAmount && !this._skipAnimation) {
				countValue++
				frequency += frequencyChange
				basicText.scale.set(scale)
				basicText.text = `WIN\n$${countValue.toString()}`
			} else {
				window.removeEventListener('click', skipAnimation)
				window.addEventListener('click', handleClick)
				basicText.scale.set(maxScale)
				basicText.text = `WIN\n$${lastWinAmount}`
				GAME.sound?.stop('coin-count-loop')
				countUpTicker.stop()
			}
		})

		GAME.sound?.play('coin-count-loop', {
			loop: true,
		})

		countUpTicker.start()
	}

	private _clearDarkenOverlays(): void {
		if (!GAME.containers.mainGameContainer) return

		const childrenToRemove: Graphics[] = []
		GAME.containers.mainGameContainer.children.forEach(child => {
			if (
				child instanceof Graphics &&
				child.label?.includes('win-darken-overlay')
			) {
				childrenToRemove.push(child)
			}
		})

		childrenToRemove.forEach(graphics => {
			GAME.containers.mainGameContainer.removeChild(graphics)
			graphics.destroy()
		})
	}
}
