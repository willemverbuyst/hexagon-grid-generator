import { describe, expect, it } from "vitest";
import {
  highlightCSS,
  highlightHTML,
  replaceSymbolsInHTMLForDisplay,
} from "./highlightText";

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

describe("highlightCSS", () => {
  it("highlights basic CSS selectors and properties", () => {
    const inputCSS = "div { color: red; }";
    const result = highlightCSS(inputCSS);

    const expectedOutput =
      '<span class="css-selector">div</span> <span class="css-brace">{</span> ' +
      '<span class="css-property">color</span>: ' +
      '<span class="css-value">red</span>; ' +
      '<span class="css-brace">}</span>';

    expect(result).toBe(expectedOutput);
  });

  it("highlights CSS with class and Id selectors", () => {
    const inputCSS =
      "#header { background-color: blue; } .container { margin: 10px; } span { color: #000; }";
    const result = highlightCSS(inputCSS);

    const expectedOutput =
      '<span class="css-selector">#header</span> ' +
      '<span class="css-brace">{</span> ' +
      '<span class="css-property">background-color</span>: ' +
      '<span class="css-value">blue</span>; ' +
      '<span class="css-brace">}</span> ' +
      '<span class="css-selector">.container</span> ' +
      '<span class="css-brace">{</span> ' +
      '<span class="css-property">margin</span>: ' +
      '<span class="css-value">10px</span>; ' +
      '<span class="css-brace">}</span> ' +
      '<span class="css-selector">span</span> ' +
      '<span class="css-brace">{</span> ' +
      '<span class="css-property">color</span>: ' +
      '<span class="css-value">#000</span>; ' +
      '<span class="css-brace">}</span>';

    expect(result).toBe(expectedOutput);
  });

  it("highlights multiple CSS properties", () => {
    const inputCSS = "p { font-size: 16px; line-height: 1.5; }";
    const result = highlightCSS(inputCSS);

    const expectedOutput =
      '<span class="css-selector">p</span> <span class="css-brace">{</span> ' +
      '<span class="css-property">font-size</span>: ' +
      '<span class="css-value">16px</span>; ' +
      '<span class="css-property">line-height</span>: ' +
      '<span class="css-value">1.5</span>; ' +
      '<span class="css-brace">}</span>';

    expect(result).toBe(expectedOutput);
  });

  it("handles empty string input", () => {
    const inputCSS = "";
    const result = highlightCSS(inputCSS);

    expect(result).toBe("");
  });

  it("handles nested css", () => {
    const inputCSS =
      "header { background-color: blue; h1 { font-size: 2rem; } }";
    const result = highlightCSS(inputCSS);

    const expectedOutput =
      '<span class="css-selector">header</span> ' +
      '<span class="css-brace">{</span> ' +
      '<span class="css-property">background-color</span>: ' +
      '<span class="css-value">blue</span>; ' +
      '<span class="css-selector">h1</span> ' +
      '<span class="css-brace">{</span> ' +
      '<span class="css-property">font-size</span>: ' +
      '<span class="css-value">2rem</span>; ' +
      '<span class="css-brace">}</span> ' +
      '<span class="css-brace">}</span>';

    expect(result).toBe(expectedOutput);
  });
});
