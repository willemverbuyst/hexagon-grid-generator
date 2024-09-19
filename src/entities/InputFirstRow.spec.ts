import { beforeEach, describe, expect, it, vi } from "vitest";
import { InputBase } from "./InputBase";
import { InputFirstRow } from "./InputFirstRow";

describe("InputFirstRow", () => {
  let inputElement: HTMLInputElement;
  let generateHexagonSection: () => void;
  let inputFirstRow: InputFirstRow;

  beforeEach(() => {
    inputElement = document.createElement("input");
    generateHexagonSection = vi.fn();
    inputFirstRow = new InputFirstRow(inputElement, generateHexagonSection);
  });

  it("should initialize InputBase with inputElement", () => {
    expect(inputFirstRow.input).toBeInstanceOf(InputBase);
    expect(inputFirstRow.input.element).toBe(inputElement);
  });

  it("should change root style property on input change", () => {
    const spy = vi.spyOn(document.documentElement.style, "setProperty");
    inputElement.value = "5";
    inputElement.dispatchEvent(new Event("input"));

    expect(spy).toHaveBeenCalledWith("--number-of-hexagons-first-row", "5");
  });

  it("should call generateHexagonSection on input change", () => {
    inputElement.value = "5";
    inputElement.dispatchEvent(new Event("input"));

    expect(generateHexagonSection).toHaveBeenCalled();
  });
});
