import { generateBasicHexagonCSS } from './basicHexagon.css'

export const generateInnerHexagonCSS = (
	hexagonColor: string,
	textColor: string,
	hexagonGap: number
): string =>
	`.hexagon__inner {
  background-color: ${hexagonColor};
  color: ${textColor};
  ${generateBasicHexagonCSS(100 - hexagonGap, 100 - hexagonGap)}
	}
	`
