import { hexagonContainer, root } from '../index';
import { generateHTMLtext } from '../htmlTextGenerator';
import { DOMInputElement } from './DOMInputElement';

export class HexagonInputElement extends DOMInputElement {
  constructor(id: string) {
    super(id);
  }

  onInputChangeFirstRow() {
    this.element.oninput = (): void => changeAmountFirstRow(this.element.value);
  }

  onInputChangeHexagonAmount() {
    this.element.oninput = (): void => generateHexagons(this.element.value);
  }
}

export const hexagonFirstRow = new HexagonInputElement('hexagon-first-row');
export const hexagonAmount = new HexagonInputElement('hexagon-amount');

hexagonFirstRow.onInputChangeFirstRow();
hexagonAmount.onInputChangeHexagonAmount();

const changeAmountFirstRow = (value: string): void => {
  root.style.setProperty('--amount-of-hexagons', value);
  generateHexagons(hexagonAmount.value);
};

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

const generateOneLine = (value: number): string => {
  let html_firstRow = '';
  for (let i = 0; i < value; i++) {
    html_firstRow += `
    <div class="hexagon__outer first-row_margin-top">
      <div class="hexagon__inner">${i + 1}
      </div>
    </div>`;
  }
  generateHTMLtext(value);
  return html_firstRow;
};

const generateRows = (value: number): string => {
  let html = '';
  let i = 0;

  // add css class (margin-top) to first row
  for (let j = 0; j < parseInt(hexagonFirstRow.value); j++) {
    i++;
    html += `
    <div class="hexagon__outer first-row_margin-top">
      <div class="hexagon__inner">${i}
      </div>
    </div>`;
  }

  // generate rows, even rows will get a css class
  let k = 0;
  while (k < value - parseInt(hexagonFirstRow.value)) {
    i++;
    if (k === 0 || k % ((parseInt(hexagonFirstRow.value) - 1) * 2 + 1) === 0) {
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
