import { generateHexagonHTML } from "./hexagon.html";

describe("#generateHexagonHTML", () => {
  describe("given 1", () => {
    it("should return string with hexagon #1", () => {
      expect(generateHexagonHTML(1).replace(/\s/g, "")).toMatch(
        `<div class="hexagon__outer">
					<div class="hexagon__inner">1</div>
				</div>
				`.replace(/\s/g, "")
      );
    });
  });

  describe("given 2", () => {
    it("should return string with hexagon #2", () => {
      expect(generateHexagonHTML(2).replace(/\s/g, "")).toMatch(
        `<div class="hexagon__outer">
					<div class="hexagon__inner">2</div>
				</div>
				`.replace(/\s/g, "")
      );
    });
  });
});
