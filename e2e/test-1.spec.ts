import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/hexagon-grid-generator");

  await expect(page).toHaveTitle(/Hexagon Grid Generator/);
});
