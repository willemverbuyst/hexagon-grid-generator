import { highlightCSS } from "../lib/highlightText";
import { generateCSSText } from "../lib/textCSS";

export class CSSButton {
  constructor(
    public btn: HTMLButtonElement,
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
    public dialogElement: HTMLDialogElement,
    public dialogTextElement: HTMLElement,
    public dialogTitle: HTMLElement,
  ) {
    this.attachClickHandler();
  }

  public attachClickHandler() {
    this.btn.addEventListener("click", () => {
      if (!this.dialogElement.open) {
        this.dialogTitle.innerText = "CSS";
        const generatedCSS = generateCSSText({
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
        const highlightedCSS = highlightCSS(generatedCSS);
        this.dialogTextElement.innerHTML = highlightedCSS;
        this.dialogElement.showModal();
      }
    });
  }
}
