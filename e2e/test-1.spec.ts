import { expect, test } from "@playwright/test";

test("renders the app and opens the export dialog", async ({ page }) => {
  await page.goto("http://localhost:5173/hexagon-grid-generator");

  await expect(page).toHaveTitle(/Hexagon Grid Generator/);

  const hexagons = page.locator(".hexagon__outer");
  await expect(hexagons).toHaveCount(34);

  await page.getByLabel(/Hexagons/).fill("12");
  await expect(hexagons).toHaveCount(12);

  await page.getByRole("button", { name: "html" }).click();

  await expect(page.locator("#dialog")).toBeVisible();
  await expect(page.locator("#dialog__title")).toHaveText("HTML");
});
