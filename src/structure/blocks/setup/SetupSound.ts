import { Block } from '../../Block'
import { GAME } from '../../../GAME'

export class SetupSounds extends Block {
	constructor(name: string) {
		super(name)
	}

	start() {
		if (this.models.progress.playWithSound) {
			this.setupSounds()
		}
		this.end()
	}

	private setupSounds(): void {
		import('@pixi/sound').then(({ sound }) => {
			GAME.sound = sound

			//MUSIC
			sound.add('music-1', '/assets/audio/music/main_theme.mp3')
			sound.volume('music-1', 0.1)

			sound.play('music-1', {
				loop: true,
			})
		})
	}
}
