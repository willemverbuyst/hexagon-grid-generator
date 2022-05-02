import { generateBasicHexagonCSS } from './basicHexagon.css'

const getHexagonCSS = (hexagonGap: number): string => {
	const percentageInnerHexagon = 100 - hexagonGap
	return generateBasicHexagonCSS(percentageInnerHexagon)
}

export const generateInnerHexagonCSS = (
	hexagonColor: string,
	textColor: string,
	hexagonGap: number
): string => {
	const hexagonCSS = getHexagonCSS(hexagonGap)

	return `
	.hexagon__inner {
  background-color: ${hexagonColor};
  color: ${textColor};
  ${hexagonCSS}
	}
	`
}
