import type { AppElements } from "../appElements";

function createInput(value = ""): HTMLInputElement {
  const input = document.createElement("input");
  input.value = value;

  return input;
}

export function createAppElements(
  inputValues: Partial<Record<keyof AppElements["inputs"], string>> = {},
): AppElements {
  return {
    inputs: {
      numberOfHexagons: createInput(inputValues.numberOfHexagons ?? "5"),
      hexagonsFirstRow: createInput(inputValues.hexagonsFirstRow ?? "3"),
      backgroundColor: createInput(inputValues.backgroundColor ?? "#101010"),
      hexagonColor: createInput(inputValues.hexagonColor ?? "#202020"),
      textColor: createInput(inputValues.textColor ?? "#303030"),
      hexagonSize: createInput(inputValues.hexagonSize ?? "10"),
      containerSkewX: createInput(inputValues.containerSkewX ?? "5"),
      containerSkewY: createInput(inputValues.containerSkewY ?? "6"),
      hexagonRotation: createInput(inputValues.hexagonRotation ?? "7"),
      hexagonTransition: createInput(inputValues.hexagonTransition ?? "0.2"),
      hexagonScale: createInput(inputValues.hexagonScale ?? "1.3"),
      hexagonGap: createInput(inputValues.hexagonGap ?? "20"),
      mediaQuery_1: createInput(inputValues.mediaQuery_1 ?? "900"),
      mediaQuery_2: createInput(inputValues.mediaQuery_2 ?? "700"),
      mediaQuery_3: createInput(inputValues.mediaQuery_3 ?? "500"),
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
