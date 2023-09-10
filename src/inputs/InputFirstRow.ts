import { InputBase } from "./InputBase";

export class InputFirstRow {
  root = document.documentElement;
  input: InputBase;

  constructor(public hexagonFirstRowId: string) {
    this.input = new InputBase(hexagonFirstRowId);
    this.init();
  }

  private changeRoot(value: number): void {
    this.root.style.setProperty(
      "--number-of-hexagons-first-row",
      String(value),
    );
  }

  private updateOnInput(): void {
    this.input.element.oninput = (): void => {
      this.changeRoot(this.input.valueAsNumber);
      this.input.runMain();
    };
  }

  init(): void {
    this.updateOnInput();
  }
}
