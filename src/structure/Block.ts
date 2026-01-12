import { GAME, GAME_MODELS } from '../GAME'
import { Models } from '../models'
import { DeepReadonly } from '../types'

export abstract class Block {
	name: string = 'Step'
	protected readonly models: DeepReadonly<Models>

	constructor(name: string) {
		this.name = name
		this.models = GAME_MODELS
	}

	abstract start(): void

	end(): void {
		GAME.events.blockComplete.dispatch()
	}
}
