import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import fs from "fs"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/convertcase/",
  build: {
    outDir: "dist"
  },
  // 👇 यह GitHub Pages के लिए 404.html फाइल बनाएगा
  server: {
    buildEnd: () => {
      fs.copyFileSync("dist/index.html", "dist/404.html")
    }
  }
})
