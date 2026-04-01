import {
  generateOuterHexagonCSS,
  generateInnerHexagonCSS,
  generateOuterHexagonChildCSS,
} from "./css/generateHexagonCSS";
import {
  generateBackgroundCSS,
  generateContainerCSS,
  generateOuterHexagonHoverCSS,
} from "./css/generateLayoutCSS";
import {
  generateMediaQueriesCSS,
  generateMediaQueryCSS,
} from "./css/generateResponsiveCSS";
import { generateBasicHexagonCSS } from "./css/shared";

export type CSSInputValues = {
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
};

export function buildCssExport({
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

export function generateCSSText(input: CSSInputValues): string {
  return buildCssExport(input);
}

export {
  generateBackgroundCSS,
  generateBasicHexagonCSS,
  generateContainerCSS,
  generateInnerHexagonCSS,
  generateMediaQueriesCSS,
  generateMediaQueryCSS,
  generateOuterHexagonChildCSS,
  generateOuterHexagonCSS,
  generateOuterHexagonHoverCSS,
};
