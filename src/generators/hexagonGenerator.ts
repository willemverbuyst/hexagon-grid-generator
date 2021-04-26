import { DOMInput, hexagonContainer, root } from '../index';
import { generateCSStext } from './cssTextGenerator';
import { generateHTMLtext } from './htmlTextGenerator';
import { generateOneLine } from './oneLineGenerator';
import { generateRows } from './rowsGenerator';

export const generateHexagons = (value: number): void => {
  let html: string;

  if (
    DOMInput.hexagonFirstRow.value === 1 ||
    value <= DOMInput.hexagonFirstRow.value
  ) {
    html = generateOneLine(value);
  } else {
    html = generateRows(value);
  }
  if (hexagonContainer) hexagonContainer.innerHTML = html;

  generateHTMLtext(DOMInput.hexagonAmount.value);
  generateCSStext();
};

export const changeAmountFirstRow = (value: number): void => {
  root.style.setProperty('--amount-of-hexagons', String(value));
  generateHexagons(DOMInput.hexagonAmount.value);
};
