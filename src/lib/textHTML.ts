import { highlightHTML } from "./highlightText";

export function generateHexagonHTML(hexagonNumber: number) {
  const hexagon = `
    <div class="hexagon__outer">
      <div class="hexagon__inner">${hexagonNumber}</div>
    </div>
`;

  return hexagon;
}

export function generateHexagonsHTML(numberOfHexagons: number) {
  let hexagonsHTML = "";

  Array(numberOfHexagons)
    .fill(0)
    .forEach((_, i) => {
      hexagonsHTML += generateHexagonHTML(i + 1);
    });

  return hexagonsHTML;
}

export function wrapHTML(html: string) {
  const wrapper = `
<div class="hexagon-wrapper">
  <div class="hexagon-wrapper__hexagon-container">
    ${html}
  </div>
</div>
`;
  return wrapper;
}

export interface HTMLInputValues {
  numberOfHexagons: number;
}

export function generateHTMLText({ numberOfHexagons }: HTMLInputValues) {
  const hexagonsHTML = generateHexagonsHTML(numberOfHexagons);
  const htmlText = wrapHTML(hexagonsHTML);

  return highlightHTML(htmlText);
}
