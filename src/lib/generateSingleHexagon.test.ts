import { describe, expect, it } from "vitest";
import { generateSingleHexagon } from "./generateSingleHexagon";

describe("generateSingleHexagon", () => {
  it("should create a hexagon with the correct number", () => {
    const hexagonNumber = "1";
    const hexagon = generateSingleHexagon(hexagonNumber);

    const innerHexagon =
      hexagon.querySelector<HTMLDivElement>(".hexagon__inner");
    expect(innerHexagon).not.toBeNull();
    expect(innerHexagon?.innerText).toBe(hexagonNumber);
  });

  it("should add the outer hexagon class", () => {
    const hexagon = generateSingleHexagon("1");

    expect(hexagon.classList.contains("hexagon__outer")).toBe(true);
  });

  it("should add an additional class if provided", () => {
    const className = "additional-class";
    const hexagon = generateSingleHexagon("1", className);

    expect(hexagon.classList.contains(className)).toBe(true);
  });

  it("should not add an additional class if not provided", () => {
    const hexagon = generateSingleHexagon("1");

    expect(hexagon.classList.length).toBe(1);
  });
});
