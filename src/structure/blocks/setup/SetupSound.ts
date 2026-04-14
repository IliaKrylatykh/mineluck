import { ensureGameSounds } from '../../../audio/gameSounds'
import { Block } from '../../Block'

export class SetupSounds extends Block {
	constructor(name: string) {
		super(name)
	}

	start() {
		if (this.models.progress.playWithSound) {
			ensureGameSounds().then(sound => {
				sound.play('music-1', {
					loop: true,
				})
			})
		}
		this.end()
	}
}
