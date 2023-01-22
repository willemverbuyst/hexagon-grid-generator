import { generateCSSText } from "../display/css/text.css";
import { generateHexagons } from "../display/hexagons/hexagons";
import { generateHTMLText } from "../display/html/text.html";
import { inputElements } from "./inputs/inputElements";
import { assertNonNullish } from "./utils/assertNonNullish";

export const main = (): void => {
  const {
    backgroundColor: {
      input: { valueAsString: backgroundColor },
    },
    containerSkewX: {
      input: { valueAsNumber: containerSkewX },
    },
    containerSkewY: {
      input: { valueAsNumber: containerSkewY },
    },
    hexagonsFirstRow: {
      input: { valueAsNumber: hexagonsFirstRow },
    },
    hexagonColor: {
      input: { valueAsString: hexagonColor },
    },
    hexagonGap: {
      input: { valueAsNumber: hexagonGap },
    },
    hexagonRotation: {
      input: { valueAsNumber: hexagonRotation },
    },
    hexagonScale: {
      input: { valueAsNumber: hexagonScale },
    },
    hexagonSize: {
      input: { valueAsNumber: hexagonSize },
    },
    hexagonTransition: {
      input: { valueAsNumber: hexagonTransition },
    },
    mediaQuery_1: {
      input: { valueAsNumber: mediaQuery_1 },
    },
    mediaQuery_2: {
      input: { valueAsNumber: mediaQuery_2 },
    },
    mediaQuery_3: {
      input: { valueAsNumber: mediaQuery_3 },
    },
    numberOfHexagons: {
      input: { valueAsNumber: numberOfHexagons },
    },
    textColor: {
      input: { valueAsString: textColor },
    },
  } = inputElements;

  const cssTextField = document.getElementById("css");
  assertNonNullish(cssTextField, "HTMLElement #css not found!");

  const htmlTextField = document.getElementById("html");
  assertNonNullish(htmlTextField, "HTMLElement #htmlTextField not found!");

  const hexagonContainer = document.getElementById("hexagon__container");
  assertNonNullish(
    hexagonContainer,
    "HTMLElement #hexagonContainer not found!"
  );

  hexagonContainer.innerHTML = generateHexagons(
    hexagonsFirstRow,
    numberOfHexagons
  );
  htmlTextField.innerText = generateHTMLText({ numberOfHexagons });
  cssTextField.innerText = generateCSSText({
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
    textColor,
  });
};
