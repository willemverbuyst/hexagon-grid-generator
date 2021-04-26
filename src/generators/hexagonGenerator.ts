import { hexagonContainer, root } from '../index';
import { hexagonInput } from '../index';
import { generateCSStext } from './cssTextGenerator';
import { generateHTMLtext } from './htmlTextGenerator';
import { generateOneLine } from './oneLineGenerator';
import { generateRows } from './rowGenerator';

export const generateHexagons = (value: number): void => {
  let html: string;

  if (
    hexagonInput.hexagonFirstRow.value === 1 ||
    value <= hexagonInput.hexagonFirstRow.value
  ) {
    html = generateOneLine(value);
  } else {
    html = generateRows(value);
  }
  if (hexagonContainer) hexagonContainer.innerHTML = html;

  generateHTMLtext(hexagonInput.hexagonAmount.value);
  generateCSStext();
};

export const changeAmountFirstRow = (value: string): void => {
  root.style.setProperty('--amount-of-hexagons', value);
  generateHexagons(hexagonInput.hexagonAmount.value);
};
