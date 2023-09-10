import { InputBase } from "./InputBase";

export class InputNumberOfHexagons {
  input: InputBase;

  constructor(public numberOfHexagonsId: string) {
    this.input = new InputBase(numberOfHexagonsId);
    this.init();
  }

  private updateOnInput(): void {
    this.input.element.oninput = (): void => this.input.runMain();
  }

  init(): void {
    this.updateOnInput();
  }
}
