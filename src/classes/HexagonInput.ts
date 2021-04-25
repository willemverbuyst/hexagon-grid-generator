import { DOMInputElement } from './DOMInputElement';
import { generateHexagons } from '../generators/hexagonGenerator';
import { hexagonInput, root } from '../index';

export class HexagonInputFirstRow extends DOMInputElement {
  constructor(id: string) {
    super(id);
    this.init();
  }

  private onInputChangeFirstRow() {
    this.element.oninput = (): void => changeAmountFirstRow(this.element.value);
  }

  init() {
    this.onInputChangeFirstRow();
  }
}

export class HexagonInputAmount extends DOMInputElement {
  constructor(id: string) {
    super(id);
    this.init();
  }

  private onInputChangeHexagonAmount() {
    this.element.oninput = (): void => generateHexagons(this.element.value);
  }

  init() {
    this.onInputChangeHexagonAmount();
  }
}

const changeAmountFirstRow = (value: string): void => {
  root.style.setProperty('--amount-of-hexagons', value);
  generateHexagons(hexagonInput.hexagonAmount.value);
};
