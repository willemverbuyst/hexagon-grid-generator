import { createHexagonHTMLString } from '../../utils/HTMLhelperFunctions'
import { generateOneRow } from './generateOneRow'

export const generateRows = (
	hexagonsFirstRow: number,
	numberOfHexagons: number
): string => {
	let html = ''

	if (hexagonsFirstRow < 1 || numberOfHexagons < 1) {
		return html
	}

	if (hexagonsFirstRow === 1 || numberOfHexagons <= hexagonsFirstRow) {
		html = generateOneRow(numberOfHexagons)
		return html
	}

	let hexagonNumber = 1

	Array(hexagonsFirstRow)
		.fill(0)
		.forEach((_, i) => {
			html += createHexagonHTMLString(
				i + hexagonNumber,
				'first-row__margin-top'
			)
		})

	// generate next rows
	// even rows will get a css class of 'even-rows__margin-left'
	// uneven rows will not get an extra class
	let k = 0
	hexagonNumber = hexagonsFirstRow + 1
	// eslint-disable-next-line no-loops/no-loops
	while (k < numberOfHexagons - hexagonsFirstRow) {
		if (k === 0 || k % ((hexagonsFirstRow - 1) * 2 + 1) === 0) {
			html += createHexagonHTMLString(hexagonNumber, 'even-rows__margin-left')
		} else {
			html += createHexagonHTMLString(hexagonNumber)
		}
		hexagonNumber++
		k++
	}

	return html
}
