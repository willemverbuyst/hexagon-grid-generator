export function assertNonNullish<T>(
  value: T,
  message: string,
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw Error(message);
  }
  return;
}

export function htmlElementNotFoundMessage(id: string) {
  return `HTMLElement #${id} not found!`;
}

export function getElementByIdAndAssert<T extends HTMLElement = HTMLElement>(
  id: string,
): T {
  const element = <T>document.getElementById(id);
  const message = htmlElementNotFoundMessage(id);
  assertNonNullish(element, message);

  return element;
}

const ID_BTN_CSS = "cssBtn";
const ID_BTN_HTML = "htmlBtn";
const ID_HEXAGON_CONTAINER = "hexagon__container";
const ID_NUMBER_OF_HEXAGONS = "numberOfHexagons";
const ID_HEXAGON_FIRST_ROW = "hexagon-first-row";
const ID_BG_COLOR = "bg-color";
const ID_HEXAGON_COLOR = "hexagon-color";
const ID_HEXAGON_SIZE = "hexagon-size";
const ID_MEDIA_QUERY_1 = "media-query--1";
const ID_MEDIA_QUERY_2 = "media-query--2";
const ID_MEDIA_QUERY_3 = "media-query--3";
const ID_TEXT_COLOR = "text-color";
const ID_CONTAINER_SKEW_X = "container-skew-X";
const ID_CONTAINER_SKEW_Y = "container-skew-Y";
const ID_HEXAGON_ROTATION = "hexagon-rotation";
const ID_HEXAGON_TRANSITION = "hexagon-transition";
const ID_HEXAGON_SCALE = "hexagon-scale";
const ID_HEXAGON_GAP = "hexagon-gap";
const ID_DIALOG = "dialog";
const ID_DIALOG_CLOSE_BTN = "dialog__close-btn";
const ID_DIALOG_COPY_BTN = "dialog__copy-btn";
const ID_DIALOG_TEXT = "dialog__text";
const ID_DIALOG_TITLE = "dialog__title";

export function getAndAssertHtmlElements() {
  const numberOfHexagons = getElementByIdAndAssert<HTMLInputElement>(
    ID_NUMBER_OF_HEXAGONS,
  );
  const hexagonsFirstRow =
    getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_FIRST_ROW);
  const backgroundColor =
    getElementByIdAndAssert<HTMLInputElement>(ID_BG_COLOR);
  const hexagonColor =
    getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_COLOR);
  const textColor = getElementByIdAndAssert<HTMLInputElement>(ID_TEXT_COLOR);
  const hexagonSize =
    getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_SIZE);
  const containerSkewX =
    getElementByIdAndAssert<HTMLInputElement>(ID_CONTAINER_SKEW_X);
  const containerSkewY =
    getElementByIdAndAssert<HTMLInputElement>(ID_CONTAINER_SKEW_Y);
  const hexagonRotation =
    getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_ROTATION);
  const hexagonTransition = getElementByIdAndAssert<HTMLInputElement>(
    ID_HEXAGON_TRANSITION,
  );
  const hexagonScale =
    getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_SCALE);
  const hexagonGap = getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_GAP);
  const mediaQuery_1 =
    getElementByIdAndAssert<HTMLInputElement>(ID_MEDIA_QUERY_1);
  const mediaQuery_2 =
    getElementByIdAndAssert<HTMLInputElement>(ID_MEDIA_QUERY_2);
  const mediaQuery_3 =
    getElementByIdAndAssert<HTMLInputElement>(ID_MEDIA_QUERY_3);
  const cssBtn = getElementByIdAndAssert<HTMLButtonElement>(ID_BTN_CSS);
  const htmlBtn = getElementByIdAndAssert<HTMLButtonElement>(ID_BTN_HTML);
  const hexagonContainer = getElementByIdAndAssert(ID_HEXAGON_CONTAINER);
  const numberOfHexagonsElement = getElementByIdAndAssert<HTMLInputElement>(
    ID_NUMBER_OF_HEXAGONS,
  );
  const hexagonsFirstRowElement =
    getElementByIdAndAssert<HTMLInputElement>(ID_HEXAGON_FIRST_ROW);
  const dialogElement = getElementByIdAndAssert<HTMLDialogElement>(ID_DIALOG);
  const dialogCloseBtn =
    getElementByIdAndAssert<HTMLButtonElement>(ID_DIALOG_CLOSE_BTN);
  const dialogCopyBtn =
    getElementByIdAndAssert<HTMLButtonElement>(ID_DIALOG_COPY_BTN);
  const dialogText = getElementByIdAndAssert(ID_DIALOG_TEXT);
  const dialogTitle = getElementByIdAndAssert(ID_DIALOG_TITLE);

  return {
    numberOfHexagons,
    hexagonsFirstRow,
    backgroundColor,
    hexagonColor,
    textColor,
    hexagonSize,
    containerSkewX,
    containerSkewY,
    hexagonRotation,
    hexagonTransition,
    hexagonScale,
    hexagonGap,
    mediaQuery_1,
    mediaQuery_2,
    mediaQuery_3,
    cssBtn,
    htmlBtn,
    hexagonContainer,
    numberOfHexagonsElement,
    hexagonsFirstRowElement,
    dialogElement,
    dialogCloseBtn,
    dialogCopyBtn,
    dialogText,
    dialogTitle,
  };
}
