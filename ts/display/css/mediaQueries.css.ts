import { generateMediaQueryCSS } from "./mediaQuery.css";

export const generateMediaQueriesCSS = (
  hexagonsFirstRow: number,
  hexagonSize: number,
  mediaQuery_1: number,
  mediaQuery_2: number,
  mediaQuery_3: number
) => {
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
};
