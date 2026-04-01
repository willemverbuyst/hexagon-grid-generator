import { assertNonNullish } from "../utils/assert";
import type { AppElements } from "./appElements";

export function htmlElementNotFoundMessage(id: string): string {
  return `HTMLElement #${id} not found!`;
}

export function getElementByIdAndAssert<T extends HTMLElement = HTMLElement>(
  id: string,
): T {
  const element = document.getElementById(id) as T | null;
  const message = htmlElementNotFoundMessage(id);
  assertNonNullish(element, message);

  return element;
}

export const ID_BTN_CSS = "cssBtn";
export const ID_BTN_HTML = "htmlBtn";
export const ID_HEXAGON_CONTAINER = "hexagon__container";
export const ID_NUMBER_OF_HEXAGONS = "numberOfHexagons";
export const ID_HEXAGON_FIRST_ROW = "hexagon-first-row";
export const ID_BG_COLOR = "bg-color";
export const ID_HEXAGON_COLOR = "hexagon-color";
export const ID_HEXAGON_SIZE = "hexagon-size";
export const ID_MEDIA_QUERY_1 = "media-query--1";
export const ID_MEDIA_QUERY_2 = "media-query--2";
export const ID_MEDIA_QUERY_3 = "media-query--3";
export const ID_TEXT_COLOR = "text-color";
export const ID_CONTAINER_SKEW_X = "container-skew-X";
export const ID_CONTAINER_SKEW_Y = "container-skew-Y";
export const ID_HEXAGON_ROTATION = "hexagon-rotation";
export const ID_HEXAGON_TRANSITION = "hexagon-transition";
export const ID_HEXAGON_SCALE = "hexagon-scale";
export const ID_HEXAGON_GAP = "hexagon-gap";
export const ID_DIALOG = "dialog";
export const ID_DIALOG_CLOSE_BTN = "dialog__close-btn";
export const ID_DIALOG_COPY_BTN = "dialog__copy-btn";
export const ID_DIALOG_TEXT = "dialog__text";
export const ID_DIALOG_TITLE = "dialog__title";

export function getAppElements(): AppElements {
  return {
    inputs: {
      numberOfHexagons: getElementByIdAndAssert<HTMLInputElement>(
        ID_NUMBER_OF_HEXAGONS,
      ),
      hexagonsFirstRow:
        getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_FIRST_ROW),
      backgroundColor: getElementByIdAndAssert<HTMLInputElement>(ID_BG_COLOR),
      hexagonColor: getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_COLOR),
      textColor: getElementByIdAndAssert<HTMLInputElement>(ID_TEXT_COLOR),
      hexagonSize: getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_SIZE),
      containerSkewX:
        getElementByIdAndAssert<HTMLInputElement>(ID_CONTAINER_SKEW_X),
      containerSkewY:
        getElementByIdAndAssert<HTMLInputElement>(ID_CONTAINER_SKEW_Y),
      hexagonRotation:
        getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_ROTATION),
      hexagonTransition: getElementByIdAndAssert<HTMLInputElement>(
        ID_HEXAGON_TRANSITION,
      ),
      hexagonScale: getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_SCALE),
      hexagonGap: getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_GAP),
      mediaQuery_1: getElementByIdAndAssert<HTMLInputElement>(ID_MEDIA_QUERY_1),
      mediaQuery_2: getElementByIdAndAssert<HTMLInputElement>(ID_MEDIA_QUERY_2),
      mediaQuery_3: getElementByIdAndAssert<HTMLInputElement>(ID_MEDIA_QUERY_3),
    },
    buttons: {
      css: getElementByIdAndAssert<HTMLButtonElement>(ID_BTN_CSS),
      html: getElementByIdAndAssert<HTMLButtonElement>(ID_BTN_HTML),
      dialogClose:
        getElementByIdAndAssert<HTMLButtonElement>(ID_DIALOG_CLOSE_BTN),
      dialogCopy:
        getElementByIdAndAssert<HTMLButtonElement>(ID_DIALOG_COPY_BTN),
    },
    dialog: {
      element: getElementByIdAndAssert<HTMLDialogElement>(ID_DIALOG),
      text: getElementByIdAndAssert(ID_DIALOG_TEXT),
      title: getElementByIdAndAssert(ID_DIALOG_TITLE),
    },
    preview: {
      hexagonContainer: getElementByIdAndAssert(ID_HEXAGON_CONTAINER),
    },
  };
}
