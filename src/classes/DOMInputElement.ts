export class DOMInputElement {
  constructor(private id: string) {}

  element = <HTMLInputElement>document.getElementById(this.id);

  get value() {
    return Number(this.element.value);
  }

  get valueAsNumber() {
    return Number(this.element.value);
  }

  get valueAsString() {
    return this.element.value;
  }
}
