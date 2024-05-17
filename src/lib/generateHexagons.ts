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
