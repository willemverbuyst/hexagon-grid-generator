import { HTMLInputValues } from '../models/inputs'
import { generateHexagonsHTML } from './hexagons.html'
import { wrapHTML } from './wrap.html'

export const generateHTMLText = ({
	numberOfHexagons,
}: HTMLInputValues): string => {
	const hexagonsHTML = generateHexagonsHTML(numberOfHexagons)
	const htmlText = wrapHTML(hexagonsHTML)

	return htmlText
}
