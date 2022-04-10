import { generateHexagonHTML } from './hexagon.html'

export const generateOneRowHTML = (numberOfHexagons: number): string => {
	let html = ''

	if (numberOfHexagons > 0) {
		Array(numberOfHexagons)
			.fill(0)
			.forEach((_, i) => {
				html += generateHexagonHTML(i + 1)
			})
	}

	return html
}
