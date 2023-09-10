import { InputBase } from "./InputBase";

export class InputMediaQuery {
  input: InputBase;

  constructor(public id: string) {
    this.input = new InputBase(id);
    this.init();
  }

  private updateOnInput(): void {
    this.input.element.oninput = () => this.input.runMain();
  }

  init(): void {
    this.updateOnInput();
  }
}
