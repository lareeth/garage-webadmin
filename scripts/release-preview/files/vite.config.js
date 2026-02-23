// File only dedicated to test-releases

// You probably wanna take a look at vite.config.js
import { defineConfig, loadEnv } from "vite";
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
		server: {
			proxy: {
				"/api": {
					target: env.API_HOST,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},
	};
});
