import { generateCSSText } from "../textCSS";

export class CSSButton {
  constructor(
    public btn: HTMLButtonElement,
    public cssTextField: HTMLElement,
    public htmlTextField: HTMLElement,
    public backgroundColor: HTMLInputElement,
    public containerSkewX: HTMLInputElement,
    public containerSkewY: HTMLInputElement,
    public hexagonColor: HTMLInputElement,
    public hexagonGap: HTMLInputElement,
    public hexagonRotation: HTMLInputElement,
    public hexagonScale: HTMLInputElement,
    public hexagonsFirstRow: HTMLInputElement,
    public hexagonSize: HTMLInputElement,
    public hexagonTransition: HTMLInputElement,
    public mediaQuery_1: HTMLInputElement,
    public mediaQuery_2: HTMLInputElement,
    public mediaQuery_3: HTMLInputElement,
    public textColor: HTMLInputElement,
  ) {
    this.attachClickHandler();
  }

  public attachClickHandler() {
    this.btn.addEventListener("click", () => {
      this.cssTextField.innerText = generateCSSText({
        backgroundColor: this.backgroundColor.value,
        containerSkewX: Number(this.containerSkewX.value),
        containerSkewY: Number(this.containerSkewY.value),
        hexagonsFirstRow: Number(this.hexagonsFirstRow.value),
        hexagonColor: this.hexagonColor.value,
        hexagonGap: Number(this.hexagonGap.value),
        hexagonRotation: Number(this.hexagonRotation.value),
        hexagonScale: Number(this.hexagonScale.value),
        hexagonSize: Number(this.hexagonSize.value),
        hexagonTransition: Number(this.hexagonTransition.value),
        mediaQuery_1: Number(this.mediaQuery_1.value),
        mediaQuery_2: Number(this.mediaQuery_2.value),
        mediaQuery_3: Number(this.mediaQuery_3.value),
        textColor: this.textColor.value,
      });
      this.htmlTextField.style.visibility = "hidden";
      this.cssTextField.style.visibility =
        this.cssTextField.style.visibility === "visible" ? "hidden" : "visible";
    });
  }
}
