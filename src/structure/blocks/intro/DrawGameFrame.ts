import { GAME } from '../../../GAME'
import { VSprite } from '../../../pixi/VSprite'
import { Block } from '../../Block'

export class DrawGameFrame extends Block {
	constructor(name: string) {
		super(name)
	}

	start(): void {
		this._appendGameFrame()

		this.end()
	}

	private _appendGameFrame(): void {
		const { game_frame } = GAME.config.getConfig()
		const gameFrameSprite = new VSprite(game_frame)
	}
}
