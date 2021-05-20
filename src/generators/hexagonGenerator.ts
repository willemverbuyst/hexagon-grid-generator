import { DOMInput, hexagonContainer } from '../index';
import { generateCSStext } from './cssTextGenerator';
import { generateHTMLtext } from './htmlTextGenerator';
import { generateOneRow, generateMultipleRows } from './rowsGenerator';

export const generateHexagons = (): void => {
  const {
    hexagonsFirstRow: { valueAsNumber: hexagonsFirstRow },
    numberOfHexagons: { valueAsNumber: numberOfHexagons },
  } = DOMInput;
  let html: string;

  if (hexagonsFirstRow === 1 || numberOfHexagons <= hexagonsFirstRow) {
    html = generateOneRow();
  } else {
    html = generateMultipleRows();
  }

  if (hexagonContainer) {
    hexagonContainer.innerHTML = html;
  }

  generateHTMLtext();
  generateCSStext();
};
