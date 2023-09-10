import { generateHexagonSection } from "../hexagonSection";
import { getElementByIdAndAssert } from "../utils";

export class InputBase {
  element: HTMLInputElement;

  constructor(private id: string) {
    this.element = <HTMLInputElement>getElementByIdAndAssert(this.id);
  }

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
