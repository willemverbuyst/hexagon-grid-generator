export class DOMInputElement {
  constructor(private id: string) {}

  element = <HTMLInputElement>document.getElementById(this.id);

  get value() {
    return Number(this.element.value);
  }
}
