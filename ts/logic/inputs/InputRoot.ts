import { InputBase } from "./InputBase";

export class InputRoot {
  root = document.documentElement;

  constructor(
    public input: InputBase,
    public rootElementName: string,
    public postFix: string = ""
  ) {
    this.init();
  }

  protected changeRoot(property: string, value: string): void {
    this.root.style.setProperty(property, value);
  }

  protected updateOnInput(): void {
    this.input.element.oninput = (): void => {
      this.changeRoot(
        this.rootElementName,
        this.input.valueAsString + this.postFix
      );
      this.input.runMain();
    };
  }

  init(): void {
    this.updateOnInput();
  }
}
