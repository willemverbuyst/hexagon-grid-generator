import { DOMInput } from '../index'
import { generateCSSText } from './css/text.css'
import { generateHexagons } from './html/hexagons.html'
import { generateHTMLText } from './html/text.html'

export const main = (): void => {
	const cssTextField = <HTMLElement>document.getElementById('css')
	const hexagonContainer = <HTMLElement>(
		document.getElementById('hexagon__container')
	)
	const htmlTextField = <HTMLElement>document.getElementById('html')
	const {
		backgroundColor: { valueAsString: backgroundColor },
		containerSkewX: { valueAsNumber: containerSkewX },
		containerSkewY: { valueAsNumber: containerSkewY },
		hexagonsFirstRow: { valueAsNumber: hexagonsFirstRow },
		hexagonColor: { valueAsString: hexagonColor },
		hexagonGap: { valueAsNumber: hexagonGap },
		hexagonRotation: { valueAsNumber: hexagonRotation },
		hexagonScale: { valueAsNumber: hexagonScale },
		hexagonSize: { valueAsNumber: hexagonSize },
		hexagonTransition: { valueAsNumber: hexagonTransition },
		mediaQuery_1: { valueAsNumber: mediaQuery_1 },
		mediaQuery_2: { valueAsNumber: mediaQuery_2 },
		mediaQuery_3: { valueAsNumber: mediaQuery_3 },
		numberOfHexagons: { valueAsNumber: numberOfHexagons },
		textColor: { valueAsString: textColor },
	} = DOMInput

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
