import type { AppElements } from "./appElements";
import { bindCssExport, bindHtmlExport } from "./bindExports";
import { bindRenderInputs } from "./bindRenderInputs";
import { bindStyleInputs } from "./bindStyleInputs";
import { bindDialogControls } from "./dialog";
import { readAppState } from "./readAppState";
import { renderHexagonSection } from "./renderHexagonSection";

export function setupApp(elements: AppElements): { render: () => void } {
  const render = () => {
    renderHexagonSection(elements, readAppState(elements));
  };

  bindRenderInputs(elements.inputs, render);
  bindStyleInputs(elements.inputs);
  bindHtmlExport(elements, () => readAppState(elements));
  bindCssExport(elements, () => readAppState(elements));
  bindDialogControls(elements);

  return { render };
}
