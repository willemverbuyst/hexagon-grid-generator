import { describe, expect, it } from "vitest";
import {
  generateHexagonHTML,
  generateHexagonsHTML,
  generateHTMLText,
  wrapHTML,
} from "./textHTML";

describe("generateHexagonHTML", () => {
  describe("given 2", () => {
    it("should return string with hexagon #2", () => {
      expect(generateHexagonHTML(2).replace(/\s/g, "")).toMatch(
        `<div class="hexagon__outer">
					<div class="hexagon__inner">2</div>
				</div>
				`.replace(/\s/g, ""),
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
				`.replace(/\s/g, ""),
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
				`.replace(/\s/g, ""),
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
				`.replace(/\s/g, ""),
      );
    });
  });
});

describe("generateHTMLText", () => {
  describe("given 0", () => {
    it("should return the wrapper html", () => {
      expect(
        generateHTMLText({ numberOfHexagons: 0 }).replace(/\s/g, ""),
      ).toMatch(
        (
          '<span class="html-symbol">&lt;</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-attribute">class</span>' +
          '<span class="html-symbol">="</span>' +
          '<span class="html-attribute">hexagon-wrapper</span>' +
          '<span class="html-symbol">"</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-attribute">class</span>' +
          '<span class="html-symbol">="</span>' +
          '<span class="html-attribute">hexagon-wrapper__hexagon-container</span>' +
          '<span class="html-symbol">"</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;/</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;/</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-symbol">&gt;</span>'
        ).replace(/\s/g, ""),
      );
    });
  });

  describe("given 1", () => {
    it("should return string with wrapper and hexagon #1", () => {
      expect(
        generateHTMLText({ numberOfHexagons: 1 }).replace(/\s/g, ""),
      ).toMatch(
        (
          '<span class="html-symbol">&lt;</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-attribute">class</span>' +
          '<span class="html-symbol">="</span>' +
          '<span class="html-attribute">hexagon-wrapper</span>' +
          '<span class="html-symbol">"</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-attribute">class</span>' +
          '<span class="html-symbol">="</span>' +
          '<span class="html-attribute">hexagon-wrapper__hexagon-container</span>' +
          '<span class="html-symbol">"</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-attribute">class</span>' +
          '<span class="html-symbol">="</span>' +
          '<span class="html-attribute">hexagon__outer</span>' +
          '<span class="html-symbol">"</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-attribute">class</span>' +
          '<span class="html-symbol">="</span>' +
          '<span class="html-attribute">hexagon__inner</span>' +
          '<span class="html-symbol">"</span>' +
          '<span class="html-symbol">&gt;</span>1' +
          '<span class="html-symbol">&lt;/</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;/</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;/</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;/</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-symbol">&gt;</span>'
        ).replace(/\s/g, ""),
      );
    });
  });

  describe("given 2", () => {
    it("should return string with wrapper and hexagon #1 and #2", () => {
      expect(
        generateHTMLText({ numberOfHexagons: 2 }).replace(/\s/g, ""),
      ).toMatch(
        (
          '<span class="html-symbol">&lt;</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-attribute">class</span>' +
          '<span class="html-symbol">="</span>' +
          '<span class="html-attribute">hexagon-wrapper</span>' +
          '<span class="html-symbol">"</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-attribute">class</span>' +
          '<span class="html-symbol">="</span>' +
          '<span class="html-attribute">hexagon-wrapper__hexagon-container</span>' +
          '<span class="html-symbol">"</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-attribute">class</span>' +
          '<span class="html-symbol">="</span>' +
          '<span class="html-attribute">hexagon__outer</span>' +
          '<span class="html-symbol">"</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-attribute">class</span>' +
          '<span class="html-symbol">="</span>' +
          '<span class="html-attribute">hexagon__inner</span>' +
          '<span class="html-symbol">"</span>' +
          '<span class="html-symbol">&gt;</span>1' +
          '<span class="html-symbol">&lt;/</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;/</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-attribute">class</span>' +
          '<span class="html-symbol">="</span>' +
          '<span class="html-attribute">hexagon__outer</span>' +
          '<span class="html-symbol">"</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-attribute">class</span>' +
          '<span class="html-symbol">="</span>' +
          '<span class="html-attribute">hexagon__inner</span>' +
          '<span class="html-symbol">"</span>' +
          '<span class="html-symbol">&gt;</span>2' +
          '<span class="html-symbol">&lt;/</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;/</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;/</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-symbol">&gt;</span>' +
          '<span class="html-symbol">&lt;/</span>' +
          '<span class="html-element">div</span>' +
          '<span class="html-symbol">&gt;</span>'
        ).replace(/\s/g, ""),
      );
    });
  });
});
