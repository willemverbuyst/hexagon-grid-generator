import { highlightHTML } from "../lib/highlightText";
import { generateHTMLText } from "../lib/textHTML";

export class HTMLButton {
  constructor(
    public btn: HTMLButtonElement,
    public numberOfHexagonsElement: HTMLInputElement,
    public dialogElement: HTMLDialogElement,
    public dialogTextElement: HTMLElement,
    public dialogTitle: HTMLElement,
  ) {
    this.attachClickHandler();
  }

  public attachClickHandler() {
    this.btn.addEventListener("click", () => {
      if (!this.dialogElement.open) {
        this.dialogTitle.innerText = "HTML";
        const generatedHTML = generateHTMLText({
          numberOfHexagons: Number(this.numberOfHexagonsElement.value),
        });
        const highlightedHTML = highlightHTML(generatedHTML);
        this.dialogTextElement.innerHTML = highlightedHTML;
        this.dialogElement.showModal();
      }
    });
  }
}
