export type HTMLInputValues = {
  numberOfHexagons: number;
};

export function renderHexagonMarkup(hexagonNumber: number): string {
  return `
    <div class="hexagon__outer">
      <div class="hexagon__inner">${hexagonNumber}</div>
    </div>
`;
}

export function renderHexagonListMarkup(numberOfHexagons: number): string {
  let hexagonsHTML = "";

  Array(numberOfHexagons)
    .fill(0)
    .forEach((_, i) => {
      hexagonsHTML += renderHexagonMarkup(i + 1);
    });

  return hexagonsHTML;
}

export function renderHexagonWrapperMarkup(html: string): string {
  return `
<div class="hexagon-wrapper">
  <div class="hexagon-wrapper__hexagon-container">
    ${html}
  </div>
</div>
`;
}

export function buildHtmlExport({
  numberOfHexagons,
}: HTMLInputValues): string {
  const hexagonsHTML = renderHexagonListMarkup(numberOfHexagons);

  return renderHexagonWrapperMarkup(hexagonsHTML);
}
