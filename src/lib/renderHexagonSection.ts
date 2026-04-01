import type { AppElements } from "./getAndAssertHtmlElements";
import type { AppState } from "./readAppState";
import { generateHexagons } from "./generateHexagons";

export function renderHexagonSection(
  elements: AppElements,
  state: AppState,
): void {
  const { hexagonContainer } = elements.preview;

  hexagonContainer.innerHTML = "";

  const hexagons = generateHexagons(
    state.hexagonsFirstRow,
    state.numberOfHexagons,
  );

  if (hexagons) {
    hexagonContainer.appendChild(hexagons);
  }
}
