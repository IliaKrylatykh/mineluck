import { GAME } from '../../../GAME'
import { setupReel } from '../../../utils/ReelHelper'
import { Block } from '../../Block'

export class SetSymbolsToReel extends Block {
	constructor(name: string) {
		super(name)
	}

	start(): void {
		this._addSymbolsToReelContainers()
		this.end()
	}

	private _addSymbolsToReelContainers(): void {
		setupReel(0, GAME.containers.reelAContainer, this.models)
		setupReel(1, GAME.containers.reelBContainer, this.models)
		setupReel(2, GAME.containers.reelCContainer, this.models)
		setupReel(3, GAME.containers.reelDContainer, this.models)
	}
}
