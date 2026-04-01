import { HEXAGON_INNER_CLASS, HEXAGON_OUTER_CLASS } from "./constants";

export type GenerateSingleHexagonInput = {
  label: string;
  className?: string;
};

export function generateSingleHexagon({
  label,
  className,
}: GenerateSingleHexagonInput) {
  const outerHexagon = document.createElement("div");
  const innerHexagon = document.createElement("div");

  outerHexagon.classList.add(HEXAGON_OUTER_CLASS);

  if (className) {
    outerHexagon.classList.add(className);
  }

  innerHexagon.classList.add(HEXAGON_INNER_CLASS);
  innerHexagon.innerText = label;

  outerHexagon.appendChild(innerHexagon);

  return outerHexagon;
}
