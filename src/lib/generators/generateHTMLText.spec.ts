import { describe, expect, it } from "vitest";
import {
  buildHtmlExport,
  generateHtmlText,
  generateHexagonListMarkupText,
  generateHexagonMarkupText,
  generateHexagonWrapperMarkupText,
  generateHexagonHTML,
  generateHexagonsHTML,
  generateHTMLText,
  wrapHTML,
} from "./generateHTMLText";
import {
  HEXAGON_CONTAINER_CLASS,
  HEXAGON_INNER_CLASS,
  HEXAGON_OUTER_CLASS,
  HEXAGON_WRAPPER_CLASS,
} from "./constants";

function parseMarkup(markup: string): HTMLDivElement {
  const root = document.createElement("div");
  root.innerHTML = markup;

  return root;
}

describe("generateHexagonHTML", () => {
  it("returns markup for one numbered hexagon", () => {
    const root = parseMarkup(generateHexagonHTML(2));
    const outer = root.querySelector(`.${HEXAGON_OUTER_CLASS}`);
    const inner = root.querySelector(`.${HEXAGON_INNER_CLASS}`);

    expect(outer).not.toBeNull();
    expect(inner?.textContent).toBe("2");
  });
});

describe("generateHexagonsHTML", () => {
  it("returns an empty string for zero hexagons", () => {
    expect(generateHexagonsHTML(0)).toBe("");
  });

  it("returns numbered hexagons in sequence", () => {
    const root = parseMarkup(generateHexagonsHTML(2));
    const labels = Array.from(
      root.querySelectorAll(`.${HEXAGON_INNER_CLASS}`),
      (element) => element.textContent,
    );

    expect(labels).toEqual(["1", "2"]);
  });
});

describe("wrapHTML", () => {
  it("wraps html in the preview container", () => {
    const root = parseMarkup(wrapHTML("test"));
    const wrapper = root.querySelector(`.${HEXAGON_WRAPPER_CLASS}`);
    const container = root.querySelector(`.${HEXAGON_CONTAINER_CLASS}`);

    expect(wrapper).not.toBeNull();
    expect(container?.textContent).toContain("test");
  });
});

describe("buildHtmlExport", () => {
  it("builds the html export from typed input", () => {
    expect(buildHtmlExport({ numberOfHexagons: 1 })).toBe(
      generateHTMLText({ numberOfHexagons: 1 }),
    );
  });
});

describe("generateHTMLText", () => {
  it("returns the wrapper without hexagons for zero items", () => {
    const root = parseMarkup(generateHTMLText({ numberOfHexagons: 0 }));
    expect(root.querySelector(`.${HEXAGON_WRAPPER_CLASS}`)).not.toBeNull();
    expect(root.querySelectorAll(`.${HEXAGON_OUTER_CLASS}`)).toHaveLength(0);
  });

  it("returns wrapper markup with numbered hexagons", () => {
    const root = parseMarkup(generateHTMLText({ numberOfHexagons: 2 }));
    const labels = Array.from(
      root.querySelectorAll(`.${HEXAGON_INNER_CLASS}`),
      (element) => element.textContent,
    );

    expect(labels).toEqual(["1", "2"]);
  });
});

describe("preferred html generator names", () => {
  it("keeps the newer public names aligned with legacy aliases", () => {
    expect(generateHtmlText({ numberOfHexagons: 2 })).toBe(
      generateHTMLText({ numberOfHexagons: 2 }),
    );
    expect(generateHexagonMarkupText(1)).toBe(generateHexagonHTML(1));
    expect(generateHexagonListMarkupText(2)).toBe(generateHexagonsHTML(2));
    expect(generateHexagonWrapperMarkupText("test")).toBe(wrapHTML("test"));
  });
});
