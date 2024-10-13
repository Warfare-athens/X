import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
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
				target: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000",
				changeOrigin: true,
			},
		},
	},
});
