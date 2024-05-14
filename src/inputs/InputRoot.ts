import { HexagonSection } from "../HexagonSection";
import { InputBase } from "./InputBase";

export class InputRoot {
  root = document.documentElement;
  input: InputBase;

  constructor(
    public inputElement: HTMLInputElement,
    public hexagonSection: HexagonSection,
    public rootElementName: string,
    public postFix: string = "",
  ) {
    this.input = new InputBase(inputElement, hexagonSection);
    this.attachInputHandler();
  }

  protected changeRoot(property: string, value: string): void {
    this.root.style.setProperty(property, value);
  }

  protected attachInputHandler(): void {
    this.input.element.oninput = (): void => {
      this.changeRoot(
        this.rootElementName,
        this.input.valueAsString + this.postFix,
      );
      this.input.hexagonSection.generate();
    };
  }
}
