import { DOMInput, hexagonContainer } from '../index'
import { generateCSStext } from './cssTextGenerator'
import { generateMultipleRowsHTMLText } from './html/multipleRows.html'
import { generateContainerHTMLtext } from './html/container.html'

export const generateHexagons = (): void => {
	const htmlTextField = document.getElementById('html')
	const {
		hexagonsFirstRow: { valueAsNumber: hexagonsFirstRow },
		numberOfHexagons: { valueAsNumber: numberOfHexagons },
	} = DOMInput

	const hexagonHTML = generateMultipleRowsHTMLText(
		hexagonsFirstRow,
		numberOfHexagons
	)

	if (hexagonContainer) {
		hexagonContainer.innerHTML = hexagonHTML
	}

	const displayHTML = generateContainerHTMLtext(numberOfHexagons)

	if (htmlTextField) {
		htmlTextField.innerText = displayHTML
	}

	generateCSStext()
}
