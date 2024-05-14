export class CloseDialogButton {
  constructor(
    public btn: HTMLButtonElement,
    public dialogElement: HTMLDialogElement,
  ) {
    this.attachClickHandler();
  }

  public attachClickHandler() {
    this.btn.addEventListener("click", () => {
      this.dialogElement.close();
    });
  }
}
