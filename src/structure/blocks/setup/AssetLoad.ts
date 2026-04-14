import { Assets, Text } from 'pixi.js'
import { Block } from '../../Block'
import { TGraphics } from '../../../pixi/TGraphics'
import { GAME } from '../../../GAME'
import { XContainer } from '../../../pixi/XContainer'
import { assetUrl } from '../../../utils/assetUrl'

export class AssetLoad extends Block {
	private progressBar: TGraphics
	private randomQuotes: string[] = [
		'The best seams hide\nwhere the lamp barely reaches...',
		'One more metre down—\none swing closer to the strike...',
		'Ore does not care for luck;\nit only yields to stubborn steel...',
		'Listen to the tunnel—\nechoes tell you where the rock is honest...',
		'Dust in the air,\nglint on the cart: that is the miner’s tax...',
		'The mother lode keeps its secrets—\nuntil someone digs for them...',
	]

	constructor(name: string) {
		super(name)
	}

	start() {
		this._organizeContainer()
		this._createProgressBar()

		this._loadAssets().then(() => {
			this._destroyProgressBar()
			this.end()
		})
	}

	private async _loadAssets(): Promise<void> {
		Assets.addBundle('all', {
			intro_BG: assetUrl('assets/images/intro_BG.png'),
			game_BG: assetUrl('assets/images/game_BG.png'),
			game_logo: assetUrl('assets/images/game_logo.png'),
			game_frame: assetUrl('assets/images/game_frame.png'),

			fire_small: assetUrl('assets/spritesheets/fire_small/fire_small.json'), // wild

			chest: assetUrl('assets/spritesheets/wild-symbols/chest.json'), // wild

			fire: assetUrl('assets/spritesheets/bonus-symbols/fire.json'), // bonus

			crys: assetUrl('assets/spritesheets/high-symbols/crys.json'), // high
			gem: assetUrl('assets/spritesheets/high-symbols/gem.json'), // high
			gold: assetUrl('assets/spritesheets/high-symbols/gold.json'), // high

			sulf: assetUrl('assets/spritesheets/low-symbols/sulf.json'), // low
			ore: assetUrl('assets/spritesheets/low-symbols/ore.json'), // low
			wood: assetUrl('assets/spritesheets/low-symbols/wood.json'), // low
			merc: assetUrl('assets/spritesheets/low-symbols/merc.json'), // low
		})

		const assets = await Assets.loadBundle('all', (progress: number) => {
			const percentage = Math.round(progress * 100)
			this._updateProgressBar(percentage)
		})
	}

	private _organizeContainer(): void {
		const { progress_container } = GAME.config.getConfig()
		GAME.containers.progressContainer = new XContainer(progress_container)
		GAME.app.stage.addChild(GAME.containers.progressContainer)
	}

	private _createProgressBar(): void {
		const { loading_background_bar, progress_bar, progress_text } =
			GAME.config.getConfig()
		const backgroundBar = new TGraphics(loading_background_bar)

		this.progressBar = new TGraphics(progress_bar)
		const randomQuoteSelected = Math.floor(
			Math.random() * this.randomQuotes.length,
		)

		const progressText = new Text({
			text: this.randomQuotes[randomQuoteSelected],
			style: progress_text.style,
		})

		progressText.scale.set(progress_text.scale)
		progressText.anchor.set(progress_text.anchor)
		progressText.position.set(
			progress_text.position.x,
			progress_text.position.y,
		)

		GAME.containers.progressContainer.addChild(progressText)
	}

	private _updateProgressBar(percentage: number): void {
		const maxWidth = 300
		const currentWidth = (percentage / 100) * maxWidth
		this.progressBar.w = () => currentWidth
		GAME.events.redraw.dispatch()
	}

	private _destroyProgressBar(): void {
		GAME.app.stage.removeChild(GAME.containers.progressContainer)
		GAME.containers.progressContainer.destroy()
		GAME.events.redraw.removeAll()
	}
}
