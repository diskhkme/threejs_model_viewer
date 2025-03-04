import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";

// --- Deploy Config ---
// export default defineConfig({
//   plugins: [topLevelAwait()],
//   base: './',
// })

// --- Local Config ---
export default defineConfig({
  server: {
    port: 3000,
    open: "/test.html", // 개발 서버 시작시 테스트 페이지 자동 오픈
  },
  build: {
    rollupOptions: {
      input: {
        main: "/index.html",
        test: "/test.html",
      },
    },
  },
});
