import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

const srcDir = fileURLToPath(new URL("./src/", import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    alias: {
      "@app": resolve(srcDir, "app"),
      "@pages": resolve(srcDir, "pages"),
      "@widgets": resolve(srcDir, "widgets"),
      "@features": resolve(srcDir, "features"),
      "@entities": resolve(srcDir, "entities"),
      "@shared": resolve(srcDir, "shared"),
      "@assets": resolve(srcDir, "assets"),
    },
  },
});
