import { hexagonInput } from '../index';
import { generateHTMLtext } from './htmlTextGenerator';

export const generateRows = (value: number): string => {
  let html = '';
  let i = 0;

  // add css class (margin-top) to first row
  for (let j = 0; j < parseInt(hexagonInput.hexagonFirstRow.value); j++) {
    i++;
    html += `
    <div class="hexagon__outer first-row_margin-top">
      <div class="hexagon__inner">${i}
      </div>
    </div>`;
  }

  // generate rows, even rows will get a css class
  let k = 0;
  while (k < value - parseInt(hexagonInput.hexagonFirstRow.value)) {
    i++;
    if (
      k === 0 ||
      k % ((parseInt(hexagonInput.hexagonFirstRow.value) - 1) * 2 + 1) === 0
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
    k++;
  }
  generateHTMLtext(value);
  return html;
};
