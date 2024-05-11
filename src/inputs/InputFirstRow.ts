import { InputBase } from "./InputBase";

export class InputFirstRow {
  root = document.documentElement;
  input: InputBase;

  constructor(public hexagonFirstRowId: string) {
    this.input = new InputBase(hexagonFirstRowId);
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
      this.input.runMain();
    };
  }
}
