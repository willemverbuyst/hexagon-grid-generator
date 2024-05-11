import { InputBase } from "./InputBase";

export class InputNumberOfHexagons {
  input: InputBase;

  constructor(public numberOfHexagonsId: string) {
    this.input = new InputBase(numberOfHexagonsId);
    this.attachInputHandler();
  }

  private attachInputHandler(): void {
    this.input.element.oninput = (): void => this.input.runMain();
  }
}
