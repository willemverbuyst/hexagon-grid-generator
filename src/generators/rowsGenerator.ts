import { DOMInput } from '../index';
import { createHexagonHTMLString } from '../utils/helperFunctions';

export const generateOneRow = (value: number): string => {
  let html: string = '';

  for (let i = 1; i <= value; i++) {
    html += createHexagonHTMLString(i);
  }

  return html;
};

export const generateMultipleRows = (value: number): string => {
  let html: string = '';
  // Hexagon counter
  let i: number = 1;

  // generate first row
  // add css class 'margin-top' to first row
  for (i; i <= DOMInput.hexagonFirstRow.valueAsNumber; i++) {
    html += createHexagonHTMLString(i, 'first-row_margin-top');
  }

  // generate next rows
  // even rows will get a css class of 'even-rows__margin-left'
  // uneven rows will not get an extra class
  let k = 0;
  while (k < value - DOMInput.hexagonFirstRow.valueAsNumber) {
    if (
      k === 0 ||
      k % ((DOMInput.hexagonFirstRow.valueAsNumber - 1) * 2 + 1) === 0
    ) {
      html += createHexagonHTMLString(i, 'even-rows__margin-left');
    } else {
      html += createHexagonHTMLString(i);
    }
    i++;
    k++;
  }

  return html;
};
