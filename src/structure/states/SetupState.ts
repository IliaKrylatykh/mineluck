import { GAME } from '../../GAME'
import { AssetLoad } from '../blocks/setup/AssetLoad'
import { EnableAudioModal } from '../blocks/setup/EnabledAudioModal'
import { SetupSounds } from '../blocks/setup/SetupSound'
import { State } from '../State'
import { GameState } from './StateDefinitions'

export class SetupState extends State {
	setupEvents(): void {
		console.log('🎛️------SetupState------🎛️')
		GAME.events.enableSound.add(this._enableAudioProperty.bind(this))
	}

	modelChanges(): void {
		//
	}

	setupBlocks(): void {
		this.blocks = [
			new AssetLoad('Asset load'),
			new EnableAudioModal('Enable audio modal'),
			new SetupSounds('Setup sounds'),
		]
	}

	removeEvents(): void {}

	exitState(): void {
		GAME.states[GameState.INTRO].enterState()
	}

	private _enableAudioProperty(enableSound: boolean): void {
		this.models.progress.playWithSound = enableSound
	}
}
