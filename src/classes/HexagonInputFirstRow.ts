import { DOMInputElement } from './DOMInputElement';
import { changeAmountFirstRow } from '../generators/hexagonGenerator';

export class HexagonInputFirstRow extends DOMInputElement {
  constructor(id: string) {
    super(id);
    this.init();
  }

  private onInputChangeFirstRow() {
    this.element.oninput = (): void => changeAmountFirstRow(this.valueAsNumber);
  }

  init() {
    this.onInputChangeFirstRow();
  }
}
