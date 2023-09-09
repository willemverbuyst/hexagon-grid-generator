import { InputRoot } from "./InputRoot";

export class InputGap extends InputRoot {
  constructor(id: string, rootElementName: string, postFix = "") {
    super(id, rootElementName, postFix);
  }

  // Different implementation of this method
  protected updateOnInput(): void {
    this.input.element.oninput = (): void => {
      this.changeRoot(
        this.rootElementName,
        100 - this.input.valueAsNumber + this.postFix
      );
      this.input.runMain();
    };
  }
}
