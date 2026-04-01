import { highlightCSS, highlightHTML } from "../lib/formatters/highlightText";
import { generateCSSText } from "../lib/generators/generateCSSText";
import { generateHTMLText } from "../lib/generators/generateHTMLText";
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
    const generatedHTML = generateHTMLText({
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
    const generatedCSS = generateCSSText(readState());

    openDialog({
      dialogElement: elements.dialog.element,
      titleElement: elements.dialog.title,
      textElement: elements.dialog.text,
      title: "CSS",
      content: highlightCSS(generatedCSS),
    });
  });
}
