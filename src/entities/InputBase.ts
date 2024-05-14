export class InputBase {
  constructor(public element: HTMLInputElement) {}

  get valueAsNumber(): number {
    return Number(this.element.value);
  }

  get valueAsString(): string {
    return String(this.element.value);
  }
}
