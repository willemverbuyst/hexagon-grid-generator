import {
  generateHexagonHTML,
  generateHexagonsHTML,
  generateHTMLText,
  wrapHTML,
} from "./hexagon.html";

describe("generateHexagonHTML", () => {
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

describe("generateHTMLText", () => {
  describe("given 0", () => {
    it("should return anly the wrapper html", () => {
      expect(
        generateHTMLText({ numberOfHexagons: 0 }).replace(/\s/g, "")
      ).toMatch(
        `<div class="hexagon-wrapper">
		      <div class="hexagon-wrapper__hexagon-container">
		      </div>
		    </div>
        `.replace(/\s/g, "")
      );
    });
  });

  describe("given 1", () => {
    it("should return string with wrapper and hexagon #1", () => {
      expect(
        generateHTMLText({ numberOfHexagons: 1 }).replace(/\s/g, "")
      ).toMatch(
        `<div class="hexagon-wrapper">
          <div class="hexagon-wrapper__hexagon-container">
            <div class="hexagon__outer">
              <div class="hexagon__inner">1</div>
            </div>
          </div>
        </div>
				`.replace(/\s/g, "")
      );
    });
  });

  describe("given 2", () => {
    it("should return string with wrapper and hexagon #1 and #2", () => {
      expect(
        generateHTMLText({ numberOfHexagons: 2 }).replace(/\s/g, "")
      ).toMatch(
        `<div class="hexagon-wrapper">
		      <div class="hexagon-wrapper__hexagon-container">
            <div class="hexagon__outer">
              <div class="hexagon__inner">1</div>
            </div>
            <div class="hexagon__outer">
              <div class="hexagon__inner">2</div>
            </div>
		      </div>
		    </div>
				`.replace(/\s/g, "")
      );
    });
  });
});
