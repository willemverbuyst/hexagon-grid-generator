import { hexagonContainer } from '../index';
import { hexagonInput } from '../index';
import { generateOneLine } from './oneLineGenerator';
import { generateRows } from './rowGenerator';

export const generateHexagons = (value: string): void => {
  let html: string;
  hexagonContainer!.innerHTML = '';

  if (
    parseInt(hexagonInput.hexagonFirstRow.value) === 1 ||
    parseInt(value) <= parseInt(hexagonInput.hexagonFirstRow.value)
  ) {
    html = generateOneLine(parseInt(value));
  } else {
    html = generateRows(parseInt(value));
  }
  hexagonContainer!.innerHTML = html;
};
