import { generateBasicHexagonCSSText } from './basicHexagon.css'

export const generateInnerHexagonCSSText = (
	hexagonColor: string,
	textColor: string,
	hexagonGap: number
): string =>
	`.hexagon__inner {
  background-color: ${hexagonColor};
  color: ${textColor};
  ${generateBasicHexagonCSSText(100 - hexagonGap, 100 - hexagonGap)}
}
`
