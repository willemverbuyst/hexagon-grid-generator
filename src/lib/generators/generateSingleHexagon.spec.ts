import { describe, expect, it } from "vitest";
import { HEXAGON_INNER_CLASS, HEXAGON_OUTER_CLASS } from "./constants";
import { generateSingleHexagon } from "./generateSingleHexagon";

describe("generateSingleHexagon", () => {
  it("should create a hexagon with the correct number", () => {
    const hexagon = generateSingleHexagon({ label: "1" });

    const innerHexagon = hexagon.querySelector<HTMLDivElement>(
      `.${HEXAGON_INNER_CLASS}`,
    );
    expect(innerHexagon).not.toBeNull();
    expect(innerHexagon?.innerText).toBe("1");
  });

  it("should add the outer hexagon class", () => {
    const hexagon = generateSingleHexagon({ label: "1" });

    expect(hexagon.classList.contains(HEXAGON_OUTER_CLASS)).toBe(true);
  });

  it("should add an additional class if provided", () => {
    const className = "additional-class";
    const hexagon = generateSingleHexagon({ label: "1", className });

    expect(hexagon.classList.contains(className)).toBe(true);
  });

  it("should not add an additional class if not provided", () => {
    const hexagon = generateSingleHexagon({ label: "1" });

    expect(hexagon.classList.length).toBe(1);
  });
});
