import { generateCSStext } from '../cssTextGenerator';
import { DOMInputElement } from './DOMInputElement';

class MediaQuery extends DOMInputElement {
  constructor(id: string) {
    super(id);
  }

  generateCSStextOnChange() {
    this.element.addEventListener('change', generateCSStext);
  }
}

export const mediaQuery_1 = new MediaQuery('media-query--1');
export const mediaQuery_2 = new MediaQuery('media-query--2');
export const mediaQuery_3 = new MediaQuery('media-query--3');

mediaQuery_1.generateCSStextOnChange();
mediaQuery_2.generateCSStextOnChange();
mediaQuery_3.generateCSStextOnChange();
