import { roundToTwoDecimals } from "../../../utils/math";

export const HEIGHT_TO_WIDTH_RATIO = 1.1547005;

export function generateBasicHexagonCSS({
  width,
  height = width,
  unit,
}: {
  width: number;
  height?: number;
  unit: "%" | "vw";
}): string {
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

export function calculateMarginTop(hexagonSize: number): number {
  return roundToTwoDecimals((HEIGHT_TO_WIDTH_RATIO * hexagonSize) / -4);
}

export function calculateMarginLeft(hexagonSize: number): number {
  return 0.5 * hexagonSize;
}

export function getHexagonHeight(hexagonSize: number): number {
  return roundToTwoDecimals(HEIGHT_TO_WIDTH_RATIO * hexagonSize);
}
