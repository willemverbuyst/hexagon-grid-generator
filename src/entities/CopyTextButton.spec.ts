import { describe, expect, it, vi } from "vitest";
import { CopyTextButton } from "./CopyTextButton";

describe("CopyTextButton", () => {
  it("should attach a click handler to the button", () => {
    const btn = document.createElement("button");
    const text = document.createElement("div");
    new CopyTextButton(btn, text);

    expect(btn.onclick).toBeDefined();
  });

  it("should copy text to clipboard when button is clicked", async () => {
    const btn = document.createElement("button");
    const text = document.createElement("div");
    text.innerText = "Sample text";
    new CopyTextButton(btn, text);

    const writeTextMock = vi
      .spyOn(navigator.clipboard, "writeText")
      .mockResolvedValue();

    btn.click();

    expect(writeTextMock).toHaveBeenCalledWith("Sample text");

    writeTextMock.mockRestore();
  });
});
