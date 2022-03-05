import { defineConfig } from 'vite';
import path from 'path';

module.exports = defineConfig({

	build: {
		manifest: true,

		outDir: path.join(__dirname, 'dist'),

		rollupOptions: {
			input: path.join(__dirname, './src/main.js'),
			output: {
				entryFileNames: '[name].js',
				chunkFileNames: '[name].js',
				assetFileNames: '[name].[ext]'
			}
		},
	},
});
