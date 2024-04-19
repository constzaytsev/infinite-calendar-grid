import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "InfiniteCalendarGrid",
      fileName: "infinite-calendar-grid",
    },
    rollupOptions: {
      external: ["vue", "dayjs"],
      output: {
        globals: {
          vue: "Vue",
          dayjs: "dayjs"
        },
      },
    },
  },
})
