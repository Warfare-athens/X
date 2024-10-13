import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const backendUrl = process.env.VITE_BACKEND_URL || "http://localhost:5000";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@utils": "/src/utils",
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: backendUrl,
        changeOrigin: true,
      },
    },
  },
});
