import { generateCSSText } from './css/text.css'
import { generateHexagons } from './hexagons'
import { generateHTMLText } from './html/text.html'
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
		cssTextField.style.visibility === 'visible'
			? (cssTextField.style.visibility = 'hidden')
			: (cssTextField.style.visibility = 'visible')
	)

	htmlBtn.addEventListener('click', () => {
		htmlTextField.style.visibility === 'visible'
			? (htmlTextField.style.visibility = 'hidden')
			: (htmlTextField.style.visibility = 'visible')
	})

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

	hexagonContainer.innerHTML = generateHexagons(
		hexagonsFirstRow,
		numberOfHexagons
	)
	htmlTextField.innerText = generateHTMLText(numberOfHexagons)
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
}
