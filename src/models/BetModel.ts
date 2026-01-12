import { gameConfig } from '../GAME'

export enum BetChange {
	Increase = 1,
	Decrease = -1,
}

export class BetModel {
	betAmount: number = gameConfig.defaultBet
	bankBalance: number = gameConfig.bankBalance - gameConfig.defaultBet // your bank balance should include the bet amount
}
