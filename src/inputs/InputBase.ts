import { HexagonSection } from "../HexagonSection";

export class InputBase {
  constructor(
    public element: HTMLInputElement,
    public hexagonSection: HexagonSection,
  ) {}

  get valueAsNumber(): number {
    return Number(this.element.value);
  }

  get valueAsString(): string {
    return String(this.element.value);
  }
}
