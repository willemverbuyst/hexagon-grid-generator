import DOMPurify from "dompurify";
import type { AppElements } from "./appElements";

type OpenDialogInput = {
  dialogElement: HTMLDialogElement;
  titleElement: HTMLElement;
  textElement: HTMLElement;
  title: string;
  content: string;
};

export function openDialog({
  dialogElement,
  titleElement,
  textElement,
  title,
  content,
}: OpenDialogInput): void {
  if (dialogElement.open) {
    return;
  }

  titleElement.innerText = title;
  textElement.innerHTML = DOMPurify.sanitize(content);
  dialogElement.showModal();
}

export function bindDialogControls(elements: AppElements): void {
  elements.buttons.dialogClose.addEventListener("click", () => {
    elements.dialog.element.close();
  });

  elements.buttons.dialogCopy.addEventListener("click", () => {
    void navigator.clipboard.writeText(elements.dialog.text.innerText);
  });
}
