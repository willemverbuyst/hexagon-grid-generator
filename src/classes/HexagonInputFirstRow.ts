import { DOMInputElement } from './DOMInputElement';
import { DOMInput, root } from '../index';
import { generateHexagons } from '../generators/hexagonGenerator';

export class HexagonInputFirstRow extends DOMInputElement {
  constructor(id: string) {
    super(id);
    this.init();
  }

  changeAmountFirstRow(value: number) {
    root.style.setProperty('--amount-of-hexagons', String(value));
    generateHexagons(DOMInput.hexagonAmount.valueAsNumber);
  }

  private onInputChangeFirstRow() {
    this.element.oninput = (): void =>
      this.changeAmountFirstRow(this.valueAsNumber);
  }

  init() {
    this.onInputChangeFirstRow();
  }
}
