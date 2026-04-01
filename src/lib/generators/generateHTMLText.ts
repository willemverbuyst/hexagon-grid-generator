import {
  generateHexagonListMarkup,
  generateHexagonMarkup,
  generateHexagonWrapperMarkup,
  generateHtmlText,
} from "./html/buildHtmlExport";

export type { HTMLInputValues, HtmlInputValues } from "./html/buildHtmlExport";

export function generateHexagonMarkupText(hexagonNumber: number): string {
  return generateHexagonMarkup(hexagonNumber);
}

export function generateHexagonListMarkupText(
  numberOfHexagons: number,
): string {
  return generateHexagonListMarkup(numberOfHexagons);
}

export function generateHexagonWrapperMarkupText(html: string): string {
  return generateHexagonWrapperMarkup(html);
}

export function generateHTMLText(input: { numberOfHexagons: number }): string {
  return generateHtmlText(input);
}

export { generateHtmlText };
export const generateHtmlExport = generateHtmlText;
export const generateHexagonHTML = generateHexagonMarkupText;
export const generateHexagonsHTML = generateHexagonListMarkupText;
export const wrapHTML = generateHexagonWrapperMarkupText;
export const buildHtmlExport = generateHtmlText;
