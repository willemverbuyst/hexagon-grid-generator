import DOMPurify from "dompurify";
import {
  POSTFIX_DEGREE,
  POSTFIX_PERCENTAGE,
  POSTFIX_SECONDS,
  POSTFIX_VW,
} from "../config/constants";
import type { AppElements } from "./getAndAssertHtmlElements";
import { generateCSSText } from "./generateCSSText";
import { generateHTMLText } from "./generateHTMLText";
import { highlightCSS, highlightHTML } from "./highlightText";
import { readAppState } from "./readAppState";
import { renderHexagonSection } from "./renderHexagonSection";

type StyleInputBinding = {
  input: HTMLInputElement;
  cssVariable: string;
  postfix?: string;
  transformValue?: (value: number) => string;
};

function bindInput(
  input: HTMLInputElement,
  listener: (event: Event) => void,
): void {
  input.addEventListener("input", listener);
}

function bindStyleInput({
  input,
  cssVariable,
  postfix = "",
  transformValue,
}: StyleInputBinding): void {
  bindInput(input, () => {
    const nextValue =
      transformValue?.(Number(input.value)) ?? `${input.value}${postfix}`;

    document.documentElement.style.setProperty(cssVariable, nextValue);
  });
}

function bindRenderInputs(
  inputs: AppElements["inputs"],
  render: () => void,
): void {
  bindInput(inputs.numberOfHexagons, render);
  bindInput(inputs.hexagonsFirstRow, () => {
    document.documentElement.style.setProperty(
      "--number-of-hexagons-first-row",
      inputs.hexagonsFirstRow.value,
    );
    render();
  });
}

function openDialog({
  dialogElement,
  titleElement,
  textElement,
  title,
  content,
}: {
  dialogElement: HTMLDialogElement;
  titleElement: HTMLElement;
  textElement: HTMLElement;
  title: string;
  content: string;
}): void {
  if (dialogElement.open) {
    return;
  }

  titleElement.innerText = title;
  textElement.innerHTML = DOMPurify.sanitize(content);
  dialogElement.showModal();
}

function bindHtmlExport(elements: AppElements, readState: () => ReturnType<typeof readAppState>): void {
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

function bindCssExport(elements: AppElements, readState: () => ReturnType<typeof readAppState>): void {
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

function bindDialogControls(elements: AppElements): void {
  elements.buttons.dialogClose.addEventListener("click", () => {
    elements.dialog.element.close();
  });

  elements.buttons.dialogCopy.addEventListener("click", () => {
    void navigator.clipboard.writeText(elements.dialog.text.innerText);
  });
}

function bindStyleInputs(inputs: AppElements["inputs"]): void {
  bindStyleInput({
    input: inputs.backgroundColor,
    cssVariable: "--color-bg",
  });
  bindStyleInput({
    input: inputs.hexagonColor,
    cssVariable: "--color-inner-hexagon",
  });
  bindStyleInput({
    input: inputs.textColor,
    cssVariable: "--color-text",
  });
  bindStyleInput({
    input: inputs.hexagonSize,
    cssVariable: "--width-hexagon-outer",
    postfix: POSTFIX_VW,
  });
  bindStyleInput({
    input: inputs.containerSkewX,
    cssVariable: "--skew-X",
    postfix: POSTFIX_DEGREE,
  });
  bindStyleInput({
    input: inputs.containerSkewY,
    cssVariable: "--skew-Y",
    postfix: POSTFIX_DEGREE,
  });
  bindStyleInput({
    input: inputs.hexagonRotation,
    cssVariable: "--hover-rotation",
    postfix: POSTFIX_DEGREE,
  });
  bindStyleInput({
    input: inputs.hexagonTransition,
    cssVariable: "--hover-transition",
    postfix: POSTFIX_SECONDS,
  });
  bindStyleInput({
    input: inputs.hexagonScale,
    cssVariable: "--hover-scale",
  });
  bindStyleInput({
    input: inputs.hexagonGap,
    cssVariable: "--size-hexagon-inner",
    postfix: POSTFIX_PERCENTAGE,
    transformValue: (value) => `${100 - value}${POSTFIX_PERCENTAGE}`,
  });
}

export function setupApp(elements: AppElements): { render: () => void } {
  const render = () => {
    renderHexagonSection(elements, readAppState(elements));
  };

  bindRenderInputs(elements.inputs, render);
  bindStyleInputs(elements.inputs);
  bindHtmlExport(elements, () => readAppState(elements));
  bindCssExport(elements, () => readAppState(elements));
  bindDialogControls(elements);

  return { render };
}
