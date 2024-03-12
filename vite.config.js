import {resolve} from 'path'
import {defineConfig} from 'vite'


export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				index: resolve(__dirname, 'index.html'),
				blog: resolve(__dirname, 'blog.html'),
				about: resolve(__dirname, 'about.html'),
			},
		},
	},
})