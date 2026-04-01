import { describe, expect, it } from "vitest";
import { assertNonNullish } from "./assert";

describe("assertNonNullish", () => {
  it("throws an error when the value is null or undefined", () => {
    expect(() => assertNonNullish(null, "Value cannot be null")).toThrow(
      Error("Value cannot be null"),
    );
    expect(() =>
      assertNonNullish(undefined, "Value cannot be undefined"),
    ).toThrow(Error("Value cannot be undefined"));
  });

  it("does not throw an error when the value is not null or undefined", () => {
    assertNonNullish(1, "Value cannot be null");
    assertNonNullish("test", "Value cannot be undefined");
    assertNonNullish({}, "Value cannot be null or undefined");
  });
});
