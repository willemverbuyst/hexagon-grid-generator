import { wrapHTML } from './wrap.html'
import { generateHexagonsHTML } from './hexagons.html'

export const generateHTMLText = (numberOfHexagons: number): string => {
	const hexagonsHTML = generateHexagonsHTML(numberOfHexagons)
	const htmlText = wrapHTML(hexagonsHTML)

	return htmlText
}
