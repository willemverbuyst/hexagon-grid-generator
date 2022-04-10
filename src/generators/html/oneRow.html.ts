import { generateHexagonHTMLText } from './hexagon.html'

export const generateOneRowHTMLText = (numberOfHexagons: number): string => {
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
