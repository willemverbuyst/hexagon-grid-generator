import {
  calculateMarginLeft,
  calculateMarginTop,
  generateBasicHexagonCSS,
} from "./shared";
import { getOuterHexagonShapeCSS } from "./generateLayoutCSS";

export function generateOuterHexagonCSS(
  hexagonSize: number,
  hexagonTransition: number,
): string {
  const marginTop = calculateMarginTop(hexagonSize);
  const hexagonCSS = getOuterHexagonShapeCSS(hexagonSize);

  return `
  .hexagon__outer {
    margin-top: ${marginTop}vw;
    transition: all ${hexagonTransition}s;
    ${hexagonCSS}
  }

  `;
}

export function generateOuterHexagonChildCSS(
  hexagonsFirstRow: number,
  hexagonSize: number,
): string {
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
}

export function generateInnerHexagonCSS(
  hexagonColor: string,
  textColor: string,
  hexagonGap: number,
): string {
  const percentageInnerHexagon = 100 - hexagonGap;
  const hexagonCSS = generateBasicHexagonCSS({
    width: percentageInnerHexagon,
    unit: "%",
  });

  return `
  .hexagon__inner {
    background-color: ${hexagonColor};
    color: ${textColor};
    ${hexagonCSS}
  }

	`;
}
