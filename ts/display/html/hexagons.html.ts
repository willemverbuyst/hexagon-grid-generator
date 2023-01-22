import { generateHexagonHTML } from "./hexagon.html";

export const generateHexagonsHTML = (numberOfHexagons: number): string => {
  let hexagonsHTML = "";

  Array(numberOfHexagons)
    .fill(0)
    .forEach((_, i) => {
      hexagonsHTML += generateHexagonHTML(i + 1);
    });

  return hexagonsHTML;
};
