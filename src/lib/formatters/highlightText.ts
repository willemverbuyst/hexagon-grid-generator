const HTML_DISPLAY_SYMBOLS_PATTERN = /[<>]/g;
const HTML_TAG_PATTERN = /(&lt;\/?)([\w-]+)([\s\S]*?)(&gt;)/g;
const HTML_ATTRIBUTE_PATTERN = /(\b(class|id))(=")([\w-]+)(")/g;

const CSS_SELECTOR_PATTERN = /([.#]?\w[\w-]*)\s*{/g;
const CSS_DECLARATION_PATTERN = /([a-z-]+)(\s*:\s*)([^;]+)(;?)/g;
const CSS_BRACE_PATTERN = /({|})/g;

function wrapToken(className: string, value: string): string {
  return `<span class="${className}">${value}</span>`;
}

function highlightHtmlAttributes(attributesText: string): string {
  return attributesText.replace(
    HTML_ATTRIBUTE_PATTERN,
    (
      _match,
      _fullName,
      attributeName,
      equalsWithQuote,
      attributeValue,
      quote,
    ) =>
      `${wrapToken("html-attribute", attributeName)}${wrapToken("html-symbol", equalsWithQuote)}${wrapToken("html-attribute", attributeValue)}${wrapToken("html-symbol", quote)}`,
  );
}

function highlightHtmlTag(
  _match: string,
  openingSymbol: string,
  tagName: string,
  attributesText: string,
  closingSymbol: string,
): string {
  const highlightedAttributes = highlightHtmlAttributes(attributesText);

  return [
    wrapToken("html-symbol", openingSymbol),
    wrapToken("html-element", tagName),
    highlightedAttributes,
    wrapToken("html-symbol", closingSymbol),
  ].join("");
}

function highlightCssSelectors(cssText: string): string {
  return cssText.replace(
    CSS_SELECTOR_PATTERN,
    (_match, selector) => `${wrapToken("css-selector", selector)} {`,
  );
}

function highlightCssDeclarations(cssText: string): string {
  return cssText.replace(
    CSS_DECLARATION_PATTERN,
    (_match, propertyName, separator, value, semicolon) =>
      `${wrapToken("css-property", propertyName)}${separator}${wrapToken("css-value", value)}${semicolon}`,
  );
}

function highlightCssBraces(cssText: string): string {
  return cssText.replace(CSS_BRACE_PATTERN, (_match, brace) =>
    wrapToken("css-brace", brace),
  );
}

export function replaceSymbolsInHTMLForDisplay(htmlString: string): string {
  return htmlString.replace(HTML_DISPLAY_SYMBOLS_PATTERN, (match) =>
    match === "<" ? "&lt;" : "&gt;",
  );
}

export function highlightHTML(htmlString: string): string {
  const escapedHtml = replaceSymbolsInHTMLForDisplay(htmlString);

  // Match an encoded opening/closing tag, its name, optional attributes, and the encoded closing bracket.
  return escapedHtml.replace(HTML_TAG_PATTERN, highlightHtmlTag);
}

export function highlightCSS(cssString: string): string {
  const highlightedSelectors = highlightCssSelectors(cssString);
  const highlightedDeclarations =
    highlightCssDeclarations(highlightedSelectors);

  return highlightCssBraces(highlightedDeclarations);
}
