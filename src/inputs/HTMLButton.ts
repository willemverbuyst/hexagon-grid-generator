import { generateHTMLText } from "../textHTML";

export class HTMLButton {
  constructor(
    public btn: HTMLButtonElement,
    public cssTextField: HTMLElement,
    public htmlTextField: HTMLElement,
    public numberOfHexagonsElement: HTMLInputElement,
  ) {
    this.attachClickHandler();
  }

  public attachClickHandler() {
    this.btn.addEventListener("click", () => {
      this.htmlTextField.innerText = generateHTMLText({
        numberOfHexagons: Number(this.numberOfHexagonsElement.value),
      });
      this.cssTextField.style.visibility = "hidden";
      this.htmlTextField.style.visibility =
        this.htmlTextField.style.visibility === "visible"
          ? "hidden"
          : "visible";
    });
  }
}
