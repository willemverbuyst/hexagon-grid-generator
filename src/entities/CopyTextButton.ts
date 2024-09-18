export class CopyTextButton {
  constructor(
    public btn: HTMLButtonElement,
    public text: HTMLElement,
  ) {
    this.attachClickHandler();
  }

  public attachClickHandler() {
    this.btn.addEventListener("click", () => {
      navigator.clipboard.writeText(this.text.innerText);
    });
  }
}
