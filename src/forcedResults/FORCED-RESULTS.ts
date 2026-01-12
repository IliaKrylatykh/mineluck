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
			['L1', 'L1', 'L1', 'L1'],
			['L1', 'L1', 'L1', 'L1'],
			['L1', 'L1', 'L1', 'L1'],
			['L1', 'L1', 'L1', 'L1'],
		],
		isWin: true,
		winLines: 10,
	},
	2: {
		label: 'all-M1',
		result: [
			['M1', 'M1', 'M1', 'M1'],
			['M1', 'M1', 'M1', 'M1'],
			['M1', 'M1', 'M1', 'M1'],
			['M1', 'M1', 'M1', 'M1'],
		],
		isWin: true,
		winLines: 10,
	},
	3: {
		label: 'all-H1',
		result: [
			['H1', 'H1', 'H1', 'H1'],
			['H1', 'H1', 'H1', 'H1'],
			['H1', 'H1', 'H1', 'H1'],
			['H1', 'H1', 'H1', 'H1'],
		],
		isWin: true,
		winLines: 10,
	},
})
