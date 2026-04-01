import { describe, expect, it } from "vitest";
import { readAppState } from "./readAppState";
import { createAppElements } from "./test/createAppElements";
import { createAppState } from "./test/createAppState";

describe("readAppState", () => {
  it("reads and normalizes the current form state", () => {
    const expectedState = createAppState({
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
    const state = readAppState(
      createAppElements({
        numberOfHexagons: String(expectedState.numberOfHexagons),
        hexagonsFirstRow: String(expectedState.hexagonsFirstRow),
        backgroundColor: expectedState.backgroundColor,
        hexagonColor: expectedState.hexagonColor,
        textColor: expectedState.textColor,
        hexagonSize: String(expectedState.hexagonSize),
        containerSkewX: String(expectedState.containerSkewX),
        containerSkewY: String(expectedState.containerSkewY),
        hexagonRotation: String(expectedState.hexagonRotation),
        hexagonTransition: String(expectedState.hexagonTransition),
        hexagonScale: String(expectedState.hexagonScale),
        hexagonGap: String(expectedState.hexagonGap),
        mediaQuery_1: String(expectedState.mediaQuery_1),
        mediaQuery_2: String(expectedState.mediaQuery_2),
        mediaQuery_3: String(expectedState.mediaQuery_3),
      }),
    );

    expect(state).toEqual(expectedState);
  });
});
