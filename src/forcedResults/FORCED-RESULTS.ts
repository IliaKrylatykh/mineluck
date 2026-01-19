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
})
