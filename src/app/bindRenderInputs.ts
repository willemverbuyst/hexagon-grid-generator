import type { AppElements } from "./appElements";
import { bindInput } from "./bindInput";

export function bindRenderInputs(
  inputs: AppElements["inputs"],
  render: () => void,
): void {
  bindInput(inputs.numberOfHexagons, render);
  bindInput(inputs.hexagonsFirstRow, () => {
    document.documentElement.style.setProperty(
      "--number-of-hexagons-first-row",
      inputs.hexagonsFirstRow.value,
    );
    render();
  });
}
