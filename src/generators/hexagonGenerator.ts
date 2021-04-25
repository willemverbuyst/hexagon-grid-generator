import { hexagonContainer } from '../index';
import { hexagonFirstRow } from '../classes/HexagonInput';
import { generateOneLine } from './oneLineGenerator';
import { generateRows } from './rowGenerator';

export const generateHexagons = (value: string): void => {
  let html: string;
  hexagonContainer!.innerHTML = '';

  if (
    parseInt(hexagonFirstRow.value) === 1 ||
    parseInt(value) <= parseInt(hexagonFirstRow.value)
  ) {
    html = generateOneLine(parseInt(value));
  } else {
    html = generateRows(parseInt(value));
  }
  hexagonContainer!.innerHTML = html;
};
