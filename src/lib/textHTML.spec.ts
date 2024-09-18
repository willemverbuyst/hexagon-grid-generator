import { describe, expect, it } from "vitest";
import {
  generateHexagonHTML,
  generateHexagonsHTML,
  generateHTMLText,
  highlightHTML,
  replaceSymbolsInHTMLForDisplay,
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

describe("replaceSymbolsInHTMLForDisplay", () => {
  it("replaces < with &lt; and > with &gt;", () => {
    const input = "<div>Hello</div>";

    const expectedOutput = "&lt;div&gt;Hello&lt;/div&gt;";

    expect(replaceSymbolsInHTMLForDisplay(input)).toBe(expectedOutput);
  });

  it("returns the same string if no < or > is present", () => {
    const input = "Hello World!";

    const expectedOutput = "Hello World!";

    expect(replaceSymbolsInHTMLForDisplay(input)).toBe(expectedOutput);
  });

  it("handles empty string input", () => {
    const input = "";

    const expectedOutput = "";

    expect(replaceSymbolsInHTMLForDisplay(input)).toBe(expectedOutput);
  });

  it("replaces only < and > when mixed with other text", () => {
    const input = "Hello <b>world</b>!";

    const expectedOutput = "Hello &lt;b&gt;world&lt;/b&gt;!";

    expect(replaceSymbolsInHTMLForDisplay(input)).toBe(expectedOutput);
  });

  it("does not double-encode already escaped characters", () => {
    const input = "&lt;div&gt;Hello&lt;/div&gt;";

    const expectedOutput = "&lt;div&gt;Hello&lt;/div&gt;";

    expect(replaceSymbolsInHTMLForDisplay(input)).toBe(expectedOutput);
  });
});

describe("highlightHTML", () => {
  it("highlights basic HTML tags", () => {
    const inputHTML = "<div></div>";

    const expectedOutput =
      '<span class="html-symbol">&lt;</span><span class="html-element">div</span><span class="html-symbol">&gt;</span><span class="html-symbol">&lt;/</span><span class="html-element">div</span><span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
  });

  it("highlights HTML tags with a class attribute", () => {
    const inputHTML = '<div class="container"></div>';

    const expectedOutput =
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">div</span> ' +
      '<span class="html-attribute">class</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">container</span>' +
      '<span class="html-symbol">"</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">div</span>' +
      '<span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
  });

  it("highlights HTML tags with an id attribute", () => {
    const inputHTML = '<div id="main"></div>';

    const expectedOutput =
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">div</span> ' +
      '<span class="html-attribute">id</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">main</span>' +
      '<span class="html-symbol">"</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">div</span>' +
      '<span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
  });

  it("highlights HTML tags with class and id attributes", () => {
    const inputHTML = '<div class="container" id="main"></div>';

    const expectedOutput =
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">div</span> ' +
      '<span class="html-attribute">class</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">container</span>' +
      '<span class="html-symbol">"</span> ' +
      '<span class="html-attribute">id</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">main</span>' +
      '<span class="html-symbol">"</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">div</span>' +
      '<span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
  });

  it("highlights HTML tags without attributes", () => {
    const inputHTML = "<p>Hello</p>";

    const expectedOutput =
      '<span class="html-symbol">&lt;</span><span class="html-element">p</span>' +
      '<span class="html-symbol">&gt;</span>Hello' +
      '<span class="html-symbol">&lt;/</span><span class="html-element">p</span>' +
      '<span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
  });

  it("handles empty input string", () => {
    const inputHTML = "";

    expect(inputHTML).toBe("");
  });

  it("does not double-escape already escaped HTML", () => {
    const inputHTML = "&lt;div&gt;&lt;/div&gt;";

    const expectedOutput =
      '<span class="html-symbol">&lt;</span><span class="html-element">div</span><span class="html-symbol">&gt;</span><span class="html-symbol">&lt;/</span><span class="html-element">div</span><span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
  });

  it("should handle nested html", () => {
    const inputHTML =
      "<body>" +
      "<header>" +
      '<h1 class="title" id="page-title">Title</h1>' +
      "</header>" +
      "<main>" +
      "<section><p>This is a paragraph!</p></section>" +
      '<section id="list"><ul><li>List item 1</li><li>List item 2</li></ul></section>' +
      "</main></body>";

    const expectedOutput =
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">body</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">header</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">h1</span> ' +
      '<span class="html-attribute">class</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">title</span>' +
      '<span class="html-symbol">"</span> ' +
      '<span class="html-attribute">id</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">page-title</span>' +
      '<span class="html-symbol">"</span>' +
      '<span class="html-symbol">&gt;</span>Title<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">h1</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">header</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">main</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">section</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">p</span>' +
      '<span class="html-symbol">&gt;</span>This is a paragraph!<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">p</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">section</span><span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">section</span> ' +
      '<span class="html-attribute">id</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">list</span>' +
      '<span class="html-symbol">"</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">ul</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">li</span>' +
      '<span class="html-symbol">&gt;</span>List item 1<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">li</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">li</span>' +
      '<span class="html-symbol">&gt;</span>List item 2<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">li</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">ul</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">section</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">main</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">body</span>' +
      '<span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
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
