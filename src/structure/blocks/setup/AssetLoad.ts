import { Assets, Text } from 'pixi.js'
import { Block } from '../../Block'
import { TGraphics } from '../../../pixi/TGraphics'
import { GAME } from '../../../GAME'
import { XContainer } from '../../../pixi/XContainer'

export class AssetLoad extends Block {
	private progressBar: TGraphics
	private randomQuotes: string[] = [
		'A wise hero prepares for battle long\nbefore the first sword is drawn...',
		'Gold wins wars,\nbut courage decides their outcome...',
		'Castles fall.\nHeroes endure...',
		'Victory favors those\nwho dare to explore...',
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
			intro_BG: '/assets/images/intro_BG.png',
			game_BG: '/assets/images/game_BG.png',
			game_logo: '/assets/images/game_logo.png',
			game_frame: '/assets/images/game_frame.png',

			fire_small: '/assets/spritesheets/fire_small/fire_small.json', // wild

			chest: '/assets/spritesheets/wild-symbols/chest.json', // wild

			fire: '/assets/spritesheets/bonus-symbols/fire.json', // bonus

			crys: '/assets/spritesheets/high-symbols/crys.json', // high
			gem: '/assets/spritesheets/high-symbols/gem.json', // high
			gold: '/assets/spritesheets/high-symbols/gold.json', // high

			sulf: '/assets/spritesheets/low-symbols/sulf.json', // low
			ore: '/assets/spritesheets/low-symbols/ore.json', // low
			wood: '/assets/spritesheets/low-symbols/wood.json', // low
			merc: '/assets/spritesheets/low-symbols/merc.json', // low
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
