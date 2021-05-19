import { DOMInput } from '../index';

export const generateRows = (value: number): string => {
  let html = '';
  // Hexagon counter
  let i = 1;

  // generate first row
  // add css class 'margin-top' to first row
  for (i; i <= DOMInput.hexagonFirstRow.valueAsNumber; i++) {
    html += `
    <div class="hexagon__outer first-row_margin-top">
      <div class="hexagon__inner">${i}
      </div>
    </div>`;
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
      html += `
        <div class="hexagon__outer even-rows__margin-left">
          <div class="hexagon__inner">${i}
          </div>
        </div>`;
    } else {
      html += `
        <div class="hexagon__outer">
          <div class="hexagon__inner">${i}
          </div>
        </div>`;
    }
    i++;
    k++;
  }

  return html;
};
