import { Application } from 'pixi.js'
import { CustomEvent } from './events/CustomEvent'
import { Models } from './models'
import { SetupState } from './structure/states/SetupState'
import { GameState } from './structure/states/StateDefinitions'
import { sound } from '@pixi/sound'
import { XContainer } from './pixi/XContainer'
import { PIXI_CONFIG } from './PIXI_CONFIG'
import { IntroState } from './structure/states/IntroState'
import { GameReadyState } from './structure/states/GameReadyState'
import { SpinResultState } from './structure/states/SpinResultState'
import { GameOverState } from './structure/states/GameOverState'

type GameConfig = {
	gameWidth: number
	gameHeight: number

	reelSpinSpeed: number

	defaultBet: number
	betChangeAmount: number
	bankBalance: number

	useForcedResult: boolean
	useForcedResultIndex: number | undefined
	probabilityFRChosen: number

	showBlockConsole: boolean
	showEventConsole: boolean
	masksEnabled: true
}

export const gameConfig: GameConfig = {
	gameWidth: 320,
	gameHeight: 500,

	reelSpinSpeed: 19,

	defaultBet: 5,
	betChangeAmount: 5,
	bankBalance: 500,

	useForcedResult: false,
	useForcedResultIndex: undefined,
	probabilityFRChosen: 9,

	// dev
	showBlockConsole: true,
	showEventConsole: true,
	masksEnabled: true,
}

type GAME_Type = {
	states: {
		[GameState.SETUP]: SetupState
		[GameState.INTRO]: IntroState
		[GameState.GAME_READY]: GameReadyState
		[GameState.SPIN_RESULT]: SpinResultState
		[GameState.GAME_OVER]: GameOverState
	}
	events: {
		audioToggle: CustomEvent<void>
		volumeUp: CustomEvent<void>
		volumeDown: CustomEvent<void>
		blockComplete: CustomEvent<void>
		redraw: CustomEvent<void>
		tempRedraw: CustomEvent<void>
		enableSound: CustomEvent<boolean>
		spinButton: CustomEvent<void>
		gameInfo: CustomEvent<void>
		changeBet: CustomEvent<number>
	}
	containers: {
		progressContainer: XContainer | undefined
		splashContainer: XContainer | undefined
		mainGameContainer: XContainer | undefined
		masterReelContainer: XContainer | undefined
		reelAContainer: XContainer | undefined
		reelBContainer: XContainer | undefined
		reelCContainer: XContainer | undefined
		reelDContainer: XContainer | undefined
		reelEContainer: XContainer | undefined
		winPanelContainer: XContainer | undefined
	}
	sound: typeof sound | undefined
	app: Application
	config: PIXI_CONFIG | undefined
}

export const GAME_MODELS = new Models()

export const GAME: GAME_Type = {
	states: {
		[GameState.SETUP]: new SetupState(),
		[GameState.INTRO]: new IntroState(),
		[GameState.GAME_READY]: new GameReadyState(),
		[GameState.SPIN_RESULT]: new SpinResultState(),
		[GameState.GAME_OVER]: new GameOverState(),
	},
	events: {
		audioToggle: new CustomEvent<void>('audio-toggle', true),
		volumeUp: new CustomEvent<void>('volume-up'),
		volumeDown: new CustomEvent<void>('volume-down'),
		blockComplete: new CustomEvent<void>('block-complete'),
		redraw: new CustomEvent<void>('redraw', true),
		tempRedraw: new CustomEvent<void>('temp-redraw', true),
		spinButton: new CustomEvent<void>('spin-button'),
		gameInfo: new CustomEvent<void>('game-info', true),
		changeBet: new CustomEvent<number>('change-bet'),
		enableSound: new CustomEvent<boolean>('sound-enabled', true),
	},
	containers: {
		progressContainer: undefined,
		splashContainer: undefined,
		mainGameContainer: undefined,
		masterReelContainer: undefined,
		reelAContainer: undefined,
		reelBContainer: undefined,
		reelCContainer: undefined,
		reelDContainer: undefined,
		reelEContainer: undefined,
		winPanelContainer: undefined,
	},
	sound: undefined,
	app: new Application(),
	config: new PIXI_CONFIG(),
}

GAME.states[GameState.SETUP].enterState()
