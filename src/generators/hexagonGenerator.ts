import { DOMInput, hexagonContainer, root } from '../index';
import { generateCSStext } from './cssTextGenerator';
import { generateHTMLtext } from './htmlTextGenerator';
import { generateOneRow, generateMultipleRows } from './rowsGenerator';

export const generateHexagons = (value: number): void => {
  let html: string;

  if (
    DOMInput.hexagonFirstRow.valueAsNumber === 1 ||
    value <= DOMInput.hexagonFirstRow.valueAsNumber
  ) {
    html = generateOneRow(value);
  } else {
    html = generateMultipleRows(value);
  }

  if (hexagonContainer) {
    hexagonContainer.innerHTML = html;
  }

  generateHTMLtext();
  generateCSStext();
};
