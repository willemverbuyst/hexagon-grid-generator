import { beforeEach, describe, expect, it, vi } from "vitest";
import { InputBase } from "./InputBase";
import { InputRoot } from "./InputRoot";

describe("InputRoot", () => {
  let inputElement: HTMLInputElement;
  let inputRoot: InputRoot;

  beforeEach(() => {
    inputElement = document.createElement("input");
    inputRoot = new InputRoot(inputElement, "--test-property", "px");
  });

  it("should initialize input with InputBase instance", () => {
    expect(inputRoot.input).toBeInstanceOf(InputBase);
  });

  it("should change root property on input event", () => {
    inputElement.value = "10";
    const event = new Event("input");
    inputElement.dispatchEvent(event);

    expect(
      document.documentElement.style.getPropertyValue("--test-property"),
    ).toBe("10px");
  });

  it("should call changeRoot with correct parameters", () => {
    // this any is needed because the method is protected
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const changeRootSpy = vi.spyOn(inputRoot as any, "changeRoot");
    inputElement.value = "20";
    const event = new Event("input");
    inputElement.dispatchEvent(event);

    expect(changeRootSpy).toHaveBeenCalledWith("--test-property", "20px");
  });
});
