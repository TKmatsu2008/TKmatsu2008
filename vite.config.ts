// vite.config.js
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: `/TKmatsu2008/`, 
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
})