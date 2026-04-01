import { beforeEach, describe, expect, it } from "vitest";
import type { AppElements } from "./appElements";
import type { AppState } from "./readAppState";
import { renderHexagonSection } from "./renderHexagonSection";
import { createAppElements } from "./test/createAppElements";

describe("renderHexagonSection", () => {
  let elements: AppElements;
  let state: AppState;

  beforeEach(() => {
    elements = createAppElements();

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
