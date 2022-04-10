import { DOMInput } from '../index'
import {
	generateBackgroundCSS,
	generateContainerCSS,
	generateInnerHexagonCSS,
	generateMediaQueryCSS,
	generateOuterHexagonCSS,
	generateOuterHexagonHoverCSS,
	generateOuterHexagonChildCSS,
} from './css'

export const generateCSStext = (): void => {
	const cssTextField = document.getElementById('css')
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
		textColor: { valueAsString: textColor },
	} = DOMInput

	const backgroundCSSText = generateBackgroundCSS(backgroundColor)
	const containerCSSText = generateContainerCSS(
		hexagonsFirstRow,
		hexagonSize,
		containerSkewX,
		containerSkewY
	)
	const outerHexagonCSSText = generateOuterHexagonCSS(
		hexagonSize,
		hexagonTransition
	)
	const outerHexagonHoverCSSText = generateOuterHexagonHoverCSS(
		hexagonScale,
		hexagonRotation
	)
	const outerHexagonChildCSSText = generateOuterHexagonChildCSS(
		hexagonsFirstRow,
		hexagonSize
	)
	const innerHexagonCSSText = generateInnerHexagonCSS(
		hexagonColor,
		textColor,
		hexagonGap
	)

	let displayCSS =
		backgroundCSSText +
		containerCSSText +
		outerHexagonCSSText +
		outerHexagonHoverCSSText +
		outerHexagonChildCSSText +
		innerHexagonCSSText

	if (hexagonsFirstRow - 1 > 0) {
		displayCSS += generateMediaQueryCSS(
			mediaQuery_1,
			1,
			hexagonsFirstRow,
			hexagonSize
		)
	}

	if (hexagonsFirstRow - 2 > 0) {
		const extra = `html {
      font-size: 50%;
      }`
		displayCSS += generateMediaQueryCSS(
			mediaQuery_2,
			2,
			hexagonsFirstRow,
			hexagonSize,
			extra
		)
	}

	if (hexagonsFirstRow - 3 > 0) {
		displayCSS += generateMediaQueryCSS(
			mediaQuery_3,
			3,
			hexagonsFirstRow,
			hexagonSize
		)
	}

	if (cssTextField) cssTextField.innerText = displayCSS
}
