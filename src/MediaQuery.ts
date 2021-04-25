import { generateCSStext } from './cssTextGenerator';

export class MediaQuery {
  constructor(private id: string) {}

  element = <HTMLInputElement>document.getElementById(this.id);

  get value() {
    return this.element.value;
  }

  generateCSStextOnChange() {
    this.element.addEventListener('change', generateCSStext);
  }
}
