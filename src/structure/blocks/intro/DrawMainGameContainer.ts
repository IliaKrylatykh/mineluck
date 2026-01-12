import { Assets } from 'pixi.js'
import { GAME } from '../../../GAME'
import { XContainer } from '../../../pixi/XContainer'
import { Block } from '../../Block'
import { VSprite } from '../../../pixi/VSprite'
import { TGraphics } from '../../../pixi/TGraphics'

export class DrawMainGameContainer extends Block {
	constructor(name: string) {
		super(name)
	}

	start(): void {
		this._organizeContainers()
		this._appendGameBackground()
		// this._appendConsistentBackboard() // debug

		this.end()
	}

	private _organizeContainers(): void {
		const { main_game_container } = GAME.config.getConfig()
		GAME.containers.mainGameContainer = new XContainer(main_game_container)
		GAME.app.stage.addChild(GAME.containers.mainGameContainer)
	}

	private _appendGameBackground(): void {
		const image = Assets.get('game_BG')
		const originalWidth = image.orig.width
		const originalHeight = image.orig.height

		const imageAspectRatio = originalWidth / originalHeight

		const getScaleFactor = () => {
			const windowWidth = window.innerWidth
			const windowHeight = window.innerHeight
			const windowAspectRatio = windowWidth / windowHeight

			return windowAspectRatio < imageAspectRatio
				? windowHeight / originalHeight // Scale by height
				: windowWidth / originalWidth // Scale by width
		}

		const { game_BG } = GAME.config.getConfig()
		game_BG.w = () => originalWidth * getScaleFactor()
		game_BG.h = () => originalHeight * getScaleFactor()

		const mainGameBackgroundImage = new VSprite(game_BG)
		mainGameBackgroundImage.sprite.anchor.set(0.5, 0)
	}

	private _appendConsistentBackboard(): void {
		const { main_game_backboard } = GAME.config.getConfig()
		const mainGameBackboard = new TGraphics(main_game_backboard)
		mainGameBackboard.graphics.alpha = 0.5
	}
}
