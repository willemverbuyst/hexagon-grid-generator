import { roundToTwoDecimals } from "./utils";

const HEIGHT_TO_WIDTH_RATIO = 1.1547005;

export function generateBackgroundCSS(backgroundColor: string) {
  return `.hexagon-wrapper {
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
) {
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

export function generateBasicHexagonCSS({
  width,
  height = width,
  unit,
}: {
  width: number;
  height?: number;
  unit: "%" | "vw";
}) {
  return `-webkit-clip-path: polygon(
  0 25%,
  50% 0,
  100% 25%,
  100% 75%,
  50% 100%,
  0 75%
);
clip-path: polygon(
  0 25%,
  50% 0,
  100% 25%,
  100% 75%,
  50% 100%,
  0 75%
);
width: ${width}${unit};
height: ${height}${unit};
display: flex;
justify-content: center;
align-items: center;`;
}

function calculateMarginTop(hexagonSize: number) {
  return roundToTwoDecimals((HEIGHT_TO_WIDTH_RATIO * hexagonSize) / -4);
}

function calculateMarginLeft(hexagonSize: number) {
  return 0.5 * hexagonSize;
}

function getHexagonCSS(hexagonSize: number) {
  const height = roundToTwoDecimals(HEIGHT_TO_WIDTH_RATIO * hexagonSize);

  return generateBasicHexagonCSS({ height, width: hexagonSize, unit: "vw" });
}

export function generateOuterHexagonCSS(
  hexagonSize: number,
  hexagonTransition: number,
) {
  const marginTop = calculateMarginTop(hexagonSize);
  const hexagonCSS = getHexagonCSS(hexagonSize);

  return `
	.hexagon__outer {
    margin-top: ${marginTop}vw;
    transition: all ${hexagonTransition}s;
    ${hexagonCSS}
  }
  `;
}

export function generateOuterHexagonHoverCSS(
  hexagonScale: number,
  hexagonRotation: number,
) {
  return `
	.hexagon__outer:hover {
    transform: scale(${hexagonScale}) rotate(${hexagonRotation}deg);
  }
  `;
}

export function generateOuterHexagonChildCSS(
  hexagonsFirstRow: number,
  hexagonSize: number,
) {
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
) {
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

export function generateMediaQueryCSS(
  mediaQuery: number,
  i: number,
  hexagonsFirstRow: number,
  hexagonSize: number,
  extra = "",
) {
  return `
  @media (max-width: ${mediaQuery}px) {
    ${extra}
    .hexagon-wrapper__hexagon-container {
      width: ${(hexagonsFirstRow - i) * hexagonSize}vw;
    }

    /* reset */
    .hexagon__outer:nth-child(-n + ${hexagonsFirstRow + 1 - i}) {
      margin-top: ${roundToTwoDecimals(
        (HEIGHT_TO_WIDTH_RATIO * hexagonSize) / -4,
      )}vw;
    }

    /* reset */
    .hexagon__outer:nth-child(${hexagonsFirstRow * 2 - i * 2 + 1}n + ${
      hexagonsFirstRow + 2 - i
    }) {
        margin-left: 0;
    }

    .hexagon__outer:nth-child(${hexagonsFirstRow - i < 2 ? "n" : "-n"} + ${
      hexagonsFirstRow - i < 2 ? 0 : hexagonsFirstRow - i
    }) {
        margin-top: 0;
    }

    .hexagon__outer:nth-child(${
      hexagonsFirstRow * 2 - i * 2 - 1 < 3
        ? 0
        : hexagonsFirstRow * 2 - i * 2 - 1
    }n + ${hexagonsFirstRow + 1 - i < 3 ? 0 : hexagonsFirstRow + 1 - i}) {
      margin-left: ${0.5 * hexagonSize}vw;
    }
  }
`;
}

export function generateMediaQueriesCSS(
  hexagonsFirstRow: number,
  hexagonSize: number,
  mediaQuery_1: number,
  mediaQuery_2: number,
  mediaQuery_3: number,
) {
  let mediaQueriesCSS = "";

  if (hexagonsFirstRow - 1 > 0) {
    mediaQueriesCSS += generateMediaQueryCSS(
      mediaQuery_1,
      1,
      hexagonsFirstRow,
      hexagonSize,
    );
  }

  if (hexagonsFirstRow - 2 > 0) {
    const extra = `html {
      font-size: 50%;
      }
			`;
    mediaQueriesCSS += generateMediaQueryCSS(
      mediaQuery_2,
      2,
      hexagonsFirstRow,
      hexagonSize,
      extra,
    );
  }

  if (hexagonsFirstRow - 3 > 0) {
    mediaQueriesCSS += generateMediaQueryCSS(
      mediaQuery_3,
      3,
      hexagonsFirstRow,
      hexagonSize,
    );
  }

  return mediaQueriesCSS;
}

export interface CSSInputValues {
  backgroundColor: string;
  containerSkewX: number;
  containerSkewY: number;
  hexagonsFirstRow: number;
  hexagonColor: string;
  hexagonGap: number;
  hexagonRotation: number;
  hexagonScale: number;
  hexagonSize: number;
  hexagonTransition: number;
  mediaQuery_1: number;
  mediaQuery_2: number;
  mediaQuery_3: number;
  textColor: string;
}

export function generateCSSText({
  backgroundColor,
  containerSkewX,
  containerSkewY,
  hexagonsFirstRow,
  hexagonColor,
  hexagonGap,
  hexagonRotation,
  hexagonScale,
  hexagonSize,
  hexagonTransition,
  mediaQuery_1,
  mediaQuery_2,
  mediaQuery_3,
  textColor,
}: CSSInputValues) {
  const backgroundCSSText = generateBackgroundCSS(backgroundColor);
  const containerCSSText = generateContainerCSS(
    hexagonsFirstRow,
    hexagonSize,
    containerSkewX,
    containerSkewY,
  );
  const outerHexagonCSSText = generateOuterHexagonCSS(
    hexagonSize,
    hexagonTransition,
  );
  const outerHexagonHoverCSSText = generateOuterHexagonHoverCSS(
    hexagonScale,
    hexagonRotation,
  );
  const outerHexagonChildCSSText = generateOuterHexagonChildCSS(
    hexagonsFirstRow,
    hexagonSize,
  );
  const innerHexagonCSSText = generateInnerHexagonCSS(
    hexagonColor,
    textColor,
    hexagonGap,
  );
  const mediaQueriesCSS = generateMediaQueriesCSS(
    hexagonsFirstRow,
    hexagonSize,
    mediaQuery_1,
    mediaQuery_2,
    mediaQuery_3,
  );

  const displayCSS =
    backgroundCSSText +
    containerCSSText +
    outerHexagonCSSText +
    outerHexagonHoverCSSText +
    outerHexagonChildCSSText +
    innerHexagonCSSText +
    mediaQueriesCSS;

  return displayCSS;
}
