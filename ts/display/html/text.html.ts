import { HTMLInputValues } from "../../logic/types";
import { generateHexagonsHTML } from "./hexagons.html";
import { wrapHTML } from "./wrap.html";

export const generateHTMLText = ({ numberOfHexagons }: HTMLInputValues) => {
  const hexagonsHTML = generateHexagonsHTML(numberOfHexagons);
  const htmlText = wrapHTML(hexagonsHTML);

  return htmlText;
};
