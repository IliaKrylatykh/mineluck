import { Assets, AnimatedSprite } from 'pixi.js'
import { GAME, GAME_MODELS, gameConfig } from '../../../GAME'
import { XContainer } from '../../../pixi/XContainer'
import { Block } from '../../Block'

const BONUS_SLOTS = 7
const ICON_W = 28
const ICON_H = 30
const GAP = 8
const PITCH = ICON_W + GAP

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
