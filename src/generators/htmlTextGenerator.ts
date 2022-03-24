import { DOMInput } from '../index'
import { createHexagonHTMLString } from '../utils/HTMLhelperFunctions'

export const generateHTMLtext = (): void => {
	const htmlTextField = document.getElementById('html')
	const {
		numberOfHexagons: { valueAsNumber: numberOfHexagons },
	} = DOMInput
	let html = ''

	for (let i = 1; i <= numberOfHexagons; i++) {
		html += createHexagonHTMLString(i)
	}

	const displayHTML = `
  <div class="hexagon-wrapper">
    <div class="hexagon-wrapper__hexagon-container">   
        ${html}
    </div>
  </div>
`
	if (htmlTextField) {
		htmlTextField.innerText = displayHTML
	}
}
