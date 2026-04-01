import { describe, expect, it } from "vitest";
import { readAppState } from "./readAppState";
import { createAppElements } from "./test/createAppElements";

describe("readAppState", () => {
  it("reads and normalizes the current form state", () => {
    const state = readAppState(
      createAppElements({
        numberOfHexagons: "12",
        hexagonsFirstRow: "4",
        backgroundColor: "#111111",
        hexagonColor: "#222222",
        textColor: "#333333",
        hexagonSize: "9",
        containerSkewX: "10",
        containerSkewY: "11",
        hexagonRotation: "12",
        hexagonTransition: "1.5",
        hexagonScale: "1.1",
        hexagonGap: "15",
        mediaQuery_1: "900",
        mediaQuery_2: "700",
        mediaQuery_3: "500",
      }),
    );

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
