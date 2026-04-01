import { generateBasicHexagonCSS, getHexagonHeight } from "./shared";

export function generateBackgroundCSS(backgroundColor: string): string {
  return `
  .hexagon-wrapper {
    background-color: ${backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  `;
}

export function generateContainerCSS(
  hexagonsFirstRow: number,
  hexagonSize: number,
  containerSkewX: number,
  containerSkewY: number,
): string {
  const width = hexagonsFirstRow * hexagonSize;

  return `
  .hexagon-wrapper__hexagon-container {
    width: ${width}vw;
    display: flex;
    flex-wrap: wrap;
    transform: skew(${containerSkewX}deg, ${containerSkewY}deg);
  }

  `;
}

export function generateOuterHexagonHoverCSS(
  hexagonScale: number,
  hexagonRotation: number,
): string {
  return `.hexagon__outer:hover {
    transform: scale(${hexagonScale}) rotate(${hexagonRotation}deg);
  }

  `;
}

export function getOuterHexagonShapeCSS(hexagonSize: number): string {
  return generateBasicHexagonCSS({
    height: getHexagonHeight(hexagonSize),
    width: hexagonSize,
    unit: "vw",
  });
}
