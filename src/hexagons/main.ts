import { generateCSSText } from '../css/text.css'
import { generateHTMLText } from '../html/text.html'
import { inputValues } from '../inputs/inputValues'
import { CSSInputValues, HTMLInputValues } from '../models/inputs'
import { assertNonNullish } from '../utils/assertNonNullish'
import { generateHexagons } from './hexagons'

export const main = (): void => {
	const {
		backgroundColor,
		containerSkewX,
		containerSkewY,
		hexagonsFirstRow,
		hexagonColor,
		hexagonGap,
		hexagonRotation,
		hexagonScale,
		hexagonSize,
		hexagonTransition,
		mediaQuery_1,
		mediaQuery_2,
		mediaQuery_3,
		numberOfHexagons,
		textColor,
	} = inputValues

	const cssTextField = document.getElementById('css')
	assertNonNullish(cssTextField, 'HTMLElement #css not found!')

	const htmlTextField = document.getElementById('html')
	assertNonNullish(htmlTextField, 'HTMLElement #htmlTextField not found!')

	const cssBtn = document.getElementById('cssBtn')
	assertNonNullish(cssBtn, 'HTMLElement #cssBtn not found!')

	const htmlBtn = document.getElementById('htmlBtn')
	assertNonNullish(htmlBtn, 'HTMLElement #htmlBtn not found!')

	const hexagonContainer = document.getElementById('hexagon__container')
	assertNonNullish(hexagonContainer, 'HTMLElement #hexagonContainer not found!')

	cssBtn.addEventListener('click', () =>
		handleCSSBtnClick(cssTextField, {
			backgroundColor,
			containerSkewX,
			containerSkewY,
			hexagonsFirstRow,
			hexagonColor,
			hexagonGap,
			hexagonRotation,
			hexagonScale,
			hexagonSize,
			hexagonTransition,
			mediaQuery_1,
			mediaQuery_2,
			mediaQuery_3,
			textColor,
		})
	)

	htmlBtn.addEventListener('click', () =>
		handleHTMLBtnClick(htmlTextField, { numberOfHexagons })
	)

	hexagonContainer.innerHTML = generateHexagons(
		hexagonsFirstRow,
		numberOfHexagons
	)
}

const handleHTMLBtnClick = (
	htmlTextField: HTMLElement,
	htmlInputValues: HTMLInputValues
): void => {
	if (htmlTextField.style.visibility === 'visible') {
		htmlTextField.style.visibility = 'hidden'
	} else {
		htmlTextField.innerText = generateHTMLText(htmlInputValues)
		htmlTextField.style.visibility = 'visible'
	}
}

const handleCSSBtnClick = (
	cssTextField: HTMLElement,
	cssInputValues: CSSInputValues
): void => {
	if (cssTextField.style.visibility === 'visible') {
		cssTextField.style.visibility = 'hidden'
	} else {
		cssTextField.innerText = generateCSSText(cssInputValues)
		cssTextField.style.visibility = 'visible'
	}
}
