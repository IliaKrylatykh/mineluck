import { GAME } from '../../../GAME'
import styles from './AudioModal.module.scss'

interface AudioModalProps {
	onClose: () => void
}

export default function AudioModal({ onClose }: AudioModalProps) {
	const handleYesClick = () => {
		onClose()
		GAME.events.enableSound.dispatch(true)
	}

	const handleNoClick = () => {
		onClose()
		GAME.events.enableSound.dispatch(false)
	}

	return (
		<div className={styles.modal}>
			<div className={styles.title}>Play with sound enabled?</div>
			<div className={styles.button} onClick={handleNoClick}>
				NO
			</div>
			<div className={styles.button} onClick={handleYesClick}>
				YES
			</div>
		</div>
	)
}
