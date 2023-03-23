import { defineConfig } from "vite";

import path from "path";

module.exports = defineConfig({
	build: {
		rollupOptions: {
			input: path.join(__dirname, "./index.html"),
			output: {
				entryFileNames: "[name].[hash].js",
				chunkFileNames: "[name].[hash].js",
				assetFileNames: "assets/[ext]/[name].[hash].[ext]",
			},
		},
	},
});
