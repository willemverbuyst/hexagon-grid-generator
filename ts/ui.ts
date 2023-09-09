import {
  ID_BTN_CSS,
  ID_BTN_HTML,
  ID_TEXT_FIELD_CSS,
  ID_TEXT_FIELD_HTML,
} from "./constants";
import {
  InputBase,
  InputFirstRow,
  InputGap,
  InputMediaQuery,
  InputNumberOfHexagons,
  InputRoot,
} from "./inputs";
import { generateCSSText } from "./textCSS";
import { generateHTMLText } from "./textHTML";
import { assertNonNullish, htmlElementNotFoundMessage } from "./utils";

export const inputElements = {
  numberOfHexagons: new InputNumberOfHexagons(new InputBase("hexagon-amount")),
  hexagonsFirstRow: new InputFirstRow(new InputBase("hexagon-first-row")),
  backgroundColor: new InputRoot(new InputBase("bg-color"), "--color-bg"),
  hexagonColor: new InputRoot(
    new InputBase("hexagon-color"),
    "--color-inner-hexagon"
  ),
  textColor: new InputRoot(new InputBase("text-color"), "--color-text"),
  hexagonSize: new InputRoot(
    new InputBase("hexagon-size"),
    "--width-hexagon-outer",
    "vw"
  ),
  containerSkewX: new InputRoot(
    new InputBase("container-skew-X"),
    "--skew-X",
    "deg"
  ),
  containerSkewY: new InputRoot(
    new InputBase("container-skew-Y"),
    "--skew-Y",
    "deg"
  ),
  hexagonRotation: new InputRoot(
    new InputBase("hexagon-rotation"),
    "--hover-rotation",
    "deg"
  ),
  hexagonTransition: new InputRoot(
    new InputBase("hexagon-transition"),
    "--hover-transition",
    "s"
  ),
  hexagonScale: new InputRoot(new InputBase("hexagon-scale"), "--hover-scale"),
  hexagonGap: new InputGap(
    new InputBase("hexagon-gap"),
    "--size-hexagon-inner",
    "%"
  ),
  mediaQuery_1: new InputMediaQuery(new InputBase("media-query--1")),
  mediaQuery_2: new InputMediaQuery(new InputBase("media-query--2")),
  mediaQuery_3: new InputMediaQuery(new InputBase("media-query--3")),
};

export function addEventListener(id: string) {
  const cssBtn = document.getElementById(id);
  assertNonNullish(cssBtn, htmlElementNotFoundMessage(id));

  cssBtn.addEventListener("click", () => handleBtnClick(id));
}

function getCSSTextField() {
  const cssTextField = document.getElementById(ID_TEXT_FIELD_CSS);
  assertNonNullish(cssTextField, htmlElementNotFoundMessage(ID_TEXT_FIELD_CSS));
  return cssTextField;
}

function getHTMLTextField() {
  const htmlTextField = document.getElementById(ID_TEXT_FIELD_HTML);
  assertNonNullish(
    htmlTextField,
    htmlElementNotFoundMessage(ID_TEXT_FIELD_HTML)
  );
  return htmlTextField;
}

export function generateTextVersions() {
  const cssTextField = getCSSTextField();
  const htmlTextField = getHTMLTextField();
  const {
    backgroundColor,
    containerSkewX,
    containerSkewY,
    hexagonsFirstRow,
    hexagonColor,
    hexagonGap,
    hexagonRotation,
    hexagonScale,
    hexagonSize,
    hexagonTransition,
    mediaQuery_1,
    mediaQuery_2,
    mediaQuery_3,
    numberOfHexagons,
    textColor,
  } = inputElements;

  htmlTextField.innerText = generateHTMLText({
    numberOfHexagons: numberOfHexagons.input.valueAsNumber,
  });
  cssTextField.innerText = generateCSSText({
    backgroundColor: backgroundColor.input.valueAsString,
    containerSkewX: containerSkewX.input.valueAsNumber,
    containerSkewY: containerSkewY.input.valueAsNumber,
    hexagonsFirstRow: hexagonsFirstRow.input.valueAsNumber,
    hexagonColor: hexagonColor.input.valueAsString,
    hexagonGap: hexagonGap.input.valueAsNumber,
    hexagonRotation: hexagonRotation.input.valueAsNumber,
    hexagonScale: hexagonScale.input.valueAsNumber,
    hexagonSize: hexagonSize.input.valueAsNumber,
    hexagonTransition: hexagonTransition.input.valueAsNumber,
    mediaQuery_1: mediaQuery_1.input.valueAsNumber,
    mediaQuery_2: mediaQuery_2.input.valueAsNumber,
    mediaQuery_3: mediaQuery_3.input.valueAsNumber,
    textColor: textColor.input.valueAsString,
  });
}

function handleBtnClick(id: string) {
  generateTextVersions();
  const cssTextField = getCSSTextField();
  const htmlTextField = getHTMLTextField();
  switch (id) {
    case ID_BTN_CSS:
      htmlTextField.style.visibility = "hidden";
      cssTextField.style.visibility =
        cssTextField.style.visibility === "visible" ? "hidden" : "visible";
      break;
    case ID_BTN_HTML:
      cssTextField.style.visibility = "hidden";
      htmlTextField.style.visibility =
        htmlTextField.style.visibility === "visible" ? "hidden" : "visible";
      break;
    default:
      break;
  }
}
