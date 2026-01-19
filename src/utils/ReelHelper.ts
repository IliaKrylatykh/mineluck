import { Assets } from 'pixi.js'
import { GAME, gameConfig } from '../GAME'
import { ZAnimatedSprite } from '../pixi/ZAnimatedSprite'
import { XContainer } from '../pixi/XContainer'
import { FORCED_RESULTS, ForcedResult } from '../forcedResults/FORCED-RESULTS'

export function deepFreeze<T>(obj: T): T {
	if (obj === null || typeof obj !== 'object') return obj

	Object.freeze(obj)

	if (Array.isArray(obj)) {
		obj.forEach(item => deepFreeze(item))
	} else {
		Object.values(obj).forEach(value => deepFreeze(value))
	}

	return obj
}

export function getRandomForcedResult(): ForcedResult {
	const potentialForcedResult = Object.keys(FORCED_RESULTS).map(Number)
	let randomKey
	if (gameConfig.useForcedResultIndex !== undefined) {
		randomKey = potentialForcedResult[gameConfig.useForcedResultIndex - 1]
	} else {
		randomKey =
			potentialForcedResult[
				Math.floor(Math.random() * potentialForcedResult.length)
			]
	}
	const randomForcedResult =
		FORCED_RESULTS[randomKey as keyof typeof FORCED_RESULTS]
	return randomForcedResult
}

export function resetReelContainerPositions(): void {
	GAME.containers.reelAContainer.y = 0
	GAME.containers.reelBContainer.y = 0
	GAME.containers.reelCContainer.y = 0
	GAME.containers.reelDContainer.y = 0
	GAME.containers.reelEContainer.y = 0
}

export function emptyAllReels(): void {
	GAME.containers.reelAContainer.children.forEach(child => child.destroy())
	GAME.containers.reelBContainer.children.forEach(child => child.destroy())
	GAME.containers.reelCContainer.children.forEach(child => child.destroy())
	GAME.containers.reelDContainer.children.forEach(child => child.destroy())
	GAME.containers.reelEContainer.children.forEach(child => child.destroy())

	GAME.containers.reelAContainer.removeChildren()
	GAME.containers.reelBContainer.removeChildren()
	GAME.containers.reelCContainer.removeChildren()
	GAME.containers.reelDContainer.removeChildren()
	GAME.containers.reelEContainer.removeChildren()
	GAME.events.tempRedraw.removeAll()
}

export function getSymbolFrames(symbol: string): any {
	var frames = []
	var sheet
	switch (symbol) {
		case 'W1':
			sheet = Assets.get('chest')
			frames = sheet.animations.CHEST
			break

		case 'B1':
			sheet = Assets.get('fire')
			frames = sheet.animations.FIRE
			break

		case 'L1':
			sheet = Assets.get('merc')
			frames = sheet.animations.MERC
			break
		case 'L2':
			sheet = Assets.get('ore')
			frames = sheet.animations.ORE
			break
		case 'L3':
			sheet = Assets.get('sulf')
			frames = sheet.animations.SULF
			break
		case 'L4':
			sheet = Assets.get('wood')
			frames = sheet.animations.WOOD
			break

		case 'H1':
			sheet = Assets.get('crys')
			frames = sheet.animations.CRYS
			break
		case 'H2':
			sheet = Assets.get('gem')
			frames = sheet.animations.GEM
			break
		case 'H3':
			sheet = Assets.get('gold')
			frames = sheet.animations.GOLD
			break
	}
	return frames
}

export function createSymbol(frames: any, yPosition?: number): ZAnimatedSprite {
	if (!frames || frames.length === 0) {
		console.error('No frames provided for symbol')
		return null
	}
	const { animation_default } = GAME.config.getConfig()
	animation_default.textures = frames

	if (yPosition !== undefined) {
		animation_default.y = () => yPosition
	}

	const symbol = new ZAnimatedSprite(animation_default)
	symbol.gotoAndStop(0)

	return symbol
}

export function createAnimatedSymbol(
	frames: any,
	yPosition?: number,
): ZAnimatedSprite {
	if (!frames || frames.length === 0) {
		console.error('No frames provided for animated symbol')
		return null
	}
	const { animation_default } = GAME.config.getConfig()
	animation_default.textures = frames

	if (yPosition !== undefined) {
		animation_default.y = () => yPosition
	}

	const symbol = new ZAnimatedSprite(animation_default)
	symbol.gotoAndStop(0)
	return symbol
}

export function setupReel(
	reelNumber: number,
	reelContainer: XContainer,
	models: any,
): void {
	const allReels = models.reel.reelDisplay.length

	reelContainer.children.forEach(child => {
		if (child instanceof ZAnimatedSprite) {
			child.cleanup()
			child.destroy()
		}
	})

	reelContainer.removeChildren()

	for (var y = 0; y < allReels; y++) {
		const reelToBuild = models.reel.reelDisplay[y][reelNumber]
		const frames = getSymbolFrames(reelToBuild)
		const symbolHeight = gameConfig.gameWidth / 5
		const yPosition = symbolHeight * y
		const symbol = createSymbol(frames, yPosition)

		if (symbol) {
			reelContainer.addChild(symbol)
		}
	}
}
