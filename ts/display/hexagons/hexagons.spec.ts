import { generateHexagons } from "./hexagons";

describe("#generateHexagons", () => {
  describe("given 0 and 0", () => {
    it("should return empty string", () => {
      expect(generateHexagons(0, 0)).toMatch("");
    });
  });

  describe("given -1 and 1", () => {
    it("should return empty string", () => {
      expect(generateHexagons(-1, 1)).toMatch("");
    });
  });

  describe("given 1 and -1", () => {
    it("should return empty string", () => {
      expect(generateHexagons(-1, 1)).toMatch("");
    });
  });

  describe("given 1 and 1", () => {
    it("should return string with hexagon #1", () => {
      expect(generateHexagons(1, 1).replace(/\s/g, "")).toMatch(
        `<div class="hexagon__outer">
					<div class="hexagon__inner">1</div>
				</div>`.replace(/\s/g, "")
      );
    });
  });

  describe("given 2 and 2", () => {
    it("should return string with hexagon #1 and #2", () => {
      expect(generateHexagons(2, 2).replace(/\s/g, "")).toMatch(
        `<div class="hexagon__outer">
					<div class="hexagon__inner">1</div>
				</div>
				<div class="hexagon__outer">
					<div class="hexagon__inner">2</div>
				</div>`.replace(/\s/g, "")
      );
    });
  });

  describe("given 1 and 3", () => {
    it("should return string with hexagon #1 and #2 and #3", () => {
      expect(generateHexagons(1, 3).replace(/\s/g, "")).toMatch(
        `<div class="hexagon__outer first-row__margin-top">
					<div class="hexagon__inner">1</div>
				</div>
				<div class="hexagon__outer first-row__margin-top">
					<div class="hexagon__inner">2</div>
				</div>
				<div class="hexagon__outer first-row__margin-top">
					<div class="hexagon__inner">3</div>
				</div>`.replace(/\s/g, "")
      );
    });
  });

  describe("given 2 and 5", () => {
    it("should return string with classes and 5 hexagons", () => {
      expect(generateHexagons(2, 5).replace(/\s/g, "")).toMatch(
        `<div class="hexagon__outer first-row__margin-top">
					<div class="hexagon__inner">1</div>
				</div>
				<div class="hexagon__outer first-row__margin-top">
					<div class="hexagon__inner">2</div>
				</div>
				<div class="hexagon__outer even-rows__margin-left">
					<div class="hexagon__inner">3</div>
				</div>
				<div class="hexagon__outer">
					<div class="hexagon__inner">4</div>
				</div>
				<div class="hexagon__outer">
					<div class="hexagon__inner">5</div>
				</div>`.replace(/\s/g, "")
      );
    });
  });
});
