import {
	generateBackgroundCSS,
	generateContainerCSS,
	generateInnerHexagonCSS,
	generateMediaQueryCSS,
	generateOuterHexagonCSS,
	generateOuterHexagonHoverCSS,
	generateOuterHexagonChildCSS,
} from '.'

export const generateCSSText = (
	backgroundColor: string,
	containerSkewX: number,
	containerSkewY: number,
	hexagonsFirstRow: number,
	hexagonColor: string,
	hexagonGap: number,
	hexagonRotation: number,
	hexagonScale: number,
	hexagonSize: number,
	hexagonTransition: number,
	mediaQuery_1: number,
	mediaQuery_2: number,
	mediaQuery_3: number,
	textColor: string
): string => {
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

	return displayCSS
}
