import { generateHexagonHTMLText } from '../html/hexagon.html'

export const generateOneRow = (numberOfHexagons: number): string => {
	let html = ''

	if (numberOfHexagons > 0) {
		Array(numberOfHexagons)
			.fill(0)
			.forEach((_, i) => {
				html += generateHexagonHTMLText(i + 1)
			})
	}

	return html
}
