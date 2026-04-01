import { highlightCSS, highlightHTML } from "../lib/formatters/highlightText";
import { generateCssText } from "../lib/generators/generateCSSText";
import { generateHtmlText } from "../lib/generators/generateHTMLText";
import type { AppElements } from "./appElements";
import { openDialog } from "./dialog";
import type { AppState } from "./readAppState";

type ReadState = () => AppState;

export function bindHtmlExport(
  elements: AppElements,
  readState: ReadState,
): void {
  elements.buttons.html.addEventListener("click", () => {
    const state = readState();
    const generatedHTML = generateHtmlText({
      numberOfHexagons: state.numberOfHexagons,
    });

    openDialog({
      dialogElement: elements.dialog.element,
      titleElement: elements.dialog.title,
      textElement: elements.dialog.text,
      title: "HTML",
      content: highlightHTML(generatedHTML),
    });
  });
}

export function bindCssExport(
  elements: AppElements,
  readState: ReadState,
): void {
  elements.buttons.css.addEventListener("click", () => {
    const generatedCSS = generateCssText(readState());

    openDialog({
      dialogElement: elements.dialog.element,
      titleElement: elements.dialog.title,
      textElement: elements.dialog.text,
      title: "CSS",
      content: highlightCSS(generatedCSS),
    });
  });
}
