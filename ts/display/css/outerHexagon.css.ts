import { roundToTwoDecimals } from "../../logic/utils";
import { HEIGHT_TO_WIDTH_RATIO } from "../constants";
import { generateBasicHexagonCSS } from "./basicHexagon.css";

const calculateMarginTop = (hexagonSize: number): number =>
  roundToTwoDecimals((HEIGHT_TO_WIDTH_RATIO * hexagonSize) / -4);

const calculateMarginLeft = (hexagonSize: number): number => 0.5 * hexagonSize;

const getHexagonCSS = (hexagonSize: number): string => {
  const width = roundToTwoDecimals(HEIGHT_TO_WIDTH_RATIO * hexagonSize);
  return generateBasicHexagonCSS(hexagonSize, width);
};

export const generateOuterHexagonCSS = (
  hexagonSize: number,
  hexagonTransition: number
): string => {
  const marginTop = calculateMarginTop(hexagonSize);
  const hexagonCSS = getHexagonCSS(hexagonSize);

  return `
	.hexagon__outer {
    margin-top: ${marginTop}vw;
    transition: all ${hexagonTransition}s;
    ${hexagonCSS}
  }
  `;
};

export const generateOuterHexagonHoverCSS = (
  hexagonScale: number,
  hexagonRotation: number
) =>
  `
	.hexagon__outer:hover {
    transform: scale(${hexagonScale}) rotate(${hexagonRotation}deg);
  }
  `;

export const generateOuterHexagonChildCSS = (
  hexagonsFirstRow: number,
  hexagonSize: number
) => {
  const marginLeft = calculateMarginLeft(hexagonSize);

  return `
	.hexagon__outer:nth-child(${hexagonsFirstRow === 1 ? "n" : "-n"} + ${
    hexagonsFirstRow === 1 ? 0 : hexagonsFirstRow
  }) {
      margin-top: 0;
  }

  .hexagon__outer:nth-child(${
    hexagonsFirstRow === 1 ? "" : hexagonsFirstRow * 2 - 1
  }n + ${hexagonsFirstRow === 1 ? "" : hexagonsFirstRow + 1}) {
      margin-left: ${marginLeft}vw;
  }
  `;
};
