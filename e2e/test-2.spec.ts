import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/hexagon-grid-generator");

  await page.getByLabel("Background").click();
  await page.getByLabel("Background").fill("#000000");
  await page.getByLabel("Hexagon", { exact: true }).click();
  await page.getByLabel("Hexagon", { exact: true }).fill("#808080");
  await page.getByLabel("Text").click();
  await page.getByLabel("Text").fill("#f7f7f7");
  await page.getByLabel("Hexagons", { exact: true }).click();
  await page.getByLabel("Hexagons", { exact: true }).fill("43");
  await page.getByLabel("1st Row").click();
  await page.getByLabel("1st Row").fill("9");
  await page.getByLabel("Size").click();
  await page.getByLabel("Size").fill("4");
  await page.getByLabel("Skew X").click();
  await page.getByLabel("Skew X").fill("5");
  await page.getByLabel("Skew Y").click();
  await page.getByLabel("Skew Y").fill("8");
  await page.getByRole("button", { name: "HTML" }).click();
  expect(await page.screenshot()).toMatchSnapshot("html-output.png");
  await page.getByRole("button", { name: "CLOSE" }).click();
  await page.getByRole("button", { name: "CSS" }).click();
  expect(await page.screenshot()).toMatchSnapshot("css-output.png");
  await page.getByRole("button", { name: "CLOSE" }).click();
});
