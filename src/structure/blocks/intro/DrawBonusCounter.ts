import { Assets, AnimatedSprite, Graphics } from 'pixi.js'
import { GAME, GAME_MODELS, gameConfig } from '../../../GAME'
import { XContainer } from '../../../pixi/XContainer'
import { Block } from '../../Block'

const BONUS_SLOTS = 7
const ICON_W = 28
const ICON_H = 30
const GAP = 8
const PITCH = ICON_W + GAP
const ROW_W = (BONUS_SLOTS - 1) * PITCH + ICON_W
const BACKDROP_PAD_X = 10
const BACKDROP_PAD_Y = 5

let bonusIcons: AnimatedSprite[] = []

export function updateBonusCounter(): void {
	if (!GAME.containers.bonusCounterContainer) {
		console.warn('updateBonusCounter: bonusCounterContainer not found')
		return
	}
	
	if (bonusIcons.length === 0) {
		console.warn('updateBonusCounter: bonusIcons array is empty')
		return
	}
	
	const filled = GAME_MODELS.result.bonusCounter
	console.log(`updateBonusCounter: filled=${filled}, icons=${bonusIcons.length}`)
	
	bonusIcons.forEach((sprite, i) => {
		const isFilled = i < filled
		if (isFilled) {
			sprite.visible = true
			sprite.alpha = 1
			sprite.tint = 0xffffff
			if (!sprite.playing) {
				sprite.play()
			}
		} else {
			sprite.visible = true
			sprite.alpha = 0.35
			sprite.tint = 0xffffff
			if (sprite.playing) {
				sprite.gotoAndStop(0)
				sprite.stop()
			}
		}
	})
}

export class DrawBonusCounter extends Block {
	constructor(name: string) {
		super(name)
	}

	start(): void {
		this._appendBonusCounter()
		this.end()
	}

	private _appendBonusCounter(): void {
		const { bonus_counter_container } = GAME.config.getConfig()
		GAME.containers.bonusCounterContainer = new XContainer(
			bonus_counter_container,
		)
		const { bonusCounterContainer, mainGameContainer } = GAME.containers
		mainGameContainer.addChild(bonusCounterContainer)

		const sheet = Assets.get('fire_small')
		const textures = sheet.animations.FIRE_SMALL

		const centerX = gameConfig.gameWidth / 4
		bonusIcons = []

		const backdrop = new Graphics()
		backdrop.label = 'bonus-counter-backdrop'
		const bw = ROW_W + BACKDROP_PAD_X * 2
		const bh = ICON_H + BACKDROP_PAD_Y * 2
		const bx = centerX - bw / 2
		const by = -bh / 2
		backdrop
			.roundRect(bx, by, bw, bh, 8)
			.fill({ color: 0x1a1a22, alpha: 0.72 })
		bonusCounterContainer.addChildAt(backdrop, 0)

		for (let i = 0; i < BONUS_SLOTS; i++) {
			const sprite = new AnimatedSprite(textures)
			sprite.anchor.set(0.5)
			sprite.position.set(
				centerX + (i - (BONUS_SLOTS - 1) / 2) * PITCH,
				0,
			)
			sprite.width = ICON_W
			sprite.height = ICON_H
			sprite.animationSpeed = 0.15
			sprite.loop = true
			sprite.visible = true
			sprite.alpha = 0.35
			sprite.tint = 0xffffff
			sprite.gotoAndStop(0)
			sprite.stop()
			bonusCounterContainer.addChild(sprite)
			bonusIcons.push(sprite)
		}

		updateBonusCounter()
	}
}
