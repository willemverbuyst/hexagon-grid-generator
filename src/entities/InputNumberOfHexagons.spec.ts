import { describe, expect, it, vi } from "vitest";
import { InputBase } from "./InputBase";
import { InputNumberOfHexagons } from "./InputNumberOfHexagons";

describe("InputNumberOfHexagons", () => {
  it("should initialize InputBase with the provided inputElement", () => {
    const inputElement = document.createElement("input");
    const generateHexagonSection = vi.fn();
    const inputNumberOfHexagons = new InputNumberOfHexagons(
      inputElement,
      generateHexagonSection,
    );

    expect(inputNumberOfHexagons.input).toBeInstanceOf(InputBase);
    expect(inputNumberOfHexagons.input.element).toBe(inputElement);
  });

  it("should call generateHexagonSection on input event", () => {
    const inputElement = document.createElement("input");
    const generateHexagonSection = vi.fn();
    new InputNumberOfHexagons(inputElement, generateHexagonSection);

    const event = new Event("input");
    inputElement.dispatchEvent(event);

    expect(generateHexagonSection).toHaveBeenCalled();
  });
});
