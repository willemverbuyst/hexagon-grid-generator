import { generateCSStext } from '../cssTextGenerator';
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

  private addEventListenerForRootChange() {
    this.element.oninput = (): void => {
      changeRootValues(this.rootElementName, this.element.value + this.postFix);
    };
  }

  init() {
    this.addEventListenerForRootChange();
  }
}

export class RootInputGap extends DOMInputElement {
  constructor(
    id: string,
    private rootElementName: string,
    private postFix: string = ''
  ) {
    super(id);
    this.init();
  }

  onInputChangeGapWidth() {
    this.element.oninput = (): void => {
      changeRootValues(
        this.rootElementName,
        100 - parseInt(this.element.value) + this.postFix
      );
    };
  }

  init() {
    this.onInputChangeGapWidth();
  }
}

const changeRootValues = (property: string, value: string): void => {
  root.style.setProperty(property, value);
  generateCSStext();
};
