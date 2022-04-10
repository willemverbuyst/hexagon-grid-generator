import { DOMInput } from '../index'
import { createMediaQuery } from '../utils/CSSHelperFunctions'
import { generateBackgroundCSSText } from './css/background.css'
import { generateContainerCSSText } from './css/container.css'
import { generateInnerHexagonCSSText } from './css/innerHexagon.css'
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
		mediaQuery_1: { valueAsString: mediaQuery_1 },
		mediaQuery_2: { valueAsString: mediaQuery_2 },
		mediaQuery_3: { valueAsString: mediaQuery_3 },
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
		displayCSS += createMediaQuery(
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
		displayCSS += createMediaQuery(
			mediaQuery_2,
			2,
			hexagonsFirstRow,
			hexagonSize,
			extra
		)
	}

	if (hexagonsFirstRow - 3 > 0) {
		displayCSS += createMediaQuery(
			mediaQuery_3,
			3,
			hexagonsFirstRow,
			hexagonSize
		)
	}

	if (cssTextField) cssTextField.innerText = displayCSS
}
