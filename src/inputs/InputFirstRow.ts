import { HexagonSection } from "../HexagonSection";
import { InputBase } from "./InputBase";

export class InputFirstRow {
  root = document.documentElement;
  input: InputBase;

  constructor(
    public inputElement: HTMLInputElement,
    public hexagonSection: HexagonSection,
  ) {
    this.input = new InputBase(inputElement, hexagonSection);
    this.attachInputHandler();
  }

  private changeRoot(value: number): void {
    this.root.style.setProperty(
      "--number-of-hexagons-first-row",
      String(value),
    );
  }

  private attachInputHandler(): void {
    this.input.element.oninput = (): void => {
      this.changeRoot(this.input.valueAsNumber);
      this.input.hexagonSection.generate();
    };
  }
}
