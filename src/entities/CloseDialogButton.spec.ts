import { describe, expect, it, vi } from "vitest";
import { CloseDialogButton } from "./CloseDialogButton";

describe("CloseDialogButton", () => {
  it("should close the dialog when the button is clicked", () => {
    const btn = document.createElement("button");
    const dialogElement = document.createElement("dialog");

    new CloseDialogButton(btn, dialogElement);

    const closeSpy = vi.spyOn(dialogElement, "close");

    btn.click();

    expect(closeSpy).toHaveBeenCalled();
  });

  it("should attach click handler on instantiation", () => {
    const btn = document.createElement("button");
    const dialogElement = document.createElement("dialog");
    const addEventListenerSpy = vi.spyOn(btn, "addEventListener");

    new CloseDialogButton(btn, dialogElement);

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "click",
      expect.any(Function),
    );
  });
});
