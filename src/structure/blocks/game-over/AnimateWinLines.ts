import { Block } from '../../Block'
import { GAME } from '../../../GAME'

export class AnimateWinlines extends Block {
	constructor(name: string) {
		super(name)
	}

	start() {
		this._animateWinLines()
	}

	private _animateWinLines(): void {
		const { linesToAnimate } = this.models.result

		const reelContainers = [
			GAME.containers.reelAContainer,
			GAME.containers.reelBContainer,
			GAME.containers.reelCContainer,
			GAME.containers.reelDContainer,
			GAME.containers.reelEContainer,
		]

		if (!linesToAnimate || linesToAnimate.length === 0) {
			this.end()
			return
		}

		linesToAnimate.forEach(({ reelIndex, symbolIndex }) => {
			const container = reelContainers[reelIndex]

			if (container && container.children[symbolIndex]) {
				const symbol = container.children[symbolIndex] as any

				if (symbol && typeof symbol.gotoAndPlay === 'function') {
					symbol.gotoAndPlay(0)
				}
			}
		})

		this.end()
	}
}
