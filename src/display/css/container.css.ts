export const generateContainerCSS = (
	hexagonsFirstRow: number,
	hexagonSize: number,
	containerSkewX: number,
	containerSkewY: number
): string => {
	const width = hexagonsFirstRow * hexagonSize

	return `
  .hexagon-wrapper__hexagon-container {
    width: ${width}vw;
    display: flex;
    flex-wrap: wrap;
    transform: skew(${containerSkewX}deg, ${containerSkewY}deg);
  }
  `
}
