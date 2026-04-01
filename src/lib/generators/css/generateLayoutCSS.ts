import { generateBasicHexagonCSS, getHexagonHeight } from "./shared";
import {
  HEXAGON_CONTAINER_SELECTOR,
  HEXAGON_OUTER_SELECTOR,
  HEXAGON_WRAPPER_SELECTOR,
} from "../constants";

export function generateBackgroundCSS(backgroundColor: string): string {
  return `
  ${HEXAGON_WRAPPER_SELECTOR} {
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
  ${HEXAGON_CONTAINER_SELECTOR} {
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
  return `${HEXAGON_OUTER_SELECTOR}:hover {
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
