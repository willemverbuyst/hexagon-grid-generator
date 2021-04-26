import { hexagonContainer, root } from '../index';
import { hexagonInput } from '../index';
import { generateCSStext } from './cssTextGenerator';
import { generateHTMLtext } from './htmlTextGenerator';
import { generateOneLine } from './oneLineGenerator';
import { generateRows } from './rowGenerator';

export const generateHexagons = (value: string): void => {
  let html: string;

  if (
    parseInt(hexagonInput.hexagonFirstRow.value) === 1 ||
    parseInt(value) <= parseInt(hexagonInput.hexagonFirstRow.value)
  ) {
    html = generateOneLine(parseInt(value));
  } else {
    html = generateRows(parseInt(value));
  }
  if (hexagonContainer) hexagonContainer.innerHTML = html;

  generateHTMLtext(parseInt(hexagonInput.hexagonAmount.value));
  generateCSStext();
};

export const changeAmountFirstRow = (value: string): void => {
  root.style.setProperty('--amount-of-hexagons', value);
  generateHexagons(hexagonInput.hexagonAmount.value);
};
