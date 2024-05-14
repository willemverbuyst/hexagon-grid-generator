import { InputBase } from "./InputBase";

export class InputFirstRow {
  root = document.documentElement;
  input: InputBase;

  constructor(
    public inputElement: HTMLInputElement,
    public generateHexagonSection: () => void,
  ) {
    this.input = new InputBase(inputElement);
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
      this.generateHexagonSection();
    };
  }
}
