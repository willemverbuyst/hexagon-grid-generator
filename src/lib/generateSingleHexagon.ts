export function generateSingleHexagon(
  hexagonNumber: string,
  className?: string,
) {
  const outerHexagon = document.createElement("div");
  const innerHexagon = document.createElement("div");

  outerHexagon.classList.add("hexagon__outer");

  if (className) {
    outerHexagon.classList.add(className);
  }

  innerHexagon.classList.add("hexagon__inner");
  innerHexagon.innerText = hexagonNumber;

  outerHexagon.appendChild(innerHexagon);

  return outerHexagon;
}
