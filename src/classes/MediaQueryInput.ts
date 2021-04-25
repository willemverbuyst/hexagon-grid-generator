import { generateCSStext } from '../cssTextGenerator';
import { DOMInputElement } from './DOMInputElement';

export class MediaQueryInput extends DOMInputElement {
  constructor(id: string) {
    super(id);
    this.init();
  }

  private generateCSStextOnChange() {
    this.element.oninput = () => generateCSStext();
  }

  init() {
    this.generateCSStextOnChange();
  }
}
