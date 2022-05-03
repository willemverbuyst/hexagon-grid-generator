import { generateCSSText } from '../css/text.css'
import { generateHTMLText } from '../html/text.html'
import { generateHexagons } from './hexagons'
import { inputElements } from './input'

function assertNonNullish<T>(
	value: T,
	message: string
): asserts value is NonNullable<T> {
	if (value === null || value === undefined) {
		throw Error(message)
	}
}

export const main = (): void => {
	const {
		backgroundColor: {
			input: { valueAsString: backgroundColor },
		},
		containerSkewX: {
			input: { valueAsNumber: containerSkewX },
		},
		containerSkewY: {
			input: { valueAsNumber: containerSkewY },
		},
		hexagonsFirstRow: {
			input: { valueAsNumber: hexagonsFirstRow },
		},
		hexagonColor: {
			input: { valueAsString: hexagonColor },
		},
		hexagonGap: {
			input: { valueAsNumber: hexagonGap },
		},
		hexagonRotation: {
			input: { valueAsNumber: hexagonRotation },
		},
		hexagonScale: {
			input: { valueAsNumber: hexagonScale },
		},
		hexagonSize: {
			input: { valueAsNumber: hexagonSize },
		},
		hexagonTransition: {
			input: { valueAsNumber: hexagonTransition },
		},
		mediaQuery_1: {
			input: { valueAsNumber: mediaQuery_1 },
		},
		mediaQuery_2: {
			input: { valueAsNumber: mediaQuery_2 },
		},
		mediaQuery_3: {
			input: { valueAsNumber: mediaQuery_3 },
		},
		numberOfHexagons: {
			input: { valueAsNumber: numberOfHexagons },
		},
		textColor: {
			input: { valueAsString: textColor },
		},
	} = inputElements

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
		handleCSSBtnClick({
			cssTextField,
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
		handleHTMLBtnClick({ htmlTextField, numberOfHexagons })
	)

	hexagonContainer.innerHTML = generateHexagons(
		hexagonsFirstRow,
		numberOfHexagons
	)
}

const handleHTMLBtnClick = ({
	htmlTextField,
	numberOfHexagons,
}: {
	htmlTextField: HTMLElement
	numberOfHexagons: number
}): void => {
	if (htmlTextField.style.visibility === 'visible') {
		htmlTextField.style.visibility = 'hidden'
	} else {
		htmlTextField.innerText = generateHTMLText(numberOfHexagons)
		htmlTextField.style.visibility = 'visible'
	}
}

const handleCSSBtnClick = ({
	cssTextField,
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
}: {
	cssTextField: HTMLElement
	backgroundColor: string
	containerSkewX: number
	containerSkewY: number
	hexagonsFirstRow: number
	hexagonColor: string
	hexagonGap: number
	hexagonRotation: number
	hexagonScale: number
	hexagonSize: number
	hexagonTransition: number
	mediaQuery_1: number
	mediaQuery_2: number
	mediaQuery_3: number
	textColor: string
}): void => {
	if (cssTextField.style.visibility === 'visible') {
		cssTextField.style.visibility = 'hidden'
	} else {
		cssTextField.innerText = generateCSSText(
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
			textColor
		)
		cssTextField.style.visibility = 'visible'
	}
}
