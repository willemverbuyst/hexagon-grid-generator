import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { getAppElements } from "../app/getAppElements";
import { setupApp } from "../app/setupApp";

function loadIndexHtmlBody(): string {
  const indexHtmlPath = resolve(process.cwd(), "index.html");
  const indexHtml = readFileSync(indexHtmlPath, "utf-8");
  const bodyMatch = indexHtml.match(/<body>([\s\S]*)<\/body>/);

  if (!bodyMatch) {
    throw new Error("Could not read <body> from index.html");
  }

  const bodyContent = bodyMatch[1];

  if (bodyContent === undefined) {
    throw new Error("Could not extract <body> content from index.html");
  }

  return bodyContent;
}

describe("app integration with index.html", () => {
  it("boots against the real page markup and rerenders on input", () => {
    document.body.innerHTML = loadIndexHtmlBody();
    document.documentElement.style.cssText = "";

    const elements = getAppElements();
    const app = setupApp(elements);

    app.render();

    expect(elements.preview.hexagonContainer.childElementCount).toBe(34);

    elements.inputs.numberOfHexagons.value = "12";
    elements.inputs.numberOfHexagons.dispatchEvent(new Event("input"));

    expect(elements.preview.hexagonContainer.childElementCount).toBe(12);
  });
});
