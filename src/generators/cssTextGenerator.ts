import { DOMInput } from '../index'
import { generateBackgroundCSSText } from './css/background.css'
import { generateContainerCSSText } from './css/container.css'
import { generateInnerHexagonCSSText } from './css/innerHexagon.css'
import { generateMediaQueryCSSText } from './css/mediaQuery.css'
import {
	generateOuterHexagonChildCSSText,
	generateOuterHexagonCSSText,
	generateOuterHexagonHoverCSSText,
} from './css/outerHexagon.css'

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

	const backgroundCSSText = generateBackgroundCSSText(backgroundColor)
	const containerCSSText = generateContainerCSSText(
		hexagonsFirstRow,
		hexagonSize,
		containerSkewX,
		containerSkewY
	)
	const outerHexagonCSSText = generateOuterHexagonCSSText(
		hexagonSize,
		hexagonTransition
	)
	const outerHexagonHoverCSSText = generateOuterHexagonHoverCSSText(
		hexagonScale,
		hexagonRotation
	)
	const outerHexagonChildCSSText = generateOuterHexagonChildCSSText(
		hexagonsFirstRow,
		hexagonSize
	)
	const innerHexagonCSSText = generateInnerHexagonCSSText(
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
		displayCSS += generateMediaQueryCSSText(
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
		displayCSS += generateMediaQueryCSSText(
			mediaQuery_2,
			2,
			hexagonsFirstRow,
			hexagonSize,
			extra
		)
	}

	if (hexagonsFirstRow - 3 > 0) {
		displayCSS += generateMediaQueryCSSText(
			mediaQuery_3,
			3,
			hexagonsFirstRow,
			hexagonSize
		)
	}

	if (cssTextField) cssTextField.innerText = displayCSS
}
