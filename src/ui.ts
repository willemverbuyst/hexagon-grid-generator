import {
  CSS_HIDDEN,
  CSS_VISIBLE,
  ID_BG_COLOR,
  ID_BTN_CSS,
  ID_BTN_HTML,
  ID_CONTAINER_SKEW_X,
  ID_CONTAINER_SKEW_Y,
  ID_HEXAGON_COLOR,
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
  ID_TEXT_FIELD_CSS,
  ID_TEXT_FIELD_HTML,
  POSTFIX_DEGREE,
  POSTFIX_PERCENTAGE,
  POSTFIX_SECONDS,
  POSTFIX_VW,
} from "./constants";
import {
  InputFirstRow,
  InputGap,
  InputMediaQuery,
  InputNumberOfHexagons,
  InputRoot,
} from "./inputs";
import { generateCSSText } from "./textCSS";
import { generateHTMLText } from "./textHTML";
import { getElementByIdAndAssert } from "./utils";

export const inputElements = {
  numberOfHexagons: new InputNumberOfHexagons(ID_NUMBER_OF_HEXAGONS),
  hexagonsFirstRow: new InputFirstRow(ID_HEXAGON_FIRST_ROW),
  backgroundColor: new InputRoot(ID_BG_COLOR, "--color-bg"),
  hexagonColor: new InputRoot(ID_HEXAGON_COLOR, "--color-inner-hexagon"),
  textColor: new InputRoot(ID_TEXT_COLOR, "--color-text"),
  hexagonSize: new InputRoot(
    ID_HEXAGON_SIZE,
    "--width-hexagon-outer",
    POSTFIX_VW
  ),
  containerSkewX: new InputRoot(
    ID_CONTAINER_SKEW_X,
    "--skew-X",
    POSTFIX_DEGREE
  ),
  containerSkewY: new InputRoot(
    ID_CONTAINER_SKEW_Y,
    "--skew-Y",
    POSTFIX_DEGREE
  ),
  hexagonRotation: new InputRoot(
    ID_HEXAGON_ROTATION,
    "--hover-rotation",
    POSTFIX_DEGREE
  ),
  hexagonTransition: new InputRoot(
    ID_HEXAGON_TRANSITION,
    "--hover-transition",
    POSTFIX_SECONDS
  ),
  hexagonScale: new InputRoot(ID_HEXAGON_SCALE, "--hover-scale"),
  hexagonGap: new InputGap(
    ID_HEXAGON_GAP,
    "--size-hexagon-inner",
    POSTFIX_PERCENTAGE
  ),
  mediaQuery_1: new InputMediaQuery(ID_MEDIA_QUERY_1),
  mediaQuery_2: new InputMediaQuery(ID_MEDIA_QUERY_2),
  mediaQuery_3: new InputMediaQuery(ID_MEDIA_QUERY_3),
};

export function addEventListener(id: string) {
  const btn = getElementByIdAndAssert(id);

  btn.addEventListener("click", () => handleBtnClick(id));
}

export function generateTextVersions() {
  const cssTextField = getElementByIdAndAssert(ID_TEXT_FIELD_CSS);
  const htmlTextField = getElementByIdAndAssert(ID_TEXT_FIELD_HTML);
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
  const cssTextField = getElementByIdAndAssert(ID_TEXT_FIELD_CSS);
  const htmlTextField = getElementByIdAndAssert(ID_TEXT_FIELD_HTML);
  switch (id) {
    case ID_BTN_CSS:
      htmlTextField.style.visibility = CSS_HIDDEN;
      cssTextField.style.visibility =
        cssTextField.style.visibility === CSS_VISIBLE
          ? CSS_HIDDEN
          : CSS_VISIBLE;
      break;
    case ID_BTN_HTML:
      cssTextField.style.visibility = CSS_HIDDEN;
      htmlTextField.style.visibility =
        htmlTextField.style.visibility === CSS_VISIBLE
          ? CSS_HIDDEN
          : CSS_VISIBLE;
      break;
    default:
      break;
  }
}
