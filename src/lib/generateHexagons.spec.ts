import { describe, expect, it } from "vitest";
import { generateHexagons } from "./generateHexagons";

describe("generateHexagons", () => {
  it("should return null if numberOfHexagonsFirstRow is less than 1", () => {
    const result = generateHexagons(0, 5);
    expect(result).toBeNull();
  });

  it("should return null if totalNumberOfHexagons is less than 1", () => {
    const result = generateHexagons(5, 0);
    expect(result).toBeNull();
  });

  it("should generate the correct number of hexagons when totalNumberOfHexagons is less than or equal to numberOfHexagonsFirstRow", () => {
    const result = generateHexagons(5, 3);
    expect(result?.childNodes.length).toBe(3);
  });

  it("should generate the correct number of hexagons when totalNumberOfHexagons is greater than numberOfHexagonsFirstRow", () => {
    const result = generateHexagons(3, 7);
    expect(result?.childNodes.length).toBe(7);
  });

  it("should apply the correct class names to hexagons", () => {
    const result = generateHexagons(3, 7);
    const hexagons = Array.from(result?.childNodes || []);
    expect(
      (hexagons[0] as Element)?.classList.contains("first-row__margin-top"),
    ).toBe(true);
    expect(
      (hexagons[3] as Element)?.classList.contains("even-rows__margin-left"),
    ).toBe(true);
  });
});
