import { generateHexagons } from "../lib/generators/generateHexagons";
import type { AppElements } from "./appElements";
import type { AppState } from "./readAppState";

export function renderHexagonSection(
  elements: AppElements,
  state: AppState,
): void {
  const { hexagonContainer } = elements.preview;

  hexagonContainer.innerHTML = "";

  const hexagons = generateHexagons({
    firstRowCount: state.hexagonsFirstRow,
    totalCount: state.numberOfHexagons,
  });

  if (hexagons) {
    hexagonContainer.appendChild(hexagons);
  }
}
