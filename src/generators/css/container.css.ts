export const generateContainerCSSText = (
	hexagonsFirstRow: number,
	hexagonSize: number,
	containerSkewX: number,
	containerSkewY: number
): string =>
	`.hexagon-wrapper__hexagon-container {
    width: ${hexagonsFirstRow * hexagonSize}vw;
    display: flex;
    flex-wrap: wrap;
    transform: skew(${containerSkewX}deg, ${containerSkewY}deg);
  }
  `
