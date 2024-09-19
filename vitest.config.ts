/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    mockReset: true,
    exclude: ["**/node_modules/**", "**/dist/**", "**/e2e/**"],
    environment: "happy-dom",
    coverage: {
      include: ["**/src/**"],
    },
  },
});
