export class ResultModel {
	isWin: boolean = false

	spinResult: string[][] = [
		['H1', 'H2', 'H3', 'H1', 'H2'],
		['M1', 'M2', 'M3', 'M1', 'M2'],
		['L1', 'L2', 'L3', 'L1', 'L2'],
	]

	linesToAnimate: Array<{ reelIndex: number; symbolIndex: number }> = []

	// Define win lines for 5x3 format
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
		], // Diagonal top-left to bottom-right
		'10': [
			['0', '0', '0', '0', 'X'],
			['0', '0', '0', 'X', '0'],
			['0', '0', 'X', '0', '0'],
		], // Diagonal top-right to bottom-left
	}

	// Store the last win amount
	lastWinAmount: number = 0
}
