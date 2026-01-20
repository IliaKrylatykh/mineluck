import { deepFreeze } from '../utils/ReelHelper'

export type ForcedResult = {
	label: string
	result: string[][]
	isWin: boolean
	winLines: number
}

export const FORCED_RESULTS: { [key: number]: ForcedResult } = deepFreeze({
	1: {
		label: 'all-L1',
		result: [
			['L1', 'L1', 'L1', 'L1', 'L1'],
			['L1', 'L1', 'L1', 'L1', 'L1'],
			['L1', 'L1', 'L1', 'L1', 'L1'],
		],
		isWin: true,
		winLines: 14,
	},
	2: {
		label: 'all-L2',
		result: [
			['L2', 'L2', 'L2', 'L2', 'L2'],
			['L2', 'L2', 'L2', 'L2', 'L2'],
			['L2', 'L2', 'L2', 'L2', 'L2'],
		],
		isWin: true,
		winLines: 14,
	},
	3: {
		label: 'all-L3',
		result: [
			['L3', 'L3', 'L3', 'L3', 'L3'],
			['L3', 'L3', 'L3', 'L3', 'L3'],
			['L3', 'L3', 'L3', 'L3', 'L3'],
		],
		isWin: true,
		winLines: 14,
	},
	4: {
		label: 'all-L4',
		result: [
			['L4', 'L4', 'L4', 'L4', 'L4'],
			['L4', 'L4', 'L4', 'L4', 'L4'],
			['L4', 'L4', 'L4', 'L4', 'L4'],
		],
		isWin: true,
		winLines: 14,
	},

	5: {
		label: 'all-H1',
		result: [
			['H1', 'H1', 'H1', 'H1', 'H1'],
			['H1', 'H1', 'H1', 'H1', 'H1'],
			['H1', 'H1', 'H1', 'H1', 'H1'],
		],
		isWin: true,
		winLines: 14,
	},
	6: {
		label: 'all-H2',
		result: [
			['H2', 'H2', 'H2', 'H2', 'H2'],
			['H2', 'H2', 'H2', 'H2', 'H2'],
			['H2', 'H2', 'H2', 'H2', 'H2'],
		],
		isWin: true,
		winLines: 14,
	},
	7: {
		label: 'all-H3',
		result: [
			['H3', 'H3', 'H3', 'H3', 'H3'],
			['H3', 'H3', 'H3', 'H3', 'H3'],
			['H3', 'H3', 'H3', 'H3', 'H3'],
		],
		isWin: true,
		winLines: 14,
	},

	8: {
		label: 'all-H1-H2-H3',
		result: [
			['H1', 'H2', 'H3', 'H1', 'H2'],
			['H2', 'H3', 'H1', 'H2', 'H3'],
			['H3', 'H1', 'H2', 'H3', 'H1'],
		],
		isWin: false,
		winLines: 0,
	},
	11: {
		label: 'line1-L1',
		result: [
			['L1', 'L1', 'L1', 'L1', 'L1'],
			['L2', 'L3', 'H1', 'H2', 'L4'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	12: {
		label: 'line1-L2',
		result: [
			['L2', 'L2', 'L2', 'L2', 'L2'],
			['L1', 'L3', 'H1', 'H2', 'L4'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	13: {
		label: 'line1-L3',
		result: [
			['L3', 'L3', 'L3', 'L3', 'L3'],
			['L1', 'L2', 'H1', 'H2', 'L4'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	14: {
		label: 'line1-L4',
		result: [
			['L4', 'L4', 'L4', 'L4', 'L4'],
			['L1', 'L2', 'H1', 'H2', 'L3'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	15: {
		label: 'line1-H1',
		result: [
			['H1', 'H1', 'H1', 'H1', 'H1'],
			['L1', 'L2', 'L3', 'H2', 'L4'],
			['H2', 'H3', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	16: {
		label: 'line1-H2',
		result: [
			['H2', 'H2', 'H2', 'H2', 'H2'],
			['L1', 'L2', 'L3', 'H1', 'L4'],
			['H1', 'H3', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	17: {
		label: 'line1-H3',
		result: [
			['H3', 'H3', 'H3', 'H3', 'H3'],
			['L1', 'L2', 'L3', 'H1', 'L4'],
			['H1', 'H2', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	18: {
		label: 'line2-L1',
		result: [
			['L2', 'L3', 'H1', 'H2', 'L4'],
			['L1', 'L1', 'L1', 'L1', 'L1'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	19: {
		label: 'line2-L2',
		result: [
			['L1', 'L3', 'H1', 'H2', 'L4'],
			['L2', 'L2', 'L2', 'L2', 'L2'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	20: {
		label: 'line2-L3',
		result: [
			['L1', 'L2', 'H1', 'H2', 'L4'],
			['L3', 'L3', 'L3', 'L3', 'L3'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	21: {
		label: 'line2-L4',
		result: [
			['L1', 'L2', 'H1', 'H2', 'L3'],
			['L4', 'L4', 'L4', 'L4', 'L4'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	22: {
		label: 'line2-H1',
		result: [
			['L1', 'L2', 'L3', 'H2', 'L4'],
			['H1', 'H1', 'H1', 'H1', 'H1'],
			['H2', 'H3', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	23: {
		label: 'line2-H2',
		result: [
			['L1', 'L2', 'L3', 'H1', 'L4'],
			['H2', 'H2', 'H2', 'H2', 'H2'],
			['H1', 'H3', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	24: {
		label: 'line2-H3',
		result: [
			['L1', 'L2', 'L3', 'H1', 'L4'],
			['H3', 'H3', 'H3', 'H3', 'H3'],
			['H1', 'H2', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	25: {
		label: 'line3-L1',
		result: [
			['L2', 'L3', 'H1', 'H2', 'L4'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['L1', 'L1', 'L1', 'L1', 'L1'],
		],
		isWin: true,
		winLines: 1,
	},
	26: {
		label: 'line3-L2',
		result: [
			['L1', 'L3', 'H1', 'H2', 'L4'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['L2', 'L2', 'L2', 'L2', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	27: {
		label: 'line3-L3',
		result: [
			['L1', 'L2', 'H1', 'H2', 'L4'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['L3', 'L3', 'L3', 'L3', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	28: {
		label: 'line3-L4',
		result: [
			['L1', 'L2', 'H1', 'H2', 'L3'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['L4', 'L4', 'L4', 'L4', 'L4'],
		],
		isWin: true,
		winLines: 1,
	},
	29: {
		label: 'line3-H1',
		result: [
			['L1', 'L2', 'L3', 'H2', 'L4'],
			['H2', 'H3', 'L1', 'L2', 'L3'],
			['H1', 'H1', 'H1', 'H1', 'H1'],
		],
		isWin: true,
		winLines: 1,
	},
	30: {
		label: 'line3-H2',
		result: [
			['L1', 'L2', 'L3', 'H1', 'L4'],
			['H1', 'H3', 'L1', 'L2', 'L3'],
			['H2', 'H2', 'H2', 'H2', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	31: {
		label: 'line3-H3',
		result: [
			['L1', 'L2', 'L3', 'H1', 'L4'],
			['H1', 'H2', 'L1', 'L2', 'L3'],
			['H3', 'H3', 'H3', 'H3', 'H3'],
		],
		isWin: true,
		winLines: 1,
	},
	32: {
		label: 'line4-L1',
		result: [
			['L1', 'L2', 'L3', 'H1', 'H2'],
			['L1', 'H1', 'H2', 'H3', 'L2'],
			['L1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	33: {
		label: 'line4-L2',
		result: [
			['L2', 'L1', 'L3', 'H1', 'H2'],
			['L2', 'H1', 'H2', 'H3', 'L1'],
			['L2', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	34: {
		label: 'line4-L3',
		result: [
			['L3', 'L1', 'L2', 'H1', 'H2'],
			['L3', 'H1', 'H2', 'H3', 'L1'],
			['L3', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	35: {
		label: 'line4-L4',
		result: [
			['L4', 'L1', 'L2', 'H1', 'H2'],
			['L4', 'H1', 'H2', 'H3', 'L1'],
			['L4', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	36: {
		label: 'line4-H1',
		result: [
			['H1', 'L1', 'L2', 'L3', 'H2'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['H1', 'H3', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	37: {
		label: 'line4-H2',
		result: [
			['H2', 'L1', 'L2', 'L3', 'H1'],
			['H2', 'H1', 'H3', 'L1', 'L2'],
			['H2', 'H3', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	38: {
		label: 'line4-H3',
		result: [
			['H3', 'L1', 'L2', 'L3', 'H1'],
			['H3', 'H1', 'H2', 'L1', 'L2'],
			['H3', 'H2', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	39: {
		label: 'line5-L1',
		result: [
			['L2', 'L1', 'L3', 'H1', 'H2'],
			['H1', 'L1', 'H2', 'H3', 'L2'],
			['H2', 'L1', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	40: {
		label: 'line5-L2',
		result: [
			['L1', 'L2', 'L3', 'H1', 'H2'],
			['H1', 'L2', 'H2', 'H3', 'L1'],
			['H2', 'L2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	41: {
		label: 'line5-L3',
		result: [
			['L1', 'L3', 'L2', 'H1', 'H2'],
			['H1', 'L3', 'H2', 'H3', 'L1'],
			['H2', 'L3', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	42: {
		label: 'line5-L4',
		result: [
			['L1', 'L4', 'L2', 'H1', 'H2'],
			['H1', 'L4', 'H2', 'H3', 'L1'],
			['H2', 'L4', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	43: {
		label: 'line5-H1',
		result: [
			['L1', 'H1', 'L2', 'L3', 'H2'],
			['H2', 'H1', 'H3', 'L1', 'L2'],
			['H3', 'H1', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	44: {
		label: 'line5-H2',
		result: [
			['L1', 'H2', 'L2', 'L3', 'H1'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['H3', 'H2', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	45: {
		label: 'line5-H3',
		result: [
			['L1', 'H3', 'L2', 'L3', 'H1'],
			['H1', 'H3', 'H2', 'L1', 'L2'],
			['H2', 'H3', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	46: {
		label: 'line6-L1',
		result: [
			['L2', 'L3', 'L1', 'H1', 'H2'],
			['H1', 'H2', 'L1', 'H3', 'L2'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	47: {
		label: 'line6-L2',
		result: [
			['L1', 'L3', 'L2', 'H1', 'H2'],
			['H1', 'H2', 'L2', 'H3', 'L1'],
			['H2', 'H3', 'L2', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	48: {
		label: 'line6-L3',
		result: [
			['L1', 'L2', 'L3', 'H1', 'H2'],
			['H1', 'H2', 'L3', 'H3', 'L1'],
			['H2', 'H3', 'L3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	49: {
		label: 'line6-L4',
		result: [
			['L1', 'L2', 'L4', 'H1', 'H2'],
			['H1', 'H2', 'L4', 'H3', 'L1'],
			['H2', 'H3', 'L4', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	50: {
		label: 'line6-H1',
		result: [
			['L1', 'L2', 'H1', 'L3', 'H2'],
			['H2', 'H3', 'H1', 'L1', 'L2'],
			['H3', 'L1', 'H1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	51: {
		label: 'line6-H2',
		result: [
			['L1', 'L2', 'H2', 'L3', 'H1'],
			['H1', 'H3', 'H2', 'L1', 'L2'],
			['H3', 'L1', 'H2', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	52: {
		label: 'line6-H3',
		result: [
			['L1', 'L2', 'H3', 'L3', 'H1'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['H2', 'L1', 'H3', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	53: {
		label: 'line7-L1',
		result: [
			['L2', 'L3', 'H1', 'L1', 'H2'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	54: {
		label: 'line7-L2',
		result: [
			['L1', 'L3', 'H1', 'L2', 'H2'],
			['H1', 'H2', 'H3', 'L2', 'L1'],
			['H2', 'H3', 'L1', 'L2', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	55: {
		label: 'line7-L3',
		result: [
			['L1', 'L2', 'H1', 'L3', 'H2'],
			['H1', 'H2', 'H3', 'L3', 'L1'],
			['H2', 'H3', 'L1', 'L3', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	56: {
		label: 'line7-L4',
		result: [
			['L1', 'L2', 'H1', 'L4', 'H2'],
			['H1', 'H2', 'H3', 'L4', 'L1'],
			['H2', 'H3', 'L1', 'L4', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	57: {
		label: 'line7-H1',
		result: [
			['L1', 'L2', 'L3', 'H1', 'H2'],
			['H2', 'H3', 'L1', 'H1', 'L2'],
			['H3', 'L1', 'L2', 'H1', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	58: {
		label: 'line7-H2',
		result: [
			['L1', 'L2', 'L3', 'H2', 'H1'],
			['H1', 'H3', 'L1', 'H2', 'L2'],
			['H3', 'L1', 'L2', 'H2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	59: {
		label: 'line7-H3',
		result: [
			['L1', 'L2', 'L3', 'H3', 'H1'],
			['H1', 'H2', 'L1', 'H3', 'L2'],
			['H2', 'L1', 'L2', 'H3', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	60: {
		label: 'line8-L1',
		result: [
			['L2', 'L3', 'H1', 'H2', 'L1'],
			['H1', 'H2', 'H3', 'L2', 'L1'],
			['H2', 'H3', 'L1', 'L2', 'L1'],
		],
		isWin: true,
		winLines: 1,
	},
	61: {
		label: 'line8-L2',
		result: [
			['L1', 'L3', 'H1', 'H2', 'L2'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['H2', 'H3', 'L1', 'L2', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	62: {
		label: 'line8-L3',
		result: [
			['L1', 'L2', 'H1', 'H2', 'L3'],
			['H1', 'H2', 'H3', 'L1', 'L3'],
			['H2', 'H3', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	63: {
		label: 'line8-L4',
		result: [
			['L1', 'L2', 'H1', 'H2', 'L4'],
			['H1', 'H2', 'H3', 'L1', 'L4'],
			['H2', 'H3', 'L1', 'L2', 'L4'],
		],
		isWin: true,
		winLines: 1,
	},
	64: {
		label: 'line8-H1',
		result: [
			['L1', 'L2', 'L3', 'H2', 'H1'],
			['H2', 'H3', 'L1', 'L2', 'H1'],
			['H3', 'L1', 'L2', 'L3', 'H1'],
		],
		isWin: true,
		winLines: 1,
	},
	65: {
		label: 'line8-H2',
		result: [
			['L1', 'L2', 'L3', 'H1', 'H2'],
			['H1', 'H3', 'L1', 'L2', 'H2'],
			['H3', 'L1', 'L2', 'L3', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	66: {
		label: 'line8-H3',
		result: [
			['L1', 'L2', 'L3', 'H1', 'H3'],
			['H1', 'H2', 'L1', 'L2', 'H3'],
			['H2', 'L1', 'L2', 'L3', 'H3'],
		],
		isWin: true,
		winLines: 1,
	},
	67: {
		label: 'line9-L1',
		result: [
			['L1', 'L2', 'L3', 'H1', 'H2'],
			['H1', 'L1', 'H2', 'H3', 'L2'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	68: {
		label: 'line9-L2',
		result: [
			['L2', 'L1', 'L3', 'H1', 'H2'],
			['H1', 'L2', 'H2', 'H3', 'L1'],
			['H2', 'H3', 'L2', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	69: {
		label: 'line9-L3',
		result: [
			['L3', 'L1', 'L2', 'H1', 'H2'],
			['H1', 'L3', 'H2', 'H3', 'L1'],
			['H2', 'H3', 'L3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	70: {
		label: 'line9-L4',
		result: [
			['L4', 'L1', 'L2', 'H1', 'H2'],
			['H1', 'L4', 'H2', 'H3', 'L1'],
			['H2', 'H3', 'L4', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	71: {
		label: 'line9-H1',
		result: [
			['H1', 'L1', 'L2', 'L3', 'H2'],
			['H2', 'H1', 'H3', 'L1', 'L2'],
			['H3', 'H2', 'H1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	72: {
		label: 'line9-H2',
		result: [
			['H2', 'L1', 'L2', 'L3', 'H1'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['H3', 'H1', 'H2', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	73: {
		label: 'line9-H3',
		result: [
			['H3', 'L1', 'L2', 'L3', 'H1'],
			['H1', 'H3', 'H2', 'L1', 'L2'],
			['H2', 'H1', 'H3', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	74: {
		label: 'line10-L1',
		result: [
			['L2', 'L3', 'H1', 'H2', 'L1'],
			['H1', 'H2', 'H3', 'L2', 'L1'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	75: {
		label: 'line10-L2',
		result: [
			['L1', 'L3', 'H1', 'H2', 'L2'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['H2', 'H3', 'L2', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	76: {
		label: 'line10-L3',
		result: [
			['L1', 'L2', 'H1', 'H2', 'L3'],
			['H1', 'H2', 'H3', 'L1', 'L3'],
			['H2', 'H3', 'L3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	77: {
		label: 'line10-L4',
		result: [
			['L1', 'L2', 'H1', 'H2', 'L4'],
			['H1', 'H2', 'H3', 'L1', 'L4'],
			['H2', 'H3', 'L4', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	78: {
		label: 'line10-H1',
		result: [
			['L1', 'L2', 'L3', 'H2', 'H1'],
			['H2', 'H3', 'L1', 'L2', 'H1'],
			['H3', 'H2', 'H1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	79: {
		label: 'line10-H2',
		result: [
			['L1', 'L2', 'L3', 'H1', 'H2'],
			['H1', 'H3', 'L1', 'L2', 'H2'],
			['H3', 'H1', 'H2', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	80: {
		label: 'line10-H3',
		result: [
			['L1', 'L2', 'L3', 'H1', 'H3'],
			['H1', 'H2', 'L1', 'L2', 'H3'],
			['H2', 'H1', 'H3', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	81: {
		label: 'line11-L1',
		result: [
			['H2', 'H3', 'L1', 'L1', 'L2'],
			['H1', 'L1', 'H2', 'H3', 'L2'],
			['L1', 'L2', 'L3', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	82: {
		label: 'line11-L2',
		result: [
			['H2', 'H3', 'L2', 'L1', 'L2'],
			['H1', 'L2', 'H2', 'H3', 'L1'],
			['L2', 'L1', 'L3', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	83: {
		label: 'line11-L3',
		result: [
			['H2', 'H3', 'L3', 'L1', 'L2'],
			['H1', 'L3', 'H2', 'H3', 'L1'],
			['L3', 'L1', 'L2', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	84: {
		label: 'line11-L4',
		result: [
			['H2', 'H3', 'L4', 'L1', 'L2'],
			['H1', 'L4', 'H2', 'H3', 'L1'],
			['L4', 'L1', 'L2', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	85: {
		label: 'line11-H1',
		result: [
			['H2', 'H3', 'H1', 'L2', 'L3'],
			['H3', 'H1', 'H2', 'L1', 'L2'],
			['H1', 'L1', 'L2', 'L3', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	86: {
		label: 'line11-H2',
		result: [
			['H1', 'H3', 'H2', 'L2', 'L3'],
			['H3', 'H2', 'H1', 'L1', 'L2'],
			['H2', 'L1', 'L2', 'L3', 'H1'],
		],
		isWin: true,
		winLines: 1,
	},
	87: {
		label: 'line11-H3',
		result: [
			['H1', 'H2', 'H3', 'L2', 'L3'],
			['H2', 'H3', 'H1', 'L1', 'L2'],
			['H3', 'L1', 'L2', 'L3', 'H1'],
		],
		isWin: true,
		winLines: 1,
	},
	88: {
		label: 'line12-L1',
		result: [
			['H2', 'H3', 'L1', 'L1', 'L2'],
			['H1', 'H2', 'H3', 'L2', 'L1'],
			['L1', 'L2', 'L3', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	89: {
		label: 'line12-L2',
		result: [
			['H2', 'H3', 'L2', 'L1', 'L2'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['L2', 'L1', 'L3', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	90: {
		label: 'line12-L3',
		result: [
			['H2', 'H3', 'L3', 'L1', 'L2'],
			['H1', 'H2', 'H3', 'L1', 'L3'],
			['L3', 'L1', 'L2', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	91: {
		label: 'line12-L4',
		result: [
			['H2', 'H3', 'L4', 'L1', 'L2'],
			['H1', 'H2', 'H3', 'L1', 'L4'],
			['L4', 'L1', 'L2', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	92: {
		label: 'line12-H1',
		result: [
			['H2', 'H3', 'H1', 'L2', 'L3'],
			['H3', 'H2', 'L1', 'L2', 'H1'],
			['H1', 'L1', 'L2', 'L3', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	93: {
		label: 'line12-H2',
		result: [
			['H1', 'H3', 'H2', 'L2', 'L3'],
			['H3', 'H1', 'L1', 'L2', 'H2'],
			['H2', 'L1', 'L2', 'L3', 'H1'],
		],
		isWin: true,
		winLines: 1,
	},
	94: {
		label: 'line12-H3',
		result: [
			['H1', 'H2', 'H3', 'L2', 'L3'],
			['H2', 'H1', 'L1', 'L2', 'H3'],
			['H3', 'L1', 'L2', 'L3', 'H1'],
		],
		isWin: true,
		winLines: 1,
	},
	95: {
		label: 'line13-L1',
		result: [
			['H2', 'H3', 'L1', 'L1', 'L2'],
			['H1', 'L1', 'H2', 'L1', 'L2'],
			['L1', 'L2', 'L3', 'H1', 'L1'],
		],
		isWin: true,
		winLines: 1,
	},
	96: {
		label: 'line13-L2',
		result: [
			['H2', 'H3', 'L2', 'L1', 'L2'],
			['H1', 'L2', 'H2', 'L2', 'L1'],
			['L2', 'L1', 'L3', 'H1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	97: {
		label: 'line13-L3',
		result: [
			['H2', 'H3', 'L3', 'L1', 'L2'],
			['H1', 'L3', 'H2', 'L3', 'L1'],
			['L3', 'L1', 'L2', 'H1', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	98: {
		label: 'line13-L4',
		result: [
			['H2', 'H3', 'L4', 'L1', 'L2'],
			['H1', 'L4', 'H2', 'L4', 'L1'],
			['L4', 'L1', 'L2', 'H1', 'L4'],
		],
		isWin: true,
		winLines: 1,
	},
	99: {
		label: 'line13-H1',
		result: [
			['H2', 'H3', 'H1', 'L2', 'L3'],
			['H3', 'H1', 'H2', 'H1', 'L2'],
			['H1', 'L1', 'L2', 'L3', 'H1'],
		],
		isWin: true,
		winLines: 1,
	},
	100: {
		label: 'line13-H2',
		result: [
			['H1', 'H3', 'H2', 'L2', 'L3'],
			['H3', 'H2', 'H1', 'H2', 'L2'],
			['H2', 'L1', 'L2', 'L3', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	101: {
		label: 'line13-H3',
		result: [
			['H1', 'H2', 'H3', 'L2', 'L3'],
			['H2', 'H3', 'H1', 'H3', 'L2'],
			['H3', 'L1', 'L2', 'L3', 'H3'],
		],
		isWin: true,
		winLines: 1,
	},
	102: {
		label: 'line14-L1',
		result: [
			['L1', 'L2', 'L3', 'H1', 'L1'],
			['H1', 'L1', 'H2', 'L1', 'L2'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	103: {
		label: 'line14-L2',
		result: [
			['L2', 'L1', 'L3', 'H1', 'L2'],
			['H1', 'L2', 'H2', 'L2', 'L1'],
			['H2', 'H3', 'L2', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	104: {
		label: 'line14-L3',
		result: [
			['L3', 'L1', 'L2', 'H1', 'L3'],
			['H1', 'L3', 'H2', 'L3', 'L1'],
			['H2', 'H3', 'L3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	105: {
		label: 'line14-L4',
		result: [
			['L4', 'L1', 'L2', 'H1', 'L4'],
			['H1', 'L4', 'H2', 'L4', 'L1'],
			['H2', 'H3', 'L4', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	106: {
		label: 'line14-H1',
		result: [
			['H1', 'L1', 'L2', 'L3', 'H1'],
			['H2', 'H1', 'H3', 'H1', 'L2'],
			['H3', 'H2', 'H1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	107: {
		label: 'line14-H2',
		result: [
			['H2', 'L1', 'L2', 'L3', 'H2'],
			['H1', 'H2', 'H3', 'H2', 'L2'],
			['H3', 'H1', 'H2', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	108: {
		label: 'line14-H3',
		result: [
			['H3', 'L1', 'L2', 'L3', 'H3'],
			['H1', 'H3', 'H2', 'H3', 'L2'],
			['H2', 'H1', 'H3', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 1,
	},
	109: {
		label: 'lines-1-2-L1',
		result: [
			['L1', 'L1', 'L1', 'L1', 'L1'],
			['L1', 'L1', 'L1', 'L1', 'L1'],
			['H1', 'H2', 'H3', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 2,
	},
	110: {
		label: 'lines-1-3-L1',
		result: [
			['L1', 'L1', 'L1', 'L1', 'L1'],
			['H1', 'H2', 'H3', 'L2', 'L3'],
			['L1', 'L1', 'L1', 'L1', 'L1'],
		],
		isWin: true,
		winLines: 2,
	},
	111: {
		label: 'lines-2-3-L1',
		result: [
			['H1', 'H2', 'H3', 'L2', 'L3'],
			['L1', 'L1', 'L1', 'L1', 'L1'],
			['L1', 'L1', 'L1', 'L1', 'L1'],
		],
		isWin: true,
		winLines: 2,
	},
	112: {
		label: 'lines-4-5-L1',
		result: [
			['L1', 'L1', 'L2', 'L3', 'H1'],
			['L1', 'L1', 'H2', 'H3', 'L2'],
			['L1', 'L1', 'H1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 2,
	},
	113: {
		label: 'lines-4-6-L1',
		result: [
			['L1', 'L2', 'L1', 'L3', 'H1'],
			['L1', 'H1', 'L1', 'H2', 'L2'],
			['L1', 'H2', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 2,
	},
	114: {
		label: 'lines-4-7-L1',
		result: [
			['L1', 'L2', 'L3', 'L1', 'H1'],
			['L1', 'H1', 'H2', 'L1', 'L2'],
			['L1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	115: {
		label: 'lines-4-8-L1',
		result: [
			['L1', 'L2', 'L3', 'H1', 'L1'],
			['L1', 'H1', 'H2', 'L2', 'L1'],
			['L1', 'H2', 'H3', 'L2', 'L1'],
		],
		isWin: true,
		winLines: 2,
	},
	116: {
		label: 'lines-5-6-L1',
		result: [
			['L2', 'L1', 'L1', 'L3', 'H1'],
			['H1', 'L1', 'L1', 'H2', 'L2'],
			['H2', 'L1', 'L1', 'L2', 'L3'],
		],
		isWin: true,
		winLines: 2,
	},
	117: {
		label: 'lines-5-7-L1',
		result: [
			['L2', 'L1', 'L3', 'L1', 'H1'],
			['H1', 'L1', 'H2', 'L1', 'L2'],
			['H2', 'L1', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	118: {
		label: 'lines-5-8-L1',
		result: [
			['L2', 'L1', 'L3', 'H1', 'L1'],
			['H1', 'L1', 'H2', 'L2', 'L1'],
			['H2', 'L1', 'H3', 'L2', 'L1'],
		],
		isWin: true,
		winLines: 2,
	},
	119: {
		label: 'lines-6-7-L1',
		result: [
			['L2', 'L3', 'L1', 'L1', 'H1'],
			['H1', 'H2', 'L1', 'L1', 'L2'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	120: {
		label: 'lines-6-8-L1',
		result: [
			['L2', 'L3', 'L1', 'H1', 'L1'],
			['H1', 'H2', 'L1', 'L2', 'L1'],
			['H2', 'H3', 'L1', 'L2', 'L1'],
		],
		isWin: true,
		winLines: 2,
	},
	121: {
		label: 'lines-7-8-L1',
		result: [
			['L2', 'L3', 'H1', 'L1', 'L1'],
			['H1', 'H2', 'H3', 'L1', 'L1'],
			['H2', 'H3', 'L1', 'L1', 'L1'],
		],
		isWin: true,
		winLines: 2,
	},
	122: {
		label: 'lines-9-10-L1',
		result: [
			['L1', 'L2', 'L1', 'H1', 'L1'],
			['H1', 'L1', 'H2', 'L2', 'L1'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	123: {
		label: 'lines-9-11-L1',
		result: [
			['L1', 'L2', 'L1', 'H1', 'H2'],
			['H1', 'L1', 'H2', 'H3', 'L2'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	124: {
		label: 'lines-9-12-L1',
		result: [
			['L1', 'L2', 'L1', 'H1', 'L1'],
			['H1', 'L1', 'H2', 'L2', 'L1'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	125: {
		label: 'lines-9-13-L1',
		result: [
			['L1', 'L2', 'L1', 'H1', 'L1'],
			['H1', 'L1', 'H2', 'L1', 'L2'],
			['L1', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	126: {
		label: 'lines-9-14-L1',
		result: [
			['L1', 'L2', 'L1', 'H1', 'L1'],
			['H1', 'L1', 'H2', 'L1', 'L2'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	127: {
		label: 'lines-10-11-L1',
		result: [
			['H2', 'L3', 'L1', 'H1', 'L1'],
			['H1', 'H2', 'H3', 'L2', 'L1'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	128: {
		label: 'lines-10-12-L1',
		result: [
			['H2', 'L3', 'L1', 'H1', 'L1'],
			['H1', 'H2', 'H3', 'L2', 'L1'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	129: {
		label: 'lines-10-13-L1',
		result: [
			['H2', 'L3', 'L1', 'H1', 'L1'],
			['H1', 'H2', 'H3', 'L2', 'L1'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	130: {
		label: 'lines-10-14-L1',
		result: [
			['H2', 'L3', 'L1', 'H1', 'L1'],
			['H1', 'H2', 'H3', 'L2', 'L1'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	131: {
		label: 'lines-11-12-L1',
		result: [
			['H2', 'H3', 'L1', 'L1', 'L2'],
			['H1', 'H2', 'H3', 'L2', 'L1'],
			['L1', 'L2', 'L3', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 2,
	},
	132: {
		label: 'lines-11-13-L1',
		result: [
			['H2', 'H3', 'L1', 'L1', 'L2'],
			['H1', 'L1', 'H2', 'L1', 'L2'],
			['L1', 'L2', 'L3', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 2,
	},
	133: {
		label: 'lines-11-14-L1',
		result: [
			['H2', 'H3', 'L1', 'L1', 'L2'],
			['H1', 'L1', 'H2', 'L1', 'L2'],
			['L1', 'L2', 'L3', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 2,
	},
	134: {
		label: 'lines-12-13-L1',
		result: [
			['H2', 'H3', 'L1', 'L1', 'L2'],
			['H1', 'H2', 'H3', 'L2', 'L1'],
			['L1', 'L2', 'L3', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 2,
	},
	135: {
		label: 'lines-12-14-L1',
		result: [
			['H2', 'H3', 'L1', 'L1', 'L2'],
			['H1', 'H2', 'H3', 'L2', 'L1'],
			['L1', 'L2', 'L3', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 2,
	},
	136: {
		label: 'lines-13-14-L1',
		result: [
			['L1', 'L2', 'L3', 'H1', 'L1'],
			['H1', 'L1', 'H2', 'L1', 'L2'],
			['H2', 'H3', 'L1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	200: {
		label: 'no-win-1',
		result: [
			['L1', 'L2', 'L3', 'H1', 'H2'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['H2', 'H3', 'L1', 'L2', 'L3'],
		],
		isWin: false,
		winLines: 0,
	},
	201: {
		label: 'no-win-2',
		result: [
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['L1', 'L2', 'L3', 'H1', 'H2'],
			['H2', 'H3', 'L1', 'L2', 'L3'],
		],
		isWin: false,
		winLines: 0,
	},
	202: {
		label: 'no-win-3',
		result: [
			['L2', 'L3', 'H1', 'H2', 'L4'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['H2', 'H3', 'L1', 'L2', 'L3'],
		],
		isWin: false,
		winLines: 0,
	},
	203: {
		label: 'no-win-4',
		result: [
			['H1', 'H2', 'L1', 'L2', 'L3'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['H2', 'H3', 'L1', 'L2', 'L3'],
		],
		isWin: false,
		winLines: 0,
	},
	204: {
		label: 'no-win-5',
		result: [
			['L1', 'L2', 'L3', 'H1', 'H2'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['H2', 'H3', 'L1', 'L2', 'L3'],
		],
		isWin: false,
		winLines: 0,
	},
	205: {
		label: 'no-win-6',
		result: [
			['L1', 'L2', 'L3', 'H1', 'H2'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['H1', 'H2', 'L1', 'L2', 'L3'],
		],
		isWin: false,
		winLines: 0,
	},
	206: {
		label: 'no-win-7',
		result: [
			['H1', 'L1', 'H2', 'L2', 'H3'],
			['L1', 'H1', 'L2', 'H2', 'L3'],
			['H2', 'L1', 'H3', 'L2', 'H1'],
		],
		isWin: false,
		winLines: 0,
	},
	207: {
		label: 'no-win-8',
		result: [
			['L1', 'H1', 'L2', 'H2', 'L3'],
			['H1', 'L1', 'H2', 'L2', 'H3'],
			['L2', 'H1', 'L3', 'H2', 'L1'],
		],
		isWin: false,
		winLines: 0,
	},
	208: {
		label: 'no-win-9',
		result: [
			['H1', 'L1', 'H2', 'L2', 'H1'],
			['L1', 'H1', 'L2', 'H2', 'L3'],
			['H1', 'L1', 'H2', 'L2', 'H3'],
		],
		isWin: false,
		winLines: 0,
	},
	209: {
		label: 'no-win-10',
		result: [
			['L1', 'L2', 'L3', 'L4', 'H1'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['L2', 'L3', 'L4', 'H1', 'H2'],
		],
		isWin: false,
		winLines: 0,
	},
	210: {
		label: 'all-W1',
		result: [
			['W1', 'W1', 'W1', 'W1', 'W1'],
			['W1', 'W1', 'W1', 'W1', 'W1'],
			['W1', 'W1', 'W1', 'W1', 'W1'],
		],
		isWin: true,
		winLines: 14,
	},
	211: {
		label: 'line1-W1',
		result: [
			['W1', 'W1', 'W1', 'W1', 'W1'],
			['L1', 'L2', 'H1', 'H2', 'L3'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	212: {
		label: 'line2-W1',
		result: [
			['L1', 'L2', 'H1', 'H2', 'L3'],
			['W1', 'W1', 'W1', 'W1', 'W1'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	213: {
		label: 'line3-W1',
		result: [
			['L1', 'L2', 'H1', 'H2', 'L3'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['W1', 'W1', 'W1', 'W1', 'W1'],
		],
		isWin: true,
		winLines: 1,
	},
	214: {
		label: 'line4-W1',
		result: [
			['W1', 'L1', 'L2', 'H1', 'H2'],
			['W1', 'H1', 'H2', 'H3', 'L1'],
			['W1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	215: {
		label: 'line5-W1',
		result: [
			['L1', 'W1', 'L2', 'H1', 'H2'],
			['H1', 'W1', 'H2', 'H3', 'L1'],
			['H2', 'W1', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	216: {
		label: 'line6-W1',
		result: [
			['L1', 'L2', 'W1', 'H1', 'H2'],
			['H1', 'H2', 'W1', 'H3', 'L1'],
			['H2', 'H3', 'W1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	217: {
		label: 'line7-W1',
		result: [
			['L1', 'L2', 'H1', 'W1', 'H2'],
			['H1', 'H2', 'H3', 'W1', 'L1'],
			['H2', 'H3', 'L1', 'W1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	218: {
		label: 'line8-W1',
		result: [
			['L1', 'L2', 'H1', 'H2', 'W1'],
			['H1', 'H2', 'H3', 'L1', 'W1'],
			['H2', 'H3', 'L1', 'L2', 'W1'],
		],
		isWin: true,
		winLines: 1,
	},
	219: {
		label: 'line9-W1',
		result: [
			['W1', 'L1', 'L2', 'H1', 'H2'],
			['H1', 'W1', 'H2', 'H3', 'L1'],
			['H2', 'H3', 'W1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	220: {
		label: 'line10-W1',
		result: [
			['L1', 'L2', 'H1', 'H2', 'W1'],
			['H1', 'H2', 'H3', 'W1', 'L1'],
			['H2', 'H3', 'W1', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 1,
	},
	221: {
		label: 'line11-W1',
		result: [
			['H2', 'H3', 'W1', 'L1', 'L2'],
			['H1', 'W1', 'H2', 'H3', 'L1'],
			['W1', 'L1', 'L2', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	222: {
		label: 'line12-W1',
		result: [
			['H2', 'H3', 'W1', 'L1', 'L2'],
			['H1', 'H2', 'H3', 'W1', 'L1'],
			['W1', 'L1', 'L2', 'H1', 'H2'],
		],
		isWin: true,
		winLines: 1,
	},
	223: {
		label: 'lines-1-2-W1',
		result: [
			['W1', 'W1', 'W1', 'W1', 'W1'],
			['W1', 'W1', 'W1', 'W1', 'W1'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
		],
		isWin: true,
		winLines: 2,
	},
	224: {
		label: 'lines-1-3-W1',
		result: [
			['W1', 'W1', 'W1', 'W1', 'W1'],
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['W1', 'W1', 'W1', 'W1', 'W1'],
		],
		isWin: true,
		winLines: 2,
	},
	225: {
		label: 'lines-2-3-W1',
		result: [
			['H1', 'H2', 'H3', 'L1', 'L2'],
			['W1', 'W1', 'W1', 'W1', 'W1'],
			['W1', 'W1', 'W1', 'W1', 'W1'],
		],
		isWin: true,
		winLines: 2,
	},
})
