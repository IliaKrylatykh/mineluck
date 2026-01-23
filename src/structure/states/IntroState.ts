import { GAME } from '../../GAME'
import GameUI from '../../ui/GameUI'
import { DrawBonusCounter, updateBonusCounter } from '../blocks/intro/DrawBonusCounter'
import { DrawGameFrame } from '../blocks/intro/DrawGameFrame'
import { DrawGameLogo } from '../blocks/intro/DrawGameLogo'
import { DrawMainGameContainer } from '../blocks/intro/DrawMainGameContainer'
import { DrawReelBackboard } from '../blocks/intro/DrawReelBackboard'
import { DrawReelContainers } from '../blocks/intro/DrawReelContainers'
import { DrawSplashContainer } from '../blocks/intro/DrawSplashContainer'
import { State } from '../State'
import { GameState } from './StateDefinitions'

export class IntroState extends State {
	setupEvents(): void {
		console.log('🌟------IntroState------🌟')
		GAME.events.gameInfo.add(updateBonusCounter)
	}

	modelChanges(): void {
		//
	}

	setupBlocks(): void {
		this.blocks = [
			new DrawSplashContainer('Draw splash container'),
			new DrawMainGameContainer('Draw main game container'),
			new DrawGameLogo('Draw game logo'),
			new DrawGameFrame('Draw game frame'),
			new DrawReelBackboard('Draw reel backboard'),
			new DrawBonusCounter('Draw bonus counter'),
			new DrawReelContainers('Draw reel containers'),
		]
	}

	removeEvents(): void {
		//
	}

	exitState(): void {
		GameUI.getInstance()?.showMenuAudio(true)
		GAME.states[GameState.GAME_READY].enterState()
	}
}
