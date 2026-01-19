import { Block } from '../../Block'
import { emptyAllReels } from '../../../utils/ReelHelper'
import { GAME } from '../../../GAME'
import { Graphics } from 'pixi.js'

export class CleanUpGame extends Block {
	constructor(name: string) {
		super(name)
	}

	start() {
		this._emptyContainers()
		this._clearWinLines()
		this.end()
	}

	private _emptyContainers(): void {
		emptyAllReels()
	}

	private _clearWinLines(): void {
		if (!GAME.containers.mainGameContainer) return

		const childrenToRemove: Graphics[] = []
		GAME.containers.mainGameContainer.children.forEach(child => {
			if (child instanceof Graphics && child.label?.includes('win-darken-overlay')) {
				childrenToRemove.push(child)
			}
		})

		childrenToRemove.forEach(graphics => {
			GAME.containers.mainGameContainer.removeChild(graphics)
			graphics.destroy()
		})
	}
}
