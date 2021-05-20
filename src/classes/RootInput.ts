import { generateCSStext } from '../generators/cssTextGenerator';
import { DOMInputElement } from './DOMInputElement';
import { root } from '../index';

export class RootInput extends DOMInputElement {
  constructor(
    id: string,
    public rootElementName: string,
    public postFix: string = ''
  ) {
    super(id);
    this.init();
  }

  protected changeRootValues(property: string, value: string): void {
    root.style.setProperty(property, value);
    generateCSStext();
  }

  protected addEventListenerForRootChange() {
    this.element.oninput = (): void => {
      this.changeRootValues(
        this.rootElementName,
        this.valueAsString + this.postFix
      );
    };
  }

  init() {
    this.addEventListenerForRootChange();
  }
}
