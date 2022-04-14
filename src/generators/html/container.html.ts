import { generateHexagonHTML } from './hexagon.html'

export const generateContainerHTML = (numberOfHexagons: number): string => {
	let html = ''

	Array(numberOfHexagons)
		.fill(0)
		.forEach((_, i) => {
			html += generateHexagonHTML(i + 1)
		})

	return `
    <div class="hexagon-wrapper">
		  <div class="hexagon-wrapper__hexagon-container">
			
		    ${html}
		  </div>
		</div>
    `
}
