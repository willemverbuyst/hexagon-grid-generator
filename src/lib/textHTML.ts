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

export function replaceSymbolsInHTMLForDisplay(htmlString: string) {
  return htmlString.replace(/[<>]/g, (match) =>
    match === "<" ? "&lt;" : "&gt;",
  );
}

export function highlightHTML(htmlString: string) {
  return replaceSymbolsInHTMLForDisplay(htmlString).replace(
    /(&lt;\/?)([\w-]+)([\s\S]*?)(&gt;)/g,
    (_match, p1, p2, p3, p4) => {
      const attrHighlight = p3.replace(
        /(\b(class|id))(=")([\w-]+)(")/g,
        '<span class="html-attribute">$2</span><span class="html-symbol">$3</span><span class="html-attribute">$4</span><span class="html-symbol">$5</span>',
      );
      return `<span class="html-symbol">${p1}</span><span class="html-element">${p2}</span>${attrHighlight}<span class="html-symbol">${p4}</span>`;
    },
  );
}

export interface HTMLInputValues {
  numberOfHexagons: number;
}

export function generateHTMLText({ numberOfHexagons }: HTMLInputValues) {
  const hexagonsHTML = generateHexagonsHTML(numberOfHexagons);
  const htmlText = wrapHTML(hexagonsHTML);

  return highlightHTML(htmlText);
}
