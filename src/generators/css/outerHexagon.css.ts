import { roundToTwoDecimals } from '../../utils/generalFunctions'
import { generateBasicHexagonCSS } from './basicHexagon.css'

export const generateOuterHexagonCSS = (
	hexagonSize: number,
	hexagonTransition: number
): string =>
	`.hexagon__outer {
    margin-top: ${roundToTwoDecimals((1.154665 * hexagonSize) / -4)}vw;
    transition: all ${hexagonTransition}s;
    ${generateBasicHexagonCSS(
			hexagonSize,
			roundToTwoDecimals(1.154665 * hexagonSize)
		)}
  }
  `

export const generateOuterHexagonHoverCSS = (
	hexagonScale: number,
	hexagonRotation: number
) =>
	`.hexagon__outer:hover {
    transform: scale(${hexagonScale}) rotate(${hexagonRotation}deg);
  }
  `

export const generateOuterHexagonChildCSS = (
	hexagonsFirstRow: number,
	hexagonSize: number
) =>
	`.hexagon__outer:nth-child(${hexagonsFirstRow === 1 ? 'n' : '-n'} + ${
		hexagonsFirstRow === 1 ? 0 : hexagonsFirstRow
	}) {
      margin-top: 0;
  }

  .hexagon__outer:nth-child(${
		hexagonsFirstRow === 1 ? '' : hexagonsFirstRow * 2 - 1
	}n + ${hexagonsFirstRow === 1 ? '' : hexagonsFirstRow + 1}) {
      margin-left: ${0.5 * hexagonSize}vw;
  }
  `
