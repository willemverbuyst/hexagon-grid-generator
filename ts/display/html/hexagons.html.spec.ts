import { generateHexagonsHTML } from "./hexagons.html";

describe("generateHexagonsHTML", () => {
  describe("given 0", () => {
    it("should return an empty string", () => {
      expect(generateHexagonsHTML(0).replace(/\s/g, "")).toMatch("");
    });
  });

  describe("given 1", () => {
    it("should return string with hexagon #1", () => {
      expect(generateHexagonsHTML(1).replace(/\s/g, "")).toMatch(
        `<div class="hexagon__outer">
					<div class="hexagon__inner">1</div>
				</div>
				`.replace(/\s/g, "")
      );
    });
  });

  describe("given 2", () => {
    it("should return string with hexagon #1 and #2", () => {
      expect(generateHexagonsHTML(2).replace(/\s/g, "")).toMatch(
        `<div class="hexagon__outer">
        <div class="hexagon__inner">1</div>
        </div>
				<div class="hexagon__outer">
					<div class="hexagon__inner">2</div>
				</div>
				`.replace(/\s/g, "")
      );
    });
  });
});
