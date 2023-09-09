import {
  ID_HEXAGON_CONTAINER,
  ID_HEXAGON_FIRST_ROW,
  ID_NUMBER_OF_HEXAGONS,
} from "./constants";
import { getElementByIdAndAssert } from "./utils";

export function generateHexagon(hexagonNumber: number, className?: string) {
  return `<div class="hexagon__outer${className ? " " + className : ""}">
	  <div class="hexagon__inner">${hexagonNumber}</div>
	</div>
  `;
}

export function generateHexagons(
  hexagonsFirstRow: number,
  numberOfHexagons: number
) {
  let html = "";

  if (hexagonsFirstRow < 1 || numberOfHexagons < 1) {
    return "";
  }

  if (numberOfHexagons <= hexagonsFirstRow) {
    Array(numberOfHexagons)
      .fill(0)
      .forEach((_, i) => (html += generateHexagon(i + 1)));
    return html;
  }

  if (hexagonsFirstRow === 1 && numberOfHexagons === 1) {
    html = generateHexagon(1);
    return html;
  }

  if (hexagonsFirstRow === 1) {
    Array(numberOfHexagons)
      .fill(0)
      .forEach(
        (_, i) => (html += generateHexagon(i + 1, "first-row__margin-top"))
      );
    return html;
  }

  Array(hexagonsFirstRow)
    .fill(0)
    .forEach((_, i) => {
      html += generateHexagon(i + 1, "first-row__margin-top");
    });

  let k = 0;
  let hexagonNumber = hexagonsFirstRow + 1;
  // eslint-disable-next-line no-loops/no-loops
  while (k < numberOfHexagons - hexagonsFirstRow) {
    if (k === 0 || k % ((hexagonsFirstRow - 1) * 2 + 1) === 0) {
      html += generateHexagon(hexagonNumber, "even-rows__margin-left");
    } else {
      html += generateHexagon(hexagonNumber);
    }
    hexagonNumber++;
    k++;
  }

  return html;
}

export function generateHexagonSection() {
  const hexagonContainer = getElementByIdAndAssert(ID_HEXAGON_CONTAINER);
  const numberOfHexagonsElement = getElementByIdAndAssert(
    ID_NUMBER_OF_HEXAGONS
  ) as HTMLInputElement;
  const hexagonsFirstRowElement = getElementByIdAndAssert(
    ID_HEXAGON_FIRST_ROW
  ) as HTMLInputElement;

  hexagonContainer.innerHTML = generateHexagons(
    Number(hexagonsFirstRowElement.value),
    Number(numberOfHexagonsElement.value)
  );
}
