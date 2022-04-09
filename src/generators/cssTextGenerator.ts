import { DOMInput } from '../index'
import { createMediaQuery } from '../utils/CSSHelperFunctions'
import { generateHexagonCSS } from '../utils/generateHexagonCSS'

const roundToTwoDecimals = (value: number): number =>
	Number(Math.round(parseFloat(value + 'e' + 2)) + 'e-' + 2)

export const generateCSStext = (): void => {
	const cssTextField = document.getElementById('css')
	const {
		backgroundColor: { valueAsString: backgroundColor },
		containerSkewX: { valueAsString: containerSkewX },
		containerSkewY: { valueAsString: containerSkewY },
		hexagonsFirstRow: { valueAsNumber: hexagonsFirstRow },
		hexagonColor: { valueAsString: hexagonColor },
		hexagonGap: { valueAsNumber: hexagonGap },
		hexagonRotation: { valueAsString: hexagonRotation },
		hexagonScale: { valueAsString: hexagonScale },
		hexagonSize: { valueAsNumber: hexagonSize },
		hexagonTransition: { valueAsString: hexagonTransition },
		mediaQuery_1: { valueAsString: mediaQuery_1 },
		mediaQuery_2: { valueAsString: mediaQuery_2 },
		mediaQuery_3: { valueAsString: mediaQuery_3 },
		textColor: { valueAsString: textColor },
	} = DOMInput

	let displayCSS = `
.hexagon-wrapper {
  background-color: ${backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
}

.hexagon-wrapper__hexagon-container {
  width: ${hexagonsFirstRow * hexagonSize}vw;
  display: flex;
  flex-wrap: wrap;
  transform: skew(${containerSkewX}deg, ${containerSkewY}deg);
}

.hexagon__outer {
  margin-top: ${((1.154665 * hexagonSize) / -4).toFixed(2)}vw;
  transition: all ${hexagonTransition}s;
  ${generateHexagonCSS(hexagonSize, roundToTwoDecimals(1.154665 * hexagonSize))}
}

.hexagon__outer:hover {
  transform: scale(${hexagonScale}) rotate(${hexagonRotation}deg);
}

.hexagon__outer:nth-child(${hexagonsFirstRow === 1 ? 'n' : '-n'} + ${
		hexagonsFirstRow === 1 ? 0 : hexagonsFirstRow
	}) {
    margin-top: 0;
}

.hexagon__outer:nth-child(${
		hexagonsFirstRow === 1 ? '' : hexagonsFirstRow * 2 - 1
	}n + ${hexagonsFirstRow === 1 ? '' : hexagonsFirstRow + 1}) {
    margin-left: ${0.5 * hexagonSize}vw;
}

.hexagon__inner {
  background-color: ${hexagonColor};
  color: ${textColor};
  ${generateHexagonCSS(100 - hexagonGap, 100 - hexagonGap)}
}
`

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
