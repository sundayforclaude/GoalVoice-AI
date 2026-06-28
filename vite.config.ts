import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: '/GoalVoice-AI/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: ["sb-3u2hyd0fbjq3.vercel.run", ".vercel.run"],
  },
})
