import { roundToTwoDecimals } from "./generalFunctions";

describe("#roundToTwoDecimals", () => {
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
