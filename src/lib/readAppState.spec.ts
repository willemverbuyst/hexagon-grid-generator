import { describe, expect, it } from "vitest";
import type { AppElements } from "./appElements";
import { readAppState } from "./readAppState";

function createInput(value: string): HTMLInputElement {
  const input = document.createElement("input");
  input.value = value;

  return input;
}

function createElements(): AppElements {
  return {
    inputs: {
      numberOfHexagons: createInput("12"),
      hexagonsFirstRow: createInput("4"),
      backgroundColor: createInput("#111111"),
      hexagonColor: createInput("#222222"),
      textColor: createInput("#333333"),
      hexagonSize: createInput("9"),
      containerSkewX: createInput("10"),
      containerSkewY: createInput("11"),
      hexagonRotation: createInput("12"),
      hexagonTransition: createInput("1.5"),
      hexagonScale: createInput("1.1"),
      hexagonGap: createInput("15"),
      mediaQuery_1: createInput("900"),
      mediaQuery_2: createInput("700"),
      mediaQuery_3: createInput("500"),
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

describe("readAppState", () => {
  it("reads and normalizes the current form state", () => {
    const state = readAppState(createElements());

    expect(state).toEqual({
      numberOfHexagons: 12,
      hexagonsFirstRow: 4,
      backgroundColor: "#111111",
      hexagonColor: "#222222",
      textColor: "#333333",
      hexagonSize: 9,
      containerSkewX: 10,
      containerSkewY: 11,
      hexagonRotation: 12,
      hexagonTransition: 1.5,
      hexagonScale: 1.1,
      hexagonGap: 15,
      mediaQuery_1: 900,
      mediaQuery_2: 700,
      mediaQuery_3: 500,
    });
  });
});
