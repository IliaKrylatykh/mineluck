import { Component } from 'react'
import { Models } from '../../models'
import { DeepReadonly } from '../../types'
import { GAME } from '../../GAME'
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
}

export default class GameUI extends Component<GameUIProps, GameUIState> {
	private static instance: GameUI | null = null

	constructor(props: GameUIProps) {
		super(props)
		this.state = {
			showPopup: false,
			menuIsOpen: false,
			gameControlAreaVisible: false,
			gameControlsVisible: true,
			menuAudioVisible: false,
			audioPopupVisible: false,
		}
		GameUI.instance = this
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

	render() {
		const {
			models: { bet },
		} = this.props

		return (
			<>
				<div className={styles.gameUi}>
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
