import { roundToTwoDecimals } from "../../logic/utils";
import { HEIGHT_TO_WIDTH_RATIO } from "../constants";

export function generateMediaQueryCSS(
  mediaQuery: number,
  i: number,
  hexagonsFirstRow: number,
  hexagonSize: number,
  extra = ""
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
        (HEIGHT_TO_WIDTH_RATIO * hexagonSize) / -4
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
  mediaQuery_3: number
) {
  let mediaQueriesCSS = "";

  if (hexagonsFirstRow - 1 > 0) {
    mediaQueriesCSS += generateMediaQueryCSS(
      mediaQuery_1,
      1,
      hexagonsFirstRow,
      hexagonSize
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
      extra
    );
  }

  if (hexagonsFirstRow - 3 > 0) {
    mediaQueriesCSS += generateMediaQueryCSS(
      mediaQuery_3,
      3,
      hexagonsFirstRow,
      hexagonSize
    );
  }

  return mediaQueriesCSS;
}
