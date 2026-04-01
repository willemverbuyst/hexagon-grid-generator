import {
  HEXAGON_CONTAINER_CLASS,
  HEXAGON_INNER_CLASS,
  HEXAGON_OUTER_CLASS,
  HEXAGON_WRAPPER_CLASS,
} from "../constants";

export type HTMLInputValues = {
  numberOfHexagons: number;
};

export type HtmlInputValues = HTMLInputValues;

export function generateHexagonMarkup(hexagonNumber: number): string {
  return `
    <div class="${HEXAGON_OUTER_CLASS}">
      <div class="${HEXAGON_INNER_CLASS}">${hexagonNumber}</div>
    </div>
`;
}

export function generateHexagonListMarkup(numberOfHexagons: number): string {
  let hexagonsHTML = "";

  Array(numberOfHexagons)
    .fill(0)
    .forEach((_, i) => {
      hexagonsHTML += generateHexagonMarkup(i + 1);
    });

  return hexagonsHTML;
}

export function generateHexagonWrapperMarkup(html: string): string {
  return `
<div class="${HEXAGON_WRAPPER_CLASS}">
  <div class="${HEXAGON_CONTAINER_CLASS}">
    ${html}
  </div>
</div>
`;
}

export function generateHtmlText({
  numberOfHexagons,
}: HtmlInputValues): string {
  const hexagonsHTML = generateHexagonListMarkup(numberOfHexagons);

  return generateHexagonWrapperMarkup(hexagonsHTML);
}

export const renderHexagonMarkup = generateHexagonMarkup;
export const renderHexagonListMarkup = generateHexagonListMarkup;
export const renderHexagonWrapperMarkup = generateHexagonWrapperMarkup;
export const buildHtmlExport = generateHtmlText;
