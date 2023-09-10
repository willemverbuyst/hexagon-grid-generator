import { describe, expect, it } from "vitest";
import { assertNonNullish, roundToTwoDecimals } from "./utils";

describe("assertNonNullish", () => {
  it("throws an error when the value is null or undefined", () => {
    expect(() => assertNonNullish(null, "Value cannot be null")).toThrowError(
      "Value cannot be null",
    );
    expect(() =>
      assertNonNullish(undefined, "Value cannot be undefined"),
    ).toThrowError("Value cannot be undefined");
  });

  it("does not throw an error when the value is not null or undefined", () => {
    assertNonNullish(1, "Value cannot be null");
    assertNonNullish("test", "Value cannot be undefined");
    assertNonNullish({}, "Value cannot be null or undefined");
  });
});

describe("roundToTwoDecimals", () => {
  describe("given a number", () => {
    it("should return a number with two decimals", () => {
      expect(roundToTwoDecimals(9)).toBe(9);
      expect(roundToTwoDecimals(9.9111)).toBe(9.91);
      expect(roundToTwoDecimals(9.911)).toBe(9.91);
      expect(roundToTwoDecimals(9.91)).toBe(9.91);
      expect(roundToTwoDecimals(0)).toBe(0);
      expect(typeof roundToTwoDecimals(8.123)).toBe("number");
    });
  });
});
