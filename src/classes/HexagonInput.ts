import { DOMInputElement } from './DOMInputElement';
import {
  changeAmountFirstRow,
  generateHexagons,
} from '../generators/hexagonGenerator';

export class HexagonInputFirstRow extends DOMInputElement {
  constructor(id: string) {
    super(id);
    this.init();
  }

  private onInputChangeFirstRow() {
    this.element.oninput = (): void => changeAmountFirstRow(this.value);
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
    this.element.oninput = (): void => generateHexagons(this.value);
  }

  init() {
    this.onInputChangeHexagonAmount();
  }
}
