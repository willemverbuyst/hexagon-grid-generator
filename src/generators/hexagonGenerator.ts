import { DOMInput, hexagonContainer } from '../index'
import { generateCSStext } from './cssTextGenerator'
import { generateHTMLtext } from './htmlTextGenerator'
import { generateRows } from './rowGenerartor/generateRows'

export const generateHexagons = (): void => {
	const {
		hexagonsFirstRow: { valueAsNumber: hexagonsFirstRow },
		numberOfHexagons: { valueAsNumber: numberOfHexagons },
	} = DOMInput

	const html = generateRows(hexagonsFirstRow, numberOfHexagons)

	if (hexagonContainer) {
		hexagonContainer.innerHTML = html
	}

	generateHTMLtext()
	generateCSStext()
}
