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

  changeRootValues(property: string, value: string): void {
    root.style.setProperty(property, value);
    generateCSStext();
  }

  addEventListenerForRootChange() {
    this.element.oninput = (): void => {
      this.changeRootValues(this.rootElementName, this.value + this.postFix);
    };
  }

  init() {
    this.addEventListenerForRootChange();
  }
}

export class RootInputGap extends RootInput {
  constructor(id: string, rootElementName: string, postFix: string = '') {
    super(id, rootElementName, postFix);
  }

  // Different implementation of this method
  addEventListenerForRootChange() {
    this.element.oninput = (): void => {
      this.changeRootValues(
        this.rootElementName,
        100 - this.value + this.postFix
      );
    };
  }
}
