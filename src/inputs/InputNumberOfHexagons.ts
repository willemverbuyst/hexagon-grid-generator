import { InputBase } from "./InputBase";

export class InputNumberOfHexagons {
  input: InputBase;

  constructor(
    public inputElement: HTMLInputElement,
    public generateHexagonSection: () => void,
  ) {
    this.input = new InputBase(inputElement);
    this.attachInputHandler();
  }

  private attachInputHandler(): void {
    this.input.element.oninput = (): void => this.generateHexagonSection();
  }
}
