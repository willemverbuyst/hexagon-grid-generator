import { generateHexagonSection } from "../hexagonSection";

export class InputBase {
  element = <HTMLInputElement>document.getElementById(this.id);

  constructor(private id: string) {}

  get valueAsNumber(): number {
    return Number(this.element.value);
  }

  get valueAsString(): string {
    return String(this.element.value);
  }

  runMain(): void {
    generateHexagonSection();
  }
}
