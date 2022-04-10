import { DOMInput, hexagonContainer } from '../index'
import { generateCSStext } from './cssTextGenerator'
import { generateMultipleRowsHTML } from './html/multipleRows.html'
import { generateContainerHTML } from './html/container.html'
import { Generator } from './Generator'

export const generateHexagons = (): void => {
	const htmlTextField = document.getElementById('html')
	const {
		hexagonsFirstRow: { valueAsNumber: hexagonsFirstRow },
		numberOfHexagons: { valueAsNumber: numberOfHexagons },
	} = DOMInput

	const hexagonHTML = generateMultipleRowsHTML(
		hexagonsFirstRow,
		numberOfHexagons
	)

	if (hexagonContainer) {
		hexagonContainer.innerHTML = hexagonHTML
	}

	const displayHTML = generateContainerHTML(numberOfHexagons)

	if (htmlTextField) {
		htmlTextField.innerText = displayHTML
	}

	generateCSStext()
}
