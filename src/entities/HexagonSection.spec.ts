import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { generateHexagons } from "../lib/generateHexagons";
import { HexagonSection } from "./HexagonSection";

vi.mock("../lib/generateHexagons");

describe("HexagonSection", () => {
  let hexagonContainer: HTMLElement;
  let numberOfHexagonsElement: HTMLInputElement;
  let hexagonsFirstRowElement: HTMLInputElement;
  let hexagonSection: HexagonSection;

  beforeEach(() => {
    hexagonContainer = document.createElement("div");
    numberOfHexagonsElement = document.createElement("input");
    hexagonsFirstRowElement = document.createElement("input");
    hexagonSection = new HexagonSection(
      hexagonContainer,
      numberOfHexagonsElement,
      hexagonsFirstRowElement,
    );
  });

  it("should clear the hexagon container before generating new hexagons", () => {
    hexagonContainer.innerHTML = "<div>Old Content</div>";
    hexagonSection.generate();
    expect(hexagonContainer.innerHTML).toBe("");
  });

  it("should call generateHexagons with the correct parameters", () => {
    hexagonsFirstRowElement.value = "5";
    numberOfHexagonsElement.value = "10";
    hexagonSection.generate();
    expect(generateHexagons).toHaveBeenCalledWith(5, 10);
  });

  it("should append generated hexagons to the container if hexagons are generated", () => {
    const hexagons = document.createElement("span");

    (generateHexagons as Mock).mockReturnValue(hexagons);
    hexagonSection.generate();
    expect(hexagonContainer.firstChild).toBe(hexagons);
  });

  it("should not append anything if no hexagons are generated", () => {
    (generateHexagons as Mock).mockReturnValue(null);
    hexagonSection.generate();
    expect(hexagonContainer.firstChild).toBeNull();
  });
});
