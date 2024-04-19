import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  },
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
