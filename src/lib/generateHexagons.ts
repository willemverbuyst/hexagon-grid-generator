import { generateSingleHexagon } from "./generateSingleHexagon";

export function appendHexagons({
  fragment,
  count,
  start,
  getClassName,
}: {
  fragment: DocumentFragment;
  count: number;
  start: number;
  getClassName: (i: number) => string | undefined;
}) {
  for (let i = 0; i < count; i++) {
    const className = getClassName(i);
    fragment.appendChild(generateSingleHexagon(String(start + i), className));
  }
}

export function generateHexagons(
  numberOfHexagonsFirstRow: number,
  totalNumberOfHexagons: number,
) {
  if (numberOfHexagonsFirstRow < 1 || totalNumberOfHexagons < 1) {
    return null;
  }

  const fragment = document.createDocumentFragment();
  const totalHexagonsInFirstRow = Math.min(
    numberOfHexagonsFirstRow,
    totalNumberOfHexagons,
  );

  // Append the first row hexagons with margin-top class
  appendHexagons({
    fragment,
    count: totalHexagonsInFirstRow,
    start: 1,
    getClassName: () => "first-row__margin-top",
  });

  // If there are no more hexagons, return the fragment
  if (totalHexagonsInFirstRow === totalNumberOfHexagons) {
    return fragment;
  }

  // Append remaining hexagons with margin-left class conditionally
  const remainingHexagons = totalNumberOfHexagons - totalHexagonsInFirstRow;
  appendHexagons({
    fragment,
    count: remainingHexagons,
    start: totalHexagonsInFirstRow + 1,
    getClassName: (i) =>
      i % ((numberOfHexagonsFirstRow - 1) * 2 + 1) === 0
        ? "even-rows__margin-left"
        : undefined,
  });

  return fragment;
}
