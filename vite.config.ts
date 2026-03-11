import { fileURLToPath, URL } from "node:url"
import vue from "@vitejs/plugin-vue"
import { defineConfig, loadEnv } from "vite"
import magicalSvg from "vite-plugin-magical-svg"
import vueDevTools from "vite-plugin-vue-devtools"
import pkg from "./package.json" with { type: "json" }

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "")
	return {
		plugins: [
			vue(),
			magicalSvg({
				target: "vue",
				svgo: false,
				preserveWidthHeight: true,
				restoreMissingViewBox: true,
			}),
			vueDevTools(),
		],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
		publicDir: "static",
		server: {
			allowedHosts: true,
			proxy: {
				"/api": {
					target: env.API_HOST,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},
		define: {
			"import.meta.env.VITE_APP_VERSION": JSON.stringify(pkg.version),
		},
	}
})
