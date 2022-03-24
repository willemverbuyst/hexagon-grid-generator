import { DOMInput } from '../index'
import { createHexagonHTMLString } from '../utils/HTMLhelperFunctions'

export const generateOneRow = (): string => {
	const {
		numberOfHexagons: { valueAsNumber: numberOfHexagons },
	} = DOMInput
	let html: string = ''

	for (let i = 1; i <= numberOfHexagons; i++) {
		html += createHexagonHTMLString(i)
	}

	return html
}

export const generateMultipleRows = (): string => {
	const {
		hexagonsFirstRow: { valueAsNumber: hexagonsFirstRow },
		numberOfHexagons: { valueAsNumber: numberOfHexagons },
	} = DOMInput
	// i as hexagon counter
	let i: number = 1
	let html: string = ''

	// generate first row
	// add css class 'margin-top' to first row
	for (i; i <= hexagonsFirstRow; i++) {
		html += createHexagonHTMLString(i, 'first-row_margin-top')
	}

	// generate next rows
	// even rows will get a css class of 'even-rows__margin-left'
	// uneven rows will not get an extra class
	let k = 0
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
