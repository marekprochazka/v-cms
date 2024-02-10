import vue from "@vitejs/plugin-vue";
// @ts-ignore
import * as path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      // @ts-ignore
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "vCMS",
      fileName: "v-cms",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      // @ts-ignore
      "@": path.resolve(__dirname, "src")
    }
  }
});