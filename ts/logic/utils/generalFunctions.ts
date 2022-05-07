export const roundToTwoDecimals = (value: number): number =>
	Number(Math.round(parseFloat(value + 'e' + 2)) + 'e-' + 2)
