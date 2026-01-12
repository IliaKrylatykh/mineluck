import styles from './InsufficientFundsModal.module.scss'

interface InsufficientFundsModalProps {
	isVisible: boolean
	onClose: () => void
}

export default function InsufficientFundsModal({
	isVisible,
	onClose,
}: InsufficientFundsModalProps) {
	if (!isVisible) return null

	const handleOkClick = () => {
		onClose()
		location.reload()
	}

	return (
		<div className={styles.modal}>
			<div className={styles.title}>Insufficient funds</div>
			<div className={styles.message}>Top up your balance to continue</div>
			<div className={styles.button} onClick={handleOkClick}>
				OK
			</div>
		</div>
	)
}
