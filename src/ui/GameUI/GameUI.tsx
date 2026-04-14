import { Component } from 'react'
import { Models } from '../../models'
import { DeepReadonly } from '../../types'
import { ensureGameSounds } from '../../audio/gameSounds'
import { GAME, GAME_MODELS } from '../../GAME'
import AudioModal from '../Modals/AudioModal'
import styles from './GameUI.module.scss'
import GameControlArea from '../GameControlArea'
import InsufficientFundsModal from '../Modals/InsofficientFundsModal'

interface GameUIProps {
	models: DeepReadonly<Models>
}

interface GameUIState {
	showPopup: boolean
	menuIsOpen: boolean
	gameControlAreaVisible: boolean
	gameControlsVisible: boolean
	menuAudioVisible: boolean
	audioPopupVisible: boolean
	musicEnabled: boolean
}

export default class GameUI extends Component<GameUIProps, GameUIState> {
	private static instance: GameUI | null = null
	private musicToggleEpoch = 0

	constructor(props: GameUIProps) {
		super(props)
		this.state = {
			showPopup: false,
			menuIsOpen: false,
			gameControlAreaVisible: false,
			gameControlsVisible: true,
			menuAudioVisible: false,
			audioPopupVisible: false,
			musicEnabled: props.models.progress.playWithSound,
		}
		GameUI.instance = this
	}

	componentDidMount(): void {
		GAME.events.enableSound.add(this.handleEnableSound)
	}

	componentWillUnmount(): void {
		GAME.events.enableSound.remove(this.handleEnableSound)
	}

	static getInstance(): GameUI | null {
		return GameUI.instance
	}

	public showPopup(isVisible: boolean): void {
		this.setState({
			showPopup: isVisible,
		})
	}

	showAudioPopup(isVisible: boolean): void {
		this.setState({
			audioPopupVisible: isVisible,
		})
	}

	public showMenuAudio(isVisible: boolean): void {
		this.setState({
			menuAudioVisible: isVisible,
		})
	}

	public showGameControlArea(isVisible: boolean): void {
		this.setState({
			gameControlAreaVisible: isVisible,
		})
	}

	public showGameControls(isVisible: boolean): void {
		this.setState({
			gameControlsVisible: isVisible,
		})
	}

	private handlePopupClose = (): void => {
		this.setState({ showPopup: false })
	}

	private handleEnableSound = (enabled?: boolean): void => {
		this.setState({ musicEnabled: Boolean(enabled) })
	}

	private handleMusicToggle = (): void => {
		const nextMusicEnabled = !this.state.musicEnabled

		if (!nextMusicEnabled) {
			this.musicToggleEpoch++
			GAME.sound?.stop('music-1')
			this.setState({ musicEnabled: false })
			return
		}

		const epoch = ++this.musicToggleEpoch

		const startMusic = (sound: NonNullable<typeof GAME.sound>): void => {
			sound.play('music-1', { loop: true })
			GAME_MODELS.progress.playWithSound = true
			this.setState({ musicEnabled: true })
		}

		if (GAME.sound) {
			startMusic(GAME.sound)
			return
		}

		ensureGameSounds()
			.then(sound => {
				if (epoch !== this.musicToggleEpoch) {
					return
				}
				startMusic(sound)
			})
			.catch(() => {
				if (epoch !== this.musicToggleEpoch) {
					return
				}
				this.setState({ musicEnabled: false })
			})
	}

	render() {
		const {
			models: { bet },
		} = this.props

		return (
			<>
				<div className={styles.gameUi}>
					{this.state.gameControlAreaVisible && (
						<button
							type='button'
							className={styles.musicToggle}
							onClick={this.handleMusicToggle}
							title={this.state.musicEnabled ? 'Mute music' : 'Unmute music'}
							aria-label={
								this.state.musicEnabled ? 'Mute music' : 'Unmute music'
							}
						>
							{this.state.musicEnabled ? '\u{1F50A}' : '\u{1F507}'}
						</button>
					)}
					{this.state.audioPopupVisible && (
						<AudioModal onClose={() => this.showAudioPopup(false)} />
					)}
					{this.state.gameControlAreaVisible && (
						<>
							<GameControlArea
								showControls={this.state.gameControlsVisible}
								betAmount={bet.betAmount}
								bankBalance={bet.bankBalance}
							/>
						</>
					)}
				</div>

				<InsufficientFundsModal
					isVisible={this.state.showPopup}
					onClose={this.handlePopupClose}
				/>
			</>
		)
	}
}
