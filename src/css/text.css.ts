import { generateBackgroundCSS } from './background.css'
import { generateContainerCSS } from './container.css'
import { generateInnerHexagonCSS } from './innerHexagon.css'
import { generateMediaQueriesCSS } from './mediaQueries.css'
import {
	generateOuterHexagonCSS,
	generateOuterHexagonHoverCSS,
	generateOuterHexagonChildCSS,
} from './outerHexagon.css'

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
	const mediaQueriesCSS = generateMediaQueriesCSS(
		hexagonsFirstRow,
		hexagonSize,
		mediaQuery_1,
		mediaQuery_2,
		mediaQuery_3
	)

	const displayCSS =
		backgroundCSSText +
		containerCSSText +
		outerHexagonCSSText +
		outerHexagonHoverCSSText +
		outerHexagonChildCSSText +
		innerHexagonCSSText +
		mediaQueriesCSS

	return displayCSS
}
