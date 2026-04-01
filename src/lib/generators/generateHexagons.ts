import { generateSingleHexagon } from "./generateSingleHexagon";
import {
  EVEN_ROWS_MARGIN_LEFT_CLASS,
  FIRST_ROW_MARGIN_TOP_CLASS,
} from "./constants";

export type GenerateHexagonsInput = {
  firstRowCount: number;
  totalCount: number;
};

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
    fragment.appendChild(
      generateSingleHexagon({
        label: String(start + i),
        className,
      }),
    );
  }
}

export function generateHexagons({
  firstRowCount,
  totalCount,
}: GenerateHexagonsInput) {
  if (firstRowCount < 1 || totalCount < 1) {
    return null;
  }

  const fragment = document.createDocumentFragment();
  const totalHexagonsInFirstRow = Math.min(
    firstRowCount,
    totalCount,
  );

  appendHexagons({
    fragment,
    count: totalHexagonsInFirstRow,
    start: 1,
    getClassName: () => FIRST_ROW_MARGIN_TOP_CLASS,
  });

  if (totalHexagonsInFirstRow === totalCount) {
    return fragment;
  }

  const remainingHexagons = totalCount - totalHexagonsInFirstRow;
  appendHexagons({
    fragment,
    count: remainingHexagons,
    start: totalHexagonsInFirstRow + 1,
    getClassName: (i) =>
      i % ((firstRowCount - 1) * 2 + 1) === 0
        ? EVEN_ROWS_MARGIN_LEFT_CLASS
        : undefined,
  });

  return fragment;
}
