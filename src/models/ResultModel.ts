export class ResultModel {
	isWin: boolean = false

	spinResult: string[][] = [
		['H1', 'H2', 'H3', 'L4', 'H2'],
		['L4', 'L3', 'B1', 'H2', 'W1'],
		['L1', 'L2', 'L3', 'L1', 'L2'],
	]

	linesToAnimate: Array<{ reelIndex: number; symbolIndex: number }> = []

	activeWinLines: string[] = []

	winLines: { [key: string]: string[][] } = {
		'1': [
			['X', 'X', 'X', 'X', 'X'],
			['0', '0', '0', '0', '0'],
			['0', '0', '0', '0', '0'],
		], // Horizontal top row
		'2': [
			['0', '0', '0', '0', '0'],
			['X', 'X', 'X', 'X', 'X'],
			['0', '0', '0', '0', '0'],
		], // Horizontal middle row
		'3': [
			['0', '0', '0', '0', '0'],
			['0', '0', '0', '0', '0'],
			['X', 'X', 'X', 'X', 'X'],
		], // Horizontal bottom row
		'4': [
			['X', '0', '0', '0', '0'],
			['X', '0', '0', '0', '0'],
			['X', '0', '0', '0', '0'],
		], // Vertical left column
		'5': [
			['0', 'X', '0', '0', '0'],
			['0', 'X', '0', '0', '0'],
			['0', 'X', '0', '0', '0'],
		], // Vertical second column
		'6': [
			['0', '0', 'X', '0', '0'],
			['0', '0', 'X', '0', '0'],
			['0', '0', 'X', '0', '0'],
		], // Vertical third column
		'7': [
			['0', '0', '0', 'X', '0'],
			['0', '0', '0', 'X', '0'],
			['0', '0', '0', 'X', '0'],
		], // Vertical fourth column
		'8': [
			['0', '0', '0', '0', 'X'],
			['0', '0', '0', '0', 'X'],
			['0', '0', '0', '0', 'X'],
		], // Vertical right column
		'9': [
			['X', '0', '0', '0', '0'],
			['0', 'X', '0', '0', '0'],
			['0', '0', 'X', '0', '0'],
		], // Diagonal top-left to bottom-center
		'10': [
			['0', '0', '0', '0', 'X'],
			['0', '0', '0', 'X', '0'],
			['0', '0', 'X', '0', '0'],
		], // Diagonal top-right to bottom-center
		'11': [
			['0', '0', 'X', '0', '0'],
			['0', 'X', '0', '0', '0'],
			['X', '0', '0', '0', '0'],
		], // Diagonal bottom-left to top-center
		'12': [
			['0', '0', 'X', '0', '0'],
			['0', '0', '0', 'X', '0'],
			['0', '0', '0', '0', 'X'],
		], // Diagonal bottom-right to top-center
		'13': [
			['0', '0', 'X', '0', '0'],
			['0', 'X', '0', 'X', '0'],
			['X', '0', '0', '0', 'X'],
		], // Bottom-left to top-center to bottom-right
		'14': [
			['X', '0', '0', '0', 'X'],
			['0', 'X', '0', 'X', '0'],
			['0', '0', 'X', '0', '0'],
		], // Top-left to bottom-center to top-right
	}

	// Store the last win amount
	lastWinAmount: number = 0
}
