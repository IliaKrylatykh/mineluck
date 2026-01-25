import { Component } from 'react'
import { GAME } from '../../GAME'
import styles from './GameControlArea.module.scss'

interface GameControlAreaState {
	showControls: boolean
	betAmount: number
	bankBalance: number
}

interface GameControlAreaProps {
	showControls: boolean
	betAmount: number
	bankBalance: number
}

export default class GameControlArea extends Component<
	GameControlAreaProps,
	GameControlAreaState
> {
	private static instance: GameControlArea | null = null

	constructor(props: GameControlAreaProps) {
		super(props)
		this.state = {
			showControls: props.showControls ?? false,
			betAmount: props.betAmount,
			bankBalance: props.bankBalance,
		}
		GameControlArea.instance = this
	}

	public static getInstance(): GameControlArea | null {
		return GameControlArea.instance
	}

	public setBankInfo(betAmount: number, bankBalance: number): void {
		this.setState({
			betAmount,
			bankBalance,
		})
	}

	componentDidUpdate(prevProps: GameControlAreaProps): void {
		if (prevProps.showControls !== this.props.showControls) {
			this.setState({
				showControls: this.props.showControls,
			})
		}
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.buttonContainer}>
					<div className={styles.displayContainer}>
						<div className={styles.bankContainer}>
							<div className={styles.betDisplay}>${this.state.betAmount}</div>
							<div className={styles.horizontal}></div>
							<div className={styles.bankDisplay}>
								${this.state.bankBalance}
							</div>
						</div>
					</div>

					{this.state.showControls && (
						<>
							<div className={styles.displayContainer}>
								<div
									className={styles.spinButton}
									onClick={() => GAME.events.spinButton.dispatch()}
								>
									$
								</div>
							</div>
							<div className={styles.displayContainer}>
								<div className={styles.betButtonContainer}>
									<div
										className={`${styles.betButton} ${styles.betButtonPlus}`}
										onClick={() => GAME.events.changeBet.dispatch(1)}
									>
										+
									</div>
									<div
										className={`${styles.betButton} ${styles.betButtonMinus}`}
										onClick={() => GAME.events.changeBet.dispatch(-1)}
									>
										-
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		)
	}
}
