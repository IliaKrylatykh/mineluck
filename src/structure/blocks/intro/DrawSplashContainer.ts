import { GAME } from '../../../GAME'
import { VSprite } from '../../../pixi/VSprite'
import { XContainer } from '../../../pixi/XContainer'
import { Block } from '../../Block'

export class DrawSplashContainer extends Block {
	constructor(name: string) {
		super(name)
	}

	start(): void {
		this._createSplashContainer()
		this._drawIntroSprite()
	}

	override end(): void {
		GAME.events.spinButton.removeAll()
		GAME.app.stage.removeChild(GAME.containers.splashContainer)
		GAME.events.blockComplete.dispatch()
	}

	private _createSplashContainer(): void {
		const app = GAME.app

		const { splash_container } = GAME.config.getConfig()
		GAME.containers.splashContainer = new XContainer(splash_container)
		const splashContainer = GAME.containers.splashContainer
		app.stage.addChild(splashContainer)
	}

	private _drawIntroSprite(): void {
		GAME.events.spinButton.add(() => this.end())
		const { intro_BG } = GAME.config.getConfig()
		intro_BG.click = () => {
			this.end()
		}
		const splashImage = new VSprite(intro_BG)
		splashImage.sprite.zIndex = 1
		splashImage.sprite.cursor = 'pointer'
	}
}
