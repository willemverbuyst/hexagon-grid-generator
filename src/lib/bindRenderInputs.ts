import type { AppElements } from "./getAndAssertHtmlElements";

function bindInput(
  input: HTMLInputElement,
  listener: (event: Event) => void,
): void {
  input.addEventListener("input", listener);
}

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
