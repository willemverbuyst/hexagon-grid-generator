import { DOMInput } from '../../index'
import { createHexagonHTMLString } from '../../utils/HTMLhelperFunctions'

export const generateMultipleRows = (): string => {
	const {
		hexagonsFirstRow: { valueAsNumber: hexagonsFirstRow },
		numberOfHexagons: { valueAsNumber: numberOfHexagons },
	} = DOMInput
	// i as hexagon counter
	let i = 1
	let html = ''

	// generate first row
	// add css class 'margin-top' to first row
	Array(hexagonsFirstRow)
		.fill(0)
		.forEach((_, i) => {
			html += createHexagonHTMLString(i + 1, 'first-row_margin-top')
		})

	// generate next rows
	// even rows will get a css class of 'even-rows__margin-left'
	// uneven rows will not get an extra class
	let k = 0
	// eslint-disable-next-line no-loops/no-loops
	while (k < numberOfHexagons - hexagonsFirstRow) {
		if (k === 0 || k % ((hexagonsFirstRow - 1) * 2 + 1) === 0) {
			html += createHexagonHTMLString(i, 'even-rows__margin-left')
		} else {
			html += createHexagonHTMLString(i)
		}
		i++
		k++
	}

	return html
}
