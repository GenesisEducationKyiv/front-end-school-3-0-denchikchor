import { defineConfig, devices } from "@playwright/experimental-ct-react";
import viteConfig from "./vite.config";

export default defineConfig({
  testDir: "tests",

  projects: [
    {
      name: 'e2e-chromium',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:3000',
      },
      webServer: {
        command: 'npm run dev',
        url: 'http://localhost:3000',
        reuseExistingServer: true,
      },
      testMatch: ['e2e/*.spec.ts'],
    },
    // …other projects…
  ],

  use: {
    trace: "on-first-retry",
    ctPort: 3100,
  },

  reporter: "html",
});
