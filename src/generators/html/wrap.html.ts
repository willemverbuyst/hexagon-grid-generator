export const wrapHTML = (html: string): string => {
	return `
    <div class="hexagon-wrapper">
		  <div class="hexagon-wrapper__hexagon-container">
			
		    ${html}
		  </div>
		</div>
    `
}
