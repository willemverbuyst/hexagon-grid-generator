import {
  buildHtmlExport,
  renderHexagonListMarkup,
  renderHexagonMarkup,
  renderHexagonWrapperMarkup,
} from "./html/buildHtmlExport";

export type { HTMLInputValues } from "./html/buildHtmlExport";

export function generateHexagonHTML(hexagonNumber: number): string {
  return renderHexagonMarkup(hexagonNumber);
}

export function generateHexagonsHTML(numberOfHexagons: number): string {
  return renderHexagonListMarkup(numberOfHexagons);
}

export function wrapHTML(html: string): string {
  return renderHexagonWrapperMarkup(html);
}

export function generateHTMLText(input: { numberOfHexagons: number }): string {
  return buildHtmlExport(input);
}

export { buildHtmlExport };
