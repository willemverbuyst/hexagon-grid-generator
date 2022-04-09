import { DOMInput } from '../index'
import { createHexagonHTMLString } from '../utils/HTMLhelperFunctions'

export const generateHTMLtext = (): void => {
	const htmlTextField = document.getElementById('html')
	const {
		numberOfHexagons: { valueAsNumber: numberOfHexagons },
	} = DOMInput
	let html = ''

	Array(numberOfHexagons)
		.fill(0)
		.forEach((_, i) => {
			html += createHexagonHTMLString(i + 1)
		})

	const displayHTML =
		'<div class="hexagon-wrapper">' +
		'\n' +
		'<div class="hexagon-wrapper__hexagon-container">' +
		'\n' +
		'\n' +
		html +
		'\n' +
		'</div>' +
		'\n' +
		'</div>'

	if (htmlTextField) {
		htmlTextField.innerText = displayHTML
	}
}
