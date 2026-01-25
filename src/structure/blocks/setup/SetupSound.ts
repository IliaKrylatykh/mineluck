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
			// BUTTON SFX
			sound.add('UI-pick', '/assets/audio/SFX/BUTTON_12.wav')
			sound.volume('UI-pick', 0.01)

			//MUSIC
			sound.add('music-1', '/assets/audio/music/main_theme.mp3')
			sound.volume('music-1', 0.03)

			//REEL SFX
			sound.add('reel-thud', '/assets/audio/SFX/light-thud-super-low.mp3')
			sound.volume('reel-thud', 0.6)

			// GAME EVENTS
			sound.add('coin-count-loop', '/assets/audio/SFX/coin-loop-detuned.wav')
			sound.volume('coin-count-loop', 0.05)

			sound.add('coin-flung', '/assets/audio/SFX/coin-flung-med.mp3')
			sound.volume('coin-flung', 0.2)

			sound.play('music-1', {
				loop: true,
			})

			sound.play('music-1', {
				loop: true,
			})
		})
	}
}
