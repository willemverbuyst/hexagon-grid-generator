export const generateHexagonHTMLText = (
	i: number,
	className?: string
): string =>
	`<div class="hexagon__outer${className ? ' ' + className : ''}">
	  <div class="hexagon__inner">${i}</div>
	</div>
  `
