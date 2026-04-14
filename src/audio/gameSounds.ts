import { GAME } from '../GAME'

type SoundModule = typeof import('@pixi/sound').sound

let initPromise: Promise<SoundModule> | null = null

function registerAll(sound: SoundModule): void {
	sound.add('UI-pick', '/assets/audio/SFX/BUTTON_12.wav')
	sound.volume('UI-pick', 0.01)

	sound.add('music-1', '/assets/audio/music/main_theme.mp3')
	sound.volume('music-1', 0.03)

	sound.add('reel-thud', '/assets/audio/SFX/light-thud-super-low.mp3')
	sound.volume('reel-thud', 0.6)

	sound.add('coin-count-loop', '/assets/audio/SFX/coin-loop-detuned.wav')
	sound.volume('coin-count-loop', 0.05)

	sound.add('coin-flung', '/assets/audio/SFX/coin-flung-med.mp3')
	sound.volume('coin-flung', 0.2)
}

/** Loads @pixi/sound and registers all aliases once. */
export function ensureGameSounds(): Promise<SoundModule> {
	if (GAME.sound) {
		return Promise.resolve(GAME.sound)
	}
	if (!initPromise) {
		initPromise = import('@pixi/sound').then(({ sound }) => {
			GAME.sound = sound
			registerAll(sound)
			return sound
		})
	}
	return initPromise
}
