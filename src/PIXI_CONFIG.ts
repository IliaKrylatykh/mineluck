import { GAME, gameConfig } from './GAME'

export class PIXI_CONFIG {
	getConfig() {
		return {
			progress_container: {
				label: 'progress-container',
				x: () => window.innerWidth / 2,
				y: () => window.innerHeight / 2,
			},
			loading_background_bar: {
				label: 'loading-background-bar',
				parent: GAME.containers.progressContainer,
				pivot: 0,
				w: () => 300,
				h: () => 4,
				x: () => -150,
				y: () => -10,
				color: 0x6a6a6a,
			},
			progress_bar: {
				label: 'progress-bar',
				parent: GAME.containers.progressContainer,
				pivot: 0,
				w: () => 1,
				h: () => 4,
				x: () => -150,
				y: () => -10,
				color: 0xff0000,
			},
			progress_text: {
				style: {
					fontFamily: 'Lato, sans-serif',
					fontSize: 100,
					fill: 0xffffff,
					align: 'center' as const,
					fontWeight: 'normal' as const,
				},
				scale: 0.2,
				anchor: 0.5,
				position: {
					x: 0,
					y: 30,
				},
			},
			main_game_container: {
				label: 'main-game-container',
				x: () => 0,
				y: () => 0,
			},
			BG_castle: {
				label: 'bg-castle',
				parent: GAME.containers.mainGameContainer,
				textureKey: 'BG_castle',
				anchor: 0,
				w: () => 1,
				h: () => 1,
				x: () => window.innerWidth / 2,
				y: () => 0,
			},
		}
	}
}
