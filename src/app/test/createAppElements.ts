import type { AppElements } from "../appElements";
import { createAppState } from "./createAppState";

function createInput(value = ""): HTMLInputElement {
  const input = document.createElement("input");
  input.value = value;

  return input;
}

export function createAppElements(
  inputValues: Partial<Record<keyof AppElements["inputs"], string>> = {},
): AppElements {
  const defaultState = createAppState();

  return {
    inputs: {
      numberOfHexagons: createInput(
        inputValues.numberOfHexagons ?? String(defaultState.numberOfHexagons),
      ),
      hexagonsFirstRow: createInput(
        inputValues.hexagonsFirstRow ?? String(defaultState.hexagonsFirstRow),
      ),
      backgroundColor: createInput(
        inputValues.backgroundColor ?? defaultState.backgroundColor,
      ),
      hexagonColor: createInput(
        inputValues.hexagonColor ?? defaultState.hexagonColor,
      ),
      textColor: createInput(inputValues.textColor ?? defaultState.textColor),
      hexagonSize: createInput(
        inputValues.hexagonSize ?? String(defaultState.hexagonSize),
      ),
      containerSkewX: createInput(
        inputValues.containerSkewX ?? String(defaultState.containerSkewX),
      ),
      containerSkewY: createInput(
        inputValues.containerSkewY ?? String(defaultState.containerSkewY),
      ),
      hexagonRotation: createInput(
        inputValues.hexagonRotation ?? String(defaultState.hexagonRotation),
      ),
      hexagonTransition: createInput(
        inputValues.hexagonTransition ?? String(defaultState.hexagonTransition),
      ),
      hexagonScale: createInput(
        inputValues.hexagonScale ?? String(defaultState.hexagonScale),
      ),
      hexagonGap: createInput(
        inputValues.hexagonGap ?? String(defaultState.hexagonGap),
      ),
      mediaQuery_1: createInput(
        inputValues.mediaQuery_1 ?? String(defaultState.mediaQuery_1),
      ),
      mediaQuery_2: createInput(
        inputValues.mediaQuery_2 ?? String(defaultState.mediaQuery_2),
      ),
      mediaQuery_3: createInput(
        inputValues.mediaQuery_3 ?? String(defaultState.mediaQuery_3),
      ),
    },
    buttons: {
      css: document.createElement("button"),
      html: document.createElement("button"),
      dialogClose: document.createElement("button"),
      dialogCopy: document.createElement("button"),
    },
    dialog: {
      element: document.createElement("dialog"),
      text: document.createElement("div"),
      title: document.createElement("div"),
    },
    preview: {
      hexagonContainer: document.createElement("div"),
    },
  };
}
