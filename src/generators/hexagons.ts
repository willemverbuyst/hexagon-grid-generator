import { generateHexagonHTML } from './html/hexagon.html'

export const generateHexagons = (
	hexagonsFirstRow: number,
	numberOfHexagons: number
): string => {
	let html = ''

	if (hexagonsFirstRow < 1 || numberOfHexagons < 1) {
		return ''
	}

	if (numberOfHexagons <= hexagonsFirstRow) {
		Array(numberOfHexagons)
			.fill(0)
			.forEach((_, i) => (html += generateHexagonHTML(i + 1)))
		return html
	}

	if (hexagonsFirstRow === 1) {
		html = generateHexagonHTML(1)
	} else {
		Array(hexagonsFirstRow)
			.fill(0)
			.forEach((_, i) => {
				html += generateHexagonHTML(i + 1, 'first-row__margin-top')
			})
	}

	let k = 0
	let hexagonNumber = hexagonsFirstRow + 1
	// eslint-disable-next-line no-loops/no-loops
	while (k < numberOfHexagons - hexagonsFirstRow) {
		if (k === 0 || k % ((hexagonsFirstRow - 1) * 2 + 1) === 0) {
			html += generateHexagonHTML(hexagonNumber, 'even-rows__margin-left')
		} else {
			html += generateHexagonHTML(hexagonNumber)
		}
		hexagonNumber++
		k++
	}

	return html
}