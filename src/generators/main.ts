import { generateCSSText } from './css/text.css'
import { generateHexagons } from './hexagons'
import { generateHTMLText } from './html/text.html'
import { inputElements } from './input'

export const main = (): void => {
	const cssTextField = <HTMLElement>document.getElementById('css')
	const hexagonContainer = <HTMLElement>(
		document.getElementById('hexagon__container')
	)
	const htmlTextField = <HTMLElement>document.getElementById('html')
	const cssBtn = <HTMLElement>document.getElementById('cssBtn')

	cssBtn.addEventListener('click', () =>
		cssTextField.style.visibility === 'visible'
			? (cssTextField.style.visibility = 'hidden')
			: (cssTextField.style.visibility = 'visible')
	)
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
