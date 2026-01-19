import { Block } from '../../Block'
import { gameConfig, GAME } from '../../../GAME'

export class PositionStartOfSpin extends Block {
	constructor(name: string) {
		super(name)
	}

	start() {
		this._secretlyMoveReels()
		this.end()
	}

	private _secretlyMoveReels(): void {
		const reelHeight = (gameConfig.gameWidth / 5) * 3
		GAME.containers.reelAContainer.y = -GAME.containers.reelAContainer.height
		GAME.containers.reelAContainer.y += reelHeight

		GAME.containers.reelBContainer.y = -GAME.containers.reelBContainer.height
		GAME.containers.reelBContainer.y += reelHeight

		GAME.containers.reelCContainer.y = -GAME.containers.reelCContainer.height
		GAME.containers.reelCContainer.y += reelHeight

		GAME.containers.reelDContainer.y = -GAME.containers.reelDContainer.height
		GAME.containers.reelDContainer.y += reelHeight

		GAME.containers.reelEContainer.y = -GAME.containers.reelEContainer.height
		GAME.containers.reelEContainer.y += reelHeight
	}
}
