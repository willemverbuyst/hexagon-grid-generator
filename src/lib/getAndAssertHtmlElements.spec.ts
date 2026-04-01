import { describe, expect, it } from "vitest";
import {
  getAndAssertHtmlElements,
  getElementByIdAndAssert,
  htmlElementNotFoundMessage,
  ID_BG_COLOR,
  ID_BTN_CSS,
  ID_BTN_HTML,
  ID_CONTAINER_SKEW_X,
  ID_CONTAINER_SKEW_Y,
  ID_DIALOG,
  ID_DIALOG_CLOSE_BTN,
  ID_DIALOG_COPY_BTN,
  ID_DIALOG_TEXT,
  ID_DIALOG_TITLE,
  ID_HEXAGON_COLOR,
  ID_HEXAGON_CONTAINER,
  ID_HEXAGON_FIRST_ROW,
  ID_HEXAGON_GAP,
  ID_HEXAGON_ROTATION,
  ID_HEXAGON_SCALE,
  ID_HEXAGON_SIZE,
  ID_HEXAGON_TRANSITION,
  ID_MEDIA_QUERY_1,
  ID_MEDIA_QUERY_2,
  ID_MEDIA_QUERY_3,
  ID_NUMBER_OF_HEXAGONS,
  ID_TEXT_COLOR,
} from "./getAndAssertHtmlElements";

describe("htmlElementNotFoundMessage", () => {
  it("returns the correct message for a given id", () => {
    const id = "test-id";
    const expectedMessage = `HTMLElement #${id} not found!`;
    const result = htmlElementNotFoundMessage(id);
    expect(result).toBe(expectedMessage);
  });
});

describe("getElementByIdAndAssert", () => {
  it("returns the element when it exists", () => {
    document.body.innerHTML = '<div id="test-element"></div>';
    const element = getElementByIdAndAssert<HTMLDivElement>("test-element");
    expect(element).toBeInstanceOf(HTMLDivElement);
    expect(element.id).toBe("test-element");
  });

  it("throws an error when the element does not exist", () => {
    document.body.innerHTML = "";
    expect(() =>
      getElementByIdAndAssert<HTMLDivElement>("non-existent-element"),
    ).toThrowError("HTMLElement #non-existent-element not found!");
  });
});

describe("getAndAssertHtmlElements", () => {
  it("returns all elements when they exist", () => {
    document.body.innerHTML = `
      <input id="${ID_NUMBER_OF_HEXAGONS}" />
      <input id="${ID_HEXAGON_FIRST_ROW}" />
      <input id="${ID_BG_COLOR}" />
      <input id="${ID_HEXAGON_COLOR}" />
      <input id="${ID_TEXT_COLOR}" />
      <input id="${ID_HEXAGON_SIZE}" />
      <input id="${ID_CONTAINER_SKEW_X}" />
      <input id="${ID_CONTAINER_SKEW_Y}" />
      <input id="${ID_HEXAGON_ROTATION}" />
      <input id="${ID_HEXAGON_TRANSITION}" />
      <input id="${ID_HEXAGON_SCALE}" />
      <input id="${ID_HEXAGON_GAP}" />
      <input id="${ID_MEDIA_QUERY_1}" />
      <input id="${ID_MEDIA_QUERY_2}" />
      <input id="${ID_MEDIA_QUERY_3}" />
      <button id="${ID_BTN_CSS}"></button>
      <button id="${ID_BTN_HTML}"></button>
      <div id="${ID_HEXAGON_CONTAINER}"></div>
      <dialog id="${ID_DIALOG}"></dialog>
      <button id="${ID_DIALOG_CLOSE_BTN}"></button>
      <button id="${ID_DIALOG_COPY_BTN}"></button>
      <div id="${ID_DIALOG_TEXT}"></div>
      <div id="${ID_DIALOG_TITLE}"></div>
    `;

    const elements = getAndAssertHtmlElements();

    expect(elements.inputs.numberOfHexagons).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.hexagonsFirstRow).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.backgroundColor).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.hexagonColor).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.textColor).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.hexagonSize).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.containerSkewX).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.containerSkewY).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.hexagonRotation).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.hexagonTransition).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.hexagonScale).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.hexagonGap).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.mediaQuery_1).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.mediaQuery_2).toBeInstanceOf(HTMLInputElement);
    expect(elements.inputs.mediaQuery_3).toBeInstanceOf(HTMLInputElement);
    expect(elements.buttons.css).toBeInstanceOf(HTMLButtonElement);
    expect(elements.buttons.html).toBeInstanceOf(HTMLButtonElement);
    expect(elements.preview.hexagonContainer).toBeInstanceOf(HTMLDivElement);
    expect(elements.dialog.element).toBeInstanceOf(HTMLDialogElement);
    expect(elements.buttons.dialogClose).toBeInstanceOf(HTMLButtonElement);
    expect(elements.buttons.dialogCopy).toBeInstanceOf(HTMLButtonElement);
    expect(elements.dialog.text).toBeInstanceOf(HTMLDivElement);
    expect(elements.dialog.title).toBeInstanceOf(HTMLDivElement);
  });

  it("throws an error when an element does not exist", () => {
    document.body.innerHTML = ""; // No elements

    expect(() => getAndAssertHtmlElements()).toThrowError();
  });
});
