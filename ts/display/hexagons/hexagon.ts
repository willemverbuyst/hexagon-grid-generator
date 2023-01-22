export const generateHexagon = (
  hexagonNumber: number,
  className?: string
): string =>
  `<div class="hexagon__outer${className ? " " + className : ""}">
	  <div class="hexagon__inner">${hexagonNumber}</div>
	</div>
  `;
