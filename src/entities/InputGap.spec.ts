import { beforeEach, describe, expect, it, vi } from "vitest";
import { InputGap } from "./InputGap";

describe("InputGap", () => {
  let inputElement: HTMLInputElement;
  let inputGap: InputGap;

  beforeEach(() => {
    inputElement = document.createElement("input");
    inputElement.type = "number";
    inputGap = new InputGap(inputElement, "rootElement", "%");
  });

  it("should initialize correctly", () => {
    expect(inputGap).toBeInstanceOf(InputGap);
    expect(inputGap["rootElementName"]).toBe("rootElement");
    expect(inputGap["postFix"]).toBe("%");
  });

  it("should attach input handler and change root on input", () => {
    // this any is needed because the method is protected
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const changeRootSpy = vi.spyOn(inputGap as any, "changeRoot");
    inputElement.value = "50";
    inputElement.dispatchEvent(new Event("input"));

    expect(changeRootSpy).toHaveBeenCalledWith("rootElement", "50%");
  });

  it("should handle input correctly with different values", () => {
    // this any is needed because the method is protected
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const changeRootSpy = vi.spyOn(inputGap as any, "changeRoot");

    inputElement.value = "30";
    inputElement.dispatchEvent(new Event("input"));
    expect(changeRootSpy).toHaveBeenCalledWith("rootElement", "70%");

    inputElement.value = "70";
    inputElement.dispatchEvent(new Event("input"));
    expect(changeRootSpy).toHaveBeenCalledWith("rootElement", "30%");
  });
});
