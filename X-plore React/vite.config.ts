import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

declare const __dirname: string; // Add this line

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://x-plore-backend.onrender.com', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
