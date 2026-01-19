import { Ticker } from 'pixi.js'
import { Block } from '../../Block'
import { gameConfig, GAME } from '../../../GAME'
import { XContainer } from '../../../pixi/XContainer'

export class AnimateReels extends Block {
	private reelTickers: Ticker[] = []
	private completedReels: number = 0
	private totalReels: number = 5

	constructor(name: string) {
		super(name)
	}

	start() {
		this._setupReelAnimationSpeeds()
	}

	private _setupReelAnimationSpeeds(): void {
		const {
			reelAContainer,
			reelBContainer,
			reelCContainer,
			reelDContainer,
			reelEContainer,
		} = GAME.containers

		const reelConfig = [
			{ container: reelAContainer, delay: 0, speed: 0.8 + Math.random() * 0.6 },
			{
				container: reelBContainer,
				delay: 100 + Math.random() * 300,
				speed: 0.8 + Math.random() * 0.6,
			},
			{
				container: reelCContainer,
				delay: 200 + Math.random() * 400,
				speed: 0.8 + Math.random() * 0.6,
			},
			{
				container: reelDContainer,
				delay: 300 + Math.random() * 500,
				speed: 0.8 + Math.random() * 0.6,
			},
			{
				container: reelEContainer,
				delay: 400 + Math.random() * 600,
				speed: 0.8 + Math.random() * 0.6,
			},
		]

		reelConfig.forEach(config => {
			setTimeout(() => {
				this._startAnimation(config.container, config.speed)
			}, config.delay)
		})
	}

	private _startAnimation(
		individualReelContainer: XContainer,
		speedMultiplier: number = 1.0,
	): void {
		const endPos =
			individualReelContainer.y +
			individualReelContainer.height -
			(gameConfig.gameWidth / 5) * 3
		const ticker = new Ticker()
		this.reelTickers.push(ticker)
		ticker.add(() =>
			this._moveReel(endPos, individualReelContainer, ticker, speedMultiplier),
		)

		ticker.start()
	}

	private _moveReel(
		stopPos: number,
		reelToMove: XContainer,
		ticker: Ticker,
		speedMultiplier: number = 1.0,
	): void {
		if (reelToMove.position.y < stopPos) {
			reelToMove.position.y +=
				gameConfig.reelSpinSpeed * speedMultiplier * ticker.deltaTime
		}
		if (reelToMove.position.y >= stopPos) {
			reelToMove.position.y = stopPos

			GAME.sound?.volume('reel-thud', 0.1 + Math.random() * 0.8)
			GAME.sound?.play('reel-thud')
			ticker.stop()
			ticker.destroy()

			this.completedReels++

			if (this.completedReels >= this.totalReels) {
				this.end()
			}
		}
	}
}
