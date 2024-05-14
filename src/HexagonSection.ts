import { generateHexagons } from "./hexagon-functions";

export class HexagonSection {
  constructor(
    public hexagonContainer: HTMLElement,
    public numberOfHexagonsElement: HTMLInputElement,
    public hexagonsFirstRowElement: HTMLInputElement,
  ) {}

  public generate() {
    this.hexagonContainer.innerHTML = "";
    const hexagons = generateHexagons(
      Number(this.hexagonsFirstRowElement.value),
      Number(this.numberOfHexagonsElement.value),
    );

    if (hexagons) {
      this.hexagonContainer.appendChild(hexagons);
    }
  }
}
