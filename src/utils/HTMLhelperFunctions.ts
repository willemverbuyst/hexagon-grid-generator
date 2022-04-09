export const createHexagonHTMLString = (
	i: number,
	className?: string
): string =>
	`<div class="hexagon__outer${className ? ' ' + className : ''}">` +
	'\n' +
	`<div class="hexagon__inner">${i}</div>` +
	'\n' +
	'</div>' +
	'\n'
