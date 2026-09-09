import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // iOS FIX: Vite 7 defaults to `baseline-widely-available` (Safari 16+),
    // which leaves ES2020+ syntax that iOS 13-15 Safari cannot parse —
    // a parse error in the entry module = blank page on iPhone/iPad.
    // es2018 is parseable by every iOS Safari from iOS 12 onwards.
    target: "es2018",
    modulePreload: {
      // No dynamic-import graph here; skip the preload polyfill entirely.
      polyfill: false,
    },
    sourcemap: false,
  },
});
