import { beforeEach, describe, expect, it } from "vitest";
import type { AppElements } from "./getAndAssertHtmlElements";
import { renderHexagonSection } from "./renderHexagonSection";
import type { AppState } from "./readAppState";

describe("renderHexagonSection", () => {
  let elements: AppElements;
  let state: AppState;

  beforeEach(() => {
    elements = {
      inputs: {
        numberOfHexagons: document.createElement("input"),
        hexagonsFirstRow: document.createElement("input"),
        backgroundColor: document.createElement("input"),
        hexagonColor: document.createElement("input"),
        textColor: document.createElement("input"),
        hexagonSize: document.createElement("input"),
        containerSkewX: document.createElement("input"),
        containerSkewY: document.createElement("input"),
        hexagonRotation: document.createElement("input"),
        hexagonTransition: document.createElement("input"),
        hexagonScale: document.createElement("input"),
        hexagonGap: document.createElement("input"),
        mediaQuery_1: document.createElement("input"),
        mediaQuery_2: document.createElement("input"),
        mediaQuery_3: document.createElement("input"),
      },
      buttons: {
        css: document.createElement("button"),
        html: document.createElement("button"),
        dialogClose: document.createElement("button"),
        dialogCopy: document.createElement("button"),
      },
      dialog: {
        element: document.createElement("dialog"),
        text: document.createElement("div"),
        title: document.createElement("div"),
      },
      preview: {
        hexagonContainer: document.createElement("div"),
      },
    };

    state = {
      numberOfHexagons: 5,
      hexagonsFirstRow: 3,
      backgroundColor: "#111111",
      hexagonColor: "#222222",
      textColor: "#333333",
      hexagonSize: 9,
      containerSkewX: 10,
      containerSkewY: 11,
      hexagonRotation: 12,
      hexagonTransition: 1.5,
      hexagonScale: 1.1,
      hexagonGap: 15,
      mediaQuery_1: 900,
      mediaQuery_2: 700,
      mediaQuery_3: 500,
    };
  });

  it("clears the container and renders the current hexagons", () => {
    elements.preview.hexagonContainer.innerHTML = "<div>old</div>";

    renderHexagonSection(elements, state);

    expect(elements.preview.hexagonContainer.childElementCount).toBe(5);
    expect(elements.preview.hexagonContainer.textContent).not.toContain("old");
  });

  it("renders nothing for invalid counts", () => {
    renderHexagonSection(elements, {
      ...state,
      numberOfHexagons: 0,
    });

    expect(elements.preview.hexagonContainer.childElementCount).toBe(0);
  });
});
