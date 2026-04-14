import styles from './RulesModal.module.scss'

interface RulesModalProps {
	onClose: () => void
}

export default function RulesModal({ onClose }: RulesModalProps) {
	return (
		<div
			className={styles.overlay}
			onClick={onClose}
			role='presentation'
		>
			<div
				className={styles.inner}
				onClick={e => e.stopPropagation()}
				role='dialog'
				aria-modal='true'
				aria-labelledby='rules-modal-title'
			>
				<header className={styles.header}>
					<h2 id='rules-modal-title' className={styles.title}>
						Game rules
					</h2>
					<p className={styles.lead}>
						Quick reference for how this slot behaves — spins, bets, wins, and
						the fire bonus.
					</p>
				</header>

				<div className={styles.body}>
					<section className={styles.section}>
						<h3 className={styles.sectionTitle}>Wins &amp; paylines</h3>
						<p className={styles.text}>
							After a spin, the reels stop. Payouts depend on symbol matches
							along active paylines — including horizontal, vertical, and
							diagonal paths across the grid.
						</p>
					</section>

					<section className={styles.section}>
						<h3 className={styles.sectionTitle}>Symbols &amp; colors</h3>
						<p className={styles.text}>
							You will see crystals, gems, gold, mercury, ore, sulfur, and wood
							symbols on the reels. The chest is a{' '}
							<span className={styles.hueGold}>wild symbol</span>. The{' '}
							<strong className={styles.fireWord}>fire symbol</strong> is the
							bonus and appears as a bright{' '}
							<span className={styles.hueOrange}>orange</span> flame. The reel
							background uses <span className={styles.hueRed}>red</span> and{' '}
							<span className={styles.hueBlue}>blue</span> tones.
						</p>
					</section>

					<section className={styles.section}>
						<h3 className={styles.sectionTitle}>Spin &amp; balance</h3>
						<p className={styles.text}>
							Press the <strong className={styles.kbd}>$</strong> control to
							spin. Your current bet is deducted from the bankroll for each spin.
							If your balance is too low, you cannot start a spin.
						</p>
					</section>

					<section className={styles.section}>
						<h3 className={styles.sectionTitle}>Bet size</h3>
						<p className={styles.text}>
							Use <strong className={styles.kbd}>+</strong> and{' '}
							<strong className={styles.kbd}>−</strong> to change the bet in
							fixed steps. The bet cannot be set higher than your remaining
							balance.
						</p>
					</section>

					<section className={styles.section}>
						<h3 className={styles.sectionTitle}>Fire bonus</h3>
						<p className={styles.text}>
							Each <strong className={styles.fireWord}>fire</strong> symbol fills
							the bonus meter. When the meter reaches <strong>7</strong>, you are
							awarded <strong>$20</strong> and the meter is reduced accordingly.
						</p>
					</section>

					<section className={styles.section}>
						<h3 className={styles.sectionTitle}>Result feedback</h3>
						<p className={styles.text}>
							Winning lines and symbols may be highlighted after the reels come
							to a rest so you can see what matched.
						</p>
					</section>

					<section className={styles.section}>
						<h3 className={styles.sectionTitle}>Audio</h3>
						<p className={styles.text}>
							The speaker control toggles background music on or off.
						</p>
					</section>
				</div>

				<footer className={styles.footer}>
					<button
						type='button'
						className={styles.closeButton}
						onClick={onClose}
					>
						Close
					</button>
					<p className={styles.hint}>Tap outside or press Close to return.</p>
				</footer>
			</div>
		</div>
	)
}
