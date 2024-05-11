import {
  ID_HEXAGON_CONTAINER,
  ID_HEXAGON_FIRST_ROW,
  ID_NUMBER_OF_HEXAGONS,
} from "./constants";
import { getElementByIdAndAssert } from "./utils";

export function generateHexagon(hexagonNumber: string, className?: string) {
  const outerHexagon = document.createElement("div");
  const innerHexagon = document.createElement("div");

  outerHexagon.classList.add("hexagon__outer");

  if (className) {
    outerHexagon.classList.add(className);
  }

  innerHexagon.classList.add("hexagon__inner");
  innerHexagon.innerText = hexagonNumber;

  outerHexagon.appendChild(innerHexagon);

  return outerHexagon;
}

export function generateHexagons(
  numberOfHexagonsFirstRow: number,
  totalNumberOfHexagons: number,
) {
  const fragment = document.createDocumentFragment();

  if (numberOfHexagonsFirstRow < 1 || totalNumberOfHexagons < 1) {
    return null;
  }

  if (numberOfHexagonsFirstRow === 1 && totalNumberOfHexagons === 1) {
    return generateHexagon(String(1));
  }

  if (totalNumberOfHexagons <= numberOfHexagonsFirstRow) {
    Array(totalNumberOfHexagons)
      .fill(0)
      .forEach((_, i) => fragment.appendChild(generateHexagon(String(i + 1))));
    return fragment;
  }

  if (numberOfHexagonsFirstRow === 1) {
    Array(totalNumberOfHexagons)
      .fill(0)
      .forEach((_, i) =>
        fragment.appendChild(
          generateHexagon(String(i + 1), "first-row__margin-top"),
        ),
      );
    return fragment;
  }

  Array(numberOfHexagonsFirstRow)
    .fill(0)
    .forEach((_, i) => {
      fragment.appendChild(
        generateHexagon(String(i + 1), "first-row__margin-top"),
      );
    });

  let k = 0;
  let hexagonNumber = numberOfHexagonsFirstRow + 1;
  // eslint-disable-next-line no-loops/no-loops
  while (k < totalNumberOfHexagons - numberOfHexagonsFirstRow) {
    if (k === 0 || k % ((numberOfHexagonsFirstRow - 1) * 2 + 1) === 0) {
      fragment.appendChild(
        generateHexagon(String(hexagonNumber), "even-rows__margin-left"),
      );
    } else {
      fragment.appendChild(generateHexagon(String(hexagonNumber)));
    }
    hexagonNumber++;
    k++;
  }

  return fragment;
}

export function generateHexagonSection() {
  const hexagonContainer = getElementByIdAndAssert(ID_HEXAGON_CONTAINER);
  const numberOfHexagonsElement = getElementByIdAndAssert<HTMLInputElement>(
    ID_NUMBER_OF_HEXAGONS,
  );
  const hexagonsFirstRowElement =
    getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_FIRST_ROW);

  hexagonContainer.innerHTML = "";
  const hexagons = generateHexagons(
    Number(hexagonsFirstRowElement.value),
    Number(numberOfHexagonsElement.value),
  );

  if (hexagons) {
    hexagonContainer.appendChild(hexagons);
  }
}
