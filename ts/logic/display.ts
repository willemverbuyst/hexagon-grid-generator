import { generateCSSText } from "../display/css/text.css";
import { generateHTMLText } from "../display/hexagon.html";
import { inputElements } from "./inputs/inputElements";
import { assertNonNullish } from "./utils";

export const generateTextVersions = (): void => {
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

export const displayCSS = (): void => {
  addEventListener("cssBtn");
};

export const displayHTML = (): void => {
  addEventListener("htmlBtn");
};

export const addEventListener = (id: string): void => {
  const cssBtn = document.getElementById(id);
  assertNonNullish(cssBtn, `HTMLElement #${id} not found!`);

  cssBtn.addEventListener("click", () => handleBtnClick(id));
};

const getCSSTextField = (): HTMLElement => {
  const cssTextField = document.getElementById("css");
  assertNonNullish(cssTextField, "HTMLElement #css not found!");
  return cssTextField;
};

const getHTMLTextField = (): HTMLElement => {
  const htmlTextField = document.getElementById("html");
  assertNonNullish(htmlTextField, "HTMLElement #htmlTextField not found!");
  return htmlTextField;
};

const handleBtnClick = (id: string): void => {
  generateTextVersions();
  const cssTextField = getCSSTextField();
  const htmlTextField = getHTMLTextField();
  switch (id) {
    case "cssBtn":
      htmlTextField.style.visibility = "hidden";
      cssTextField.style.visibility =
        cssTextField.style.visibility === "visible" ? "hidden" : "visible";
      break;
    case "htmlBtn":
      cssTextField.style.visibility = "hidden";
      htmlTextField.style.visibility =
        htmlTextField.style.visibility === "visible" ? "hidden" : "visible";
      break;
    default:
      break;
  }
};
