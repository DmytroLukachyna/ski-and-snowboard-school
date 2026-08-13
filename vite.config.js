import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  html: {
    additionalAssetSources: {
      a: { srcAttributes: ["href"] },
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
