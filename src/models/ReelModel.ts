export enum SYMBOLS {
	B1 = 'B1', // fire

	W1 = 'W1', // chest

	L1 = 'L1', // merc
	L2 = 'L2', // ore
	L3 = 'L3', // sulf
	L4 = 'L4', // wood

	H1 = 'H1', // crys
	H2 = 'H2', // gem
	H3 = 'H3', // gold
}

export enum winMultipliers {
	H1 = 10,
	H2 = 10,
	H3 = 10,
	L1 = 3,
	L2 = 3,
	L3 = 3,
	L4 = 3,
}

export class ReelModel {
	reelDisplay: string[][] = [
		['H1', 'H2', 'H3', 'H1', 'H2'],
		['M1', 'M2', 'M3', 'M1', 'M2'],
		['L1', 'L2', 'L3', 'L1', 'L2'],
	]
}
