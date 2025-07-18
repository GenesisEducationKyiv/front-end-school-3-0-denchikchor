import { defineConfig, devices } from "@playwright/experimental-ct-react";
import viteConfig from "./vite.config";

export default defineConfig({
  testDir: "tests",
  webServer: {
        command: 'npm run dev',
        url: 'http://localhost:3000',
        reuseExistingServer: true,
      },

  projects: [
    {
      name: 'e2e-chromium',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:3000',
      },
      testMatch: ['e2e/*.spec.ts'],
    },
    // …other projects…
  ],

  use: {
    trace: "on-first-retry",
  },

  reporter: "html",
});
