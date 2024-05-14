import { InputRoot } from "./InputRoot";

export class InputGap extends InputRoot {
  constructor(
    inputElement: HTMLInputElement,
    rootElementName: string,
    postFix = "",
  ) {
    super(inputElement, rootElementName, postFix);
  }

  // Different implementation of this method
  protected attachInputHandler(): void {
    this.input.element.oninput = (): void => {
      this.changeRoot(
        this.rootElementName,
        100 - this.input.valueAsNumber + this.postFix,
      );
    };
  }
}
