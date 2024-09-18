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
        this.dialogTextElement.innerHTML = generateHTMLText({
          numberOfHexagons: Number(this.numberOfHexagonsElement.value),
        });
        this.dialogElement.showModal();
      }
    });
  }
}
