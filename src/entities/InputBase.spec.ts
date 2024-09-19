import { describe, expect, it } from "vitest";
import { InputBase } from "./InputBase";

describe("InputBase", () => {
  it("should return the correct value as number", () => {
    const inputElement = document.createElement("input");
    inputElement.value = "123";

    const inputBase = new InputBase(inputElement);

    expect(inputBase.valueAsNumber).toBe(123);
  });

  it("should return NaN for non-numeric input when getting value as number", () => {
    const inputElement = document.createElement("input");
    inputElement.value = "abc";

    const inputBase = new InputBase(inputElement);

    expect(inputBase.valueAsNumber).toBeNaN();
  });

  it("should return the correct value as string", () => {
    const inputElement = document.createElement("input");
    inputElement.value = "test";

    const inputBase = new InputBase(inputElement);

    expect(inputBase.valueAsString).toBe("test");
  });
});
