import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig(({ mode }) => {
  if (mode === "production") {
    return {
      plugins: [topLevelAwait()],
      base: "./",
    };
  }

  return {
    server: {
      port: 3000,
      open: "/test.html",
    },
    build: {
      rollupOptions: {
        input: {
          main: "/index.html",
          test: "/test.html",
        },
      },
    },
  };
});
