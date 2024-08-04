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
        target: 'http://localhost:8080', // Adjust this to your Spring Boot server's address
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
