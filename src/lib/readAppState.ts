import type { AppElements } from "./getAndAssertHtmlElements";

export type AppState = {
  numberOfHexagons: number;
  hexagonsFirstRow: number;
  backgroundColor: string;
  hexagonColor: string;
  textColor: string;
  hexagonSize: number;
  containerSkewX: number;
  containerSkewY: number;
  hexagonRotation: number;
  hexagonTransition: number;
  hexagonScale: number;
  hexagonGap: number;
  mediaQuery_1: number;
  mediaQuery_2: number;
  mediaQuery_3: number;
};

function readNumberValue(input: HTMLInputElement): number {
  return Number(input.value);
}

export function readAppState(elements: AppElements): AppState {
  const { inputs } = elements;

  return {
    numberOfHexagons: readNumberValue(inputs.numberOfHexagons),
    hexagonsFirstRow: readNumberValue(inputs.hexagonsFirstRow),
    backgroundColor: inputs.backgroundColor.value,
    hexagonColor: inputs.hexagonColor.value,
    textColor: inputs.textColor.value,
    hexagonSize: readNumberValue(inputs.hexagonSize),
    containerSkewX: readNumberValue(inputs.containerSkewX),
    containerSkewY: readNumberValue(inputs.containerSkewY),
    hexagonRotation: readNumberValue(inputs.hexagonRotation),
    hexagonTransition: readNumberValue(inputs.hexagonTransition),
    hexagonScale: readNumberValue(inputs.hexagonScale),
    hexagonGap: readNumberValue(inputs.hexagonGap),
    mediaQuery_1: readNumberValue(inputs.mediaQuery_1),
    mediaQuery_2: readNumberValue(inputs.mediaQuery_2),
    mediaQuery_3: readNumberValue(inputs.mediaQuery_3),
  };
}
