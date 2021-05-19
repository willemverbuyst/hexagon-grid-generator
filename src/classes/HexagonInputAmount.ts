import { DOMInputElement } from './DOMInputElement';
import { generateHexagons } from '../generators/hexagonGenerator';

export class HexagonInputAmount extends DOMInputElement {
  constructor(id: string) {
    super(id);
    this.init();
  }

  private onInputChangeHexagonAmount() {
    this.element.oninput = (): void =>
      generateHexagons(Number(this.element.value));
  }

  init() {
    this.onInputChangeHexagonAmount();
  }
}
