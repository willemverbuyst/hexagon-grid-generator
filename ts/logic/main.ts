import { generateHexagons } from "../display/hexagons/hexagons";
import { assertNonNullish } from "./utils";

export function generateHexagonSection() {
  const hexagonContainer = document.getElementById("hexagon__container");
  assertNonNullish(
    hexagonContainer,
    "HTMLElement #hexagonContainer not found!"
  );

  const numberOfHexagonsElement = document.getElementById(
    "hexagon-amount"
  ) as HTMLInputElement;
  assertNonNullish(
    numberOfHexagonsElement,
    "HTMLElement #numberOfHexagonsElement not found!"
  );

  const hexagonsFirstRowElement = document.getElementById(
    "hexagon-first-row"
  ) as HTMLInputElement;
  assertNonNullish(
    hexagonsFirstRowElement,
    "HTMLElement #hexagonsFirstRowElement not found!"
  );

  hexagonContainer.innerHTML = generateHexagons(
    Number(hexagonsFirstRowElement.value),
    Number(numberOfHexagonsElement.value)
  );
}
