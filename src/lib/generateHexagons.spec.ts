import { describe, expect, it } from "vitest";
import { appendHexagons, generateHexagons } from "./generateHexagons";

describe("appendHexagons", () => {
  it("should append the correct number of hexagons to the fragment", () => {
    const fragment = document.createDocumentFragment();
    appendHexagons({
      fragment,
      count: 5,
      start: 1,
      getClassName: () => "test-class",
    });
    expect(fragment.childNodes.length).toBe(5);
  });

  it("should apply the correct class names to hexagons", () => {
    const fragment = document.createDocumentFragment();
    appendHexagons({
      fragment,
      count: 3,
      start: 1,
      getClassName: (i) => (i % 2 === 0 ? "even-class" : "odd-class"),
    });
    const hexagons = Array.from(fragment.childNodes);
    expect((hexagons[0] as Element).classList.contains("even-class")).toBe(
      true,
    );
    expect((hexagons[1] as Element).classList.contains("odd-class")).toBe(true);
    expect((hexagons[2] as Element).classList.contains("even-class")).toBe(
      true,
    );
  });

  it("should start hexagon IDs from the specified start value", () => {
    const fragment = document.createDocumentFragment();
    appendHexagons({
      fragment,
      count: 3,
      start: 5,
      getClassName: () => "test-class",
    });
    const hexagons = Array.from(fragment.childNodes);
    expect((hexagons[0] as HTMLDivElement).innerText).toBe("5");
    expect((hexagons[1] as HTMLDivElement).innerText).toBe("6");
    expect((hexagons[2] as HTMLDivElement).innerText).toBe("7");
  });
});

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
