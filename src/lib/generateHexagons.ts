import { generateSingleHexagon } from "./generateSingleHexagon";

export function generateHexagons(
  numberOfHexagonsFirstRow: number,
  totalNumberOfHexagons: number,
) {
  const fragment = document.createDocumentFragment();

  if (numberOfHexagonsFirstRow < 1 || totalNumberOfHexagons < 1) {
    return null;
  }

  if (numberOfHexagonsFirstRow === 1 && totalNumberOfHexagons === 1) {
    return generateSingleHexagon(String(1));
  }

  if (totalNumberOfHexagons <= numberOfHexagonsFirstRow) {
    Array(totalNumberOfHexagons)
      .fill(0)
      .forEach((_, i) =>
        fragment.appendChild(generateSingleHexagon(String(i + 1))),
      );
    return fragment;
  }

  if (numberOfHexagonsFirstRow === 1) {
    Array(totalNumberOfHexagons)
      .fill(0)
      .forEach((_, i) =>
        fragment.appendChild(
          generateSingleHexagon(String(i + 1), "first-row__margin-top"),
        ),
      );
    return fragment;
  }

  Array(numberOfHexagonsFirstRow)
    .fill(0)
    .forEach((_, i) => {
      fragment.appendChild(
        generateSingleHexagon(String(i + 1), "first-row__margin-top"),
      );
    });

  let k = 0;
  let hexagonNumber = numberOfHexagonsFirstRow + 1;

  while (k < totalNumberOfHexagons - numberOfHexagonsFirstRow) {
    if (k === 0 || k % ((numberOfHexagonsFirstRow - 1) * 2 + 1) === 0) {
      fragment.appendChild(
        generateSingleHexagon(String(hexagonNumber), "even-rows__margin-left"),
      );
    } else {
      fragment.appendChild(generateSingleHexagon(String(hexagonNumber)));
    }
    hexagonNumber++;
    k++;
  }

  return fragment;
}
