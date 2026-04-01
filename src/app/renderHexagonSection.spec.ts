import { beforeEach, describe, expect, it } from "vitest";
import type { AppElements } from "./appElements";
import { renderHexagonSection } from "./renderHexagonSection";
import { createAppElements } from "./test/createAppElements";
import { createAppState } from "./test/createAppState";

describe("renderHexagonSection", () => {
  let elements: AppElements;
  let state: ReturnType<typeof createAppState>;

  beforeEach(() => {
    elements = createAppElements();
    state = createAppState();
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
