import { CSSInputValues } from '../../logic/models/inputs'
import { generateBackgroundCSS } from './background.css'
import { generateContainerCSS } from './container.css'
import { generateInnerHexagonCSS } from './innerHexagon.css'
import { generateMediaQueriesCSS } from './mediaQueries.css'
import {
	generateOuterHexagonChildCSS,
	generateOuterHexagonCSS,
	generateOuterHexagonHoverCSS,
} from './outerHexagon.css'

export const generateCSSText = ({
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
}: CSSInputValues): string => {
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
