import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { highlightHTML } from "../lib/highlightText";
import { generateHTMLText } from "../lib/textHTML";
import { HTMLButton } from "./HTMLButton";

vi.mock("../lib/highlightText");
vi.mock("../lib/textHTML");

describe("HTMLButton", () => {
  let buttonElement: HTMLButtonElement;
  let numberOfHexagonsElement: HTMLInputElement;
  let dialogElement: HTMLDialogElement;
  let dialogTextElement: HTMLElement;
  let dialogTitle: HTMLElement;

  beforeEach(() => {
    buttonElement = document.createElement("button");
    numberOfHexagonsElement = document.createElement("input");
    dialogElement = document.createElement("dialog");
    dialogTextElement = document.createElement("div");
    dialogTitle = document.createElement("h1");

    new HTMLButton(
      buttonElement,
      numberOfHexagonsElement,
      dialogElement,
      dialogTextElement,
      dialogTitle,
    );
  });

  it('should set dialog title to "HTML" when button is clicked', () => {
    buttonElement.click();
    expect(dialogTitle.innerText).toBe("HTML");
  });

  it("should generate and highlight HTML when button is clicked", () => {
    const generatedHTML = "<div>Generated HTML</div>";
    const highlightedHTML = '<div style="color: red;">Generated HTML</div>';

    numberOfHexagonsElement.value = "5";
    (generateHTMLText as Mock).mockReturnValue(generatedHTML);
    (highlightHTML as Mock).mockReturnValue(highlightedHTML);

    buttonElement.click();

    expect(generateHTMLText).toHaveBeenCalledWith({ numberOfHexagons: 5 });
    expect(highlightHTML).toHaveBeenCalledWith(generatedHTML);
    expect(dialogTextElement.innerHTML).toBe(highlightedHTML);
  });

  it("should show dialog when button is clicked", () => {
    const showModalSpy = vi.spyOn(dialogElement, "showModal");

    buttonElement.click();

    expect(showModalSpy).toHaveBeenCalled();
  });

  it("should not show dialog if it is already open", () => {
    dialogElement.open = true;
    const showModalSpy = vi.spyOn(dialogElement, "showModal");

    buttonElement.click();

    expect(showModalSpy).not.toHaveBeenCalled();
  });
});
