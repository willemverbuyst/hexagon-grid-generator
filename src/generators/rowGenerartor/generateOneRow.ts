import { createHexagonHTMLString } from '../../utils/HTMLhelperFunctions'

export const generateOneRow = (numberOfHexagons: number): string => {
	let html = ''

	if (numberOfHexagons > 0) {
		Array(numberOfHexagons)
			.fill(0)
			.forEach((_, i) => {
				html += createHexagonHTMLString(i + 1)
			})
	}

	return html
}
