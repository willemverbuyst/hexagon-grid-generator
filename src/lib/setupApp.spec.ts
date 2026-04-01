import { beforeEach, describe, expect, it, vi } from "vitest";
import type { AppElements } from "./appElements";
import { setupApp } from "./setupApp";

function createInput(value = ""): HTMLInputElement {
  const input = document.createElement("input");
  input.value = value;

  return input;
}

function createElements(): AppElements {
  return {
    inputs: {
      numberOfHexagons: createInput("5"),
      hexagonsFirstRow: createInput("3"),
      backgroundColor: createInput("#101010"),
      hexagonColor: createInput("#202020"),
      textColor: createInput("#303030"),
      hexagonSize: createInput("10"),
      containerSkewX: createInput("5"),
      containerSkewY: createInput("6"),
      hexagonRotation: createInput("7"),
      hexagonTransition: createInput("0.2"),
      hexagonScale: createInput("1.3"),
      hexagonGap: createInput("20"),
      mediaQuery_1: createInput("900"),
      mediaQuery_2: createInput("700"),
      mediaQuery_3: createInput("500"),
    },
    buttons: {
      css: document.createElement("button"),
      html: document.createElement("button"),
      dialogClose: document.createElement("button"),
      dialogCopy: document.createElement("button"),
    },
    dialog: {
      element: document.createElement("dialog"),
      text: document.createElement("div"),
      title: document.createElement("div"),
    },
    preview: {
      hexagonContainer: document.createElement("div"),
    },
  };
}

describe("setupApp", () => {
  let elements: AppElements;

  beforeEach(() => {
    elements = createElements();
    document.documentElement.style.cssText = "";
  });

  it("returns a render function that draws the current preview", () => {
    const app = setupApp(elements);

    app.render();

    expect(elements.preview.hexagonContainer.childElementCount).toBe(5);
  });

  it("binds input changes for rendering and CSS variables", () => {
    const app = setupApp(elements);

    app.render();
    elements.inputs.hexagonsFirstRow.value = "4";
    elements.inputs.hexagonsFirstRow.dispatchEvent(new Event("input"));

    expect(
      document.documentElement.style.getPropertyValue(
        "--number-of-hexagons-first-row",
      ),
    ).toBe("4");
    expect(elements.preview.hexagonContainer.childElementCount).toBe(5);

    elements.inputs.hexagonGap.value = "30";
    elements.inputs.hexagonGap.dispatchEvent(new Event("input"));

    expect(
      document.documentElement.style.getPropertyValue("--size-hexagon-inner"),
    ).toBe("70%");
  });

  it("opens the export dialog for HTML and CSS", () => {
    setupApp(elements);

    elements.buttons.html.click();

    expect(elements.dialog.title.innerText).toBe("HTML");
    expect(elements.dialog.element.open).toBe(true);
    expect(elements.dialog.text.innerHTML).toContain("html-element");

    elements.dialog.element.close();
    elements.buttons.css.click();

    expect(elements.dialog.title.innerText).toBe("CSS");
    expect(elements.dialog.element.open).toBe(true);
    expect(elements.dialog.text.innerHTML).toContain("css-selector");
  });

  it("binds dialog close and copy actions", () => {
    setupApp(elements);
    elements.dialog.text.innerText = "copied text";
    const writeTextSpy = vi
      .spyOn(navigator.clipboard, "writeText")
      .mockResolvedValue();

    elements.buttons.dialogCopy.click();

    expect(writeTextSpy).toHaveBeenCalledWith("copied text");

    elements.dialog.element.showModal();
    elements.buttons.dialogClose.click();

    expect(elements.dialog.element.open).toBe(false);
  });
});
