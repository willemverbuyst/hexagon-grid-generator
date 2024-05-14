import { InputBase } from "./InputBase";

export class InputMediaQuery {
  input: InputBase;

  constructor(public inputElement: HTMLInputElement) {
    this.input = new InputBase(inputElement);
  }
}
