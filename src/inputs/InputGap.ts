import { HexagonSection } from "../HexagonSection";
import { InputRoot } from "./InputRoot";

export class InputGap extends InputRoot {
  constructor(
    inputElement: HTMLInputElement,
    hexagonSection: HexagonSection,
    rootElementName: string,
    postFix = "",
  ) {
    super(inputElement, hexagonSection, rootElementName, postFix);
  }

  // Different implementation of this method
  protected attachInputHandler(): void {
    this.input.element.oninput = (): void => {
      this.changeRoot(
        this.rootElementName,
        100 - this.input.valueAsNumber + this.postFix,
      );
      this.input.hexagonSection.generate();
    };
  }
}
