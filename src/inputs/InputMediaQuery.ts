import { InputBase } from "./InputBase";

export class InputMediaQuery {
  input: InputBase;

  constructor(public id: string) {
    this.input = new InputBase(id);
    this.attachInputHandler();
  }

  private attachInputHandler(): void {
    this.input.element.oninput = () => this.input.runMain();
  }
}
