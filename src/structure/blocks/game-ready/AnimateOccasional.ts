import { Block } from '../../Block'
import { GAME } from '../../../GAME'

export class AnimateOccasional extends Block {
	constructor(name: string) {
		super(name)
	}

	start() {
		this._animateOccasional()
		this.end()
	}

	private _animateOccasional(): void {
		const shouldAnimate = Math.random() < 0.3

		if (!shouldAnimate) {
			return
		}

		const reelContainers = [
			GAME.containers.reelAContainer,
			GAME.containers.reelBContainer,
			GAME.containers.reelCContainer,
			GAME.containers.reelDContainer,
			GAME.containers.reelEContainer,
		]

		const randomContainerIndex = Math.floor(Math.random() * 5)
		const selectedContainer = reelContainers[randomContainerIndex]

		if (selectedContainer.children.length === 0) {
			return
		}

		const randomChildIndex = Math.floor(
			Math.random() * selectedContainer.children.length,
		)
		const selectedChild = selectedContainer.children[randomChildIndex] as any

		if (selectedChild && typeof selectedChild.gotoAndPlay === 'function') {
			selectedChild.gotoAndPlay(0)
		}
	}
}
