import { HexagonSection } from "./HexagonSection";
import { getAndAssertHtmlElements } from "./htmlElements";
import { CSSButton } from "./inputs/CSSButton";
import { HTMLButton } from "./inputs/HTMLButton";
import { InputFirstRow } from "./inputs/InputFirstRow";
import { InputGap } from "./inputs/InputGap";
import { InputMediaQuery } from "./inputs/InputMediaQuery";
import { InputNumberOfHexagons } from "./inputs/InputNumberOfHexagons";
import { InputRoot } from "./inputs/InputRoot";

import "./style.css";

const POSTFIX_PERCENTAGE = "%";
const POSTFIX_DEGREE = "deg";
const POSTFIX_VW = "vw";
const POSTFIX_SECONDS = "s";

// eslint-disable-next-line no-console
console.info("🚀 Running the app!");

const {
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
  htmlBtn,
  cssBtn,
  cssTextField,
  htmlTextField,
  hexagonContainer,
  hexagonsFirstRowElement,
  numberOfHexagonsElement,
} = getAndAssertHtmlElements();

function generateHexagonSection() {
  const hexagonSection = new HexagonSection(
    hexagonContainer,
    numberOfHexagonsElement,
    hexagonsFirstRowElement,
  );

  return function () {
    hexagonSection.generate();
  };
}

// initial run
generateHexagonSection()();

new InputFirstRow(hexagonsFirstRow, generateHexagonSection());
new InputNumberOfHexagons(numberOfHexagons, generateHexagonSection());
new InputRoot(backgroundColor, "--color-bg");
new InputRoot(hexagonColor, "--color-inner-hexagon");
new InputRoot(textColor, "--color-text");
new InputRoot(hexagonSize, "--width-hexagon-outer", POSTFIX_VW);
new InputRoot(containerSkewX, "--skew-X", POSTFIX_DEGREE);
new InputRoot(containerSkewY, "--skew-Y", POSTFIX_DEGREE);
new InputRoot(hexagonRotation, "--hover-rotation", POSTFIX_DEGREE);
new InputRoot(hexagonTransition, "--hover-transition", POSTFIX_SECONDS);
new InputRoot(hexagonScale, "--hover-scale");
new InputGap(hexagonGap, "--size-hexagon-inner", POSTFIX_PERCENTAGE);
new InputMediaQuery(mediaQuery_1);
new InputMediaQuery(mediaQuery_2);
new InputMediaQuery(mediaQuery_3);

new HTMLButton(htmlBtn, cssTextField, htmlTextField, numberOfHexagonsElement);
new CSSButton(
  cssBtn,
  cssTextField,
  htmlTextField,
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
);
