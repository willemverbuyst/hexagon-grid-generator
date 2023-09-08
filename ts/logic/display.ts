import { assertNonNullish } from "./utils";

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
