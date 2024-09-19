import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { highlightCSS } from "../lib/highlightText";
import { generateCSSText } from "../lib/textCSS";
import { CSSButton } from "./CSSButton";

vi.mock("../lib/highlightText");
vi.mock("../lib/textCSS");

describe("CSSButton", () => {
  let button: HTMLButtonElement;
  let backgroundColor: HTMLInputElement;
  let containerSkewX: HTMLInputElement;
  let containerSkewY: HTMLInputElement;
  let hexagonColor: HTMLInputElement;
  let hexagonGap: HTMLInputElement;
  let hexagonRotation: HTMLInputElement;
  let hexagonScale: HTMLInputElement;
  let hexagonsFirstRow: HTMLInputElement;
  let hexagonSize: HTMLInputElement;
  let hexagonTransition: HTMLInputElement;
  let mediaQuery_1: HTMLInputElement;
  let mediaQuery_2: HTMLInputElement;
  let mediaQuery_3: HTMLInputElement;
  let textColor: HTMLInputElement;
  let dialogElement: HTMLDialogElement;
  let dialogTextElement: HTMLElement;
  let dialogTitle: HTMLElement;
  let cssButton: CSSButton;

  beforeEach(() => {
    button = document.createElement("button");
    backgroundColor = document.createElement("input");
    containerSkewX = document.createElement("input");
    containerSkewY = document.createElement("input");
    hexagonColor = document.createElement("input");
    hexagonGap = document.createElement("input");
    hexagonRotation = document.createElement("input");
    hexagonScale = document.createElement("input");
    hexagonsFirstRow = document.createElement("input");
    hexagonSize = document.createElement("input");
    hexagonTransition = document.createElement("input");
    mediaQuery_1 = document.createElement("input");
    mediaQuery_2 = document.createElement("input");
    mediaQuery_3 = document.createElement("input");
    textColor = document.createElement("input");
    dialogElement = document.createElement("dialog");
    dialogTextElement = document.createElement("div");
    dialogTitle = document.createElement("div");

    cssButton = new CSSButton(
      button,
      backgroundColor,
      containerSkewX,
      containerSkewY,
      hexagonColor,
      hexagonGap,
      hexagonRotation,
      hexagonScale,
      hexagonsFirstRow,
      hexagonSize,
      hexagonTransition,
      mediaQuery_1,
      mediaQuery_2,
      mediaQuery_3,
      textColor,
      dialogElement,
      dialogTextElement,
      dialogTitle,
    );
  });

  it('should set dialog title to "CSS" when button is clicked', () => {
    button.click();
    expect(dialogTitle.innerText).toBe("CSS");
  });

  it("should attach click handler to button", () => {
    const spy = vi.spyOn(button, "addEventListener");
    cssButton.attachClickHandler();
    expect(spy).toHaveBeenCalledWith("click", expect.any(Function));
  });

  it("should open dialog and set innerHTML when button is clicked", () => {
    const generatedCSS = "generated css";
    const highlightedCSS = "highlighted css";
    (generateCSSText as Mock).mockReturnValue(generatedCSS);
    (highlightCSS as Mock).mockReturnValue(highlightedCSS);

    button.click();

    expect(generateCSSText).toHaveBeenCalled();
    expect(highlightCSS).toHaveBeenCalledWith(generatedCSS);
    expect(dialogTextElement.innerHTML).toBe(highlightedCSS);
    expect(dialogElement.open).toBe(true);
  });
});
