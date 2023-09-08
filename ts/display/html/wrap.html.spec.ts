import { wrapHTML } from "./wrap.html";

describe("wrapHTML", () => {
  describe("given string", () => {
    it("should return string with wrapper html", () => {
      expect(wrapHTML("test").replace(/\s/g, "")).toMatch(
        `<div class="hexagon-wrapper">
          <div class="hexagon-wrapper__hexagon-container">
						test
          </div>
        </div>
				`.replace(/\s/g, "")
      );
    });
  });
});
