import { DOMInputElement } from './DOMInputElement';
import { generateHexagons } from '../generators/hexagonGenerator';
import { root } from '../index';

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
