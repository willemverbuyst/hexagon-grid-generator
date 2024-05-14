import { HexagonSection } from "../HexagonSection";
import { InputBase } from "./InputBase";

export class InputMediaQuery {
  input: InputBase;

  constructor(
    public inputElement: HTMLInputElement,
    public hexagonSection: HexagonSection,
  ) {
    this.input = new InputBase(inputElement, hexagonSection);
    this.attachInputHandler();
  }

  private attachInputHandler(): void {
    this.input.element.oninput = () => this.input.hexagonSection.generate();
  }
}
