import { defineConfig, sharpImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	image: {
		service: sharpImageService()
	},
	markdown: {
		shikiConfig: {
			theme: 'one-dark-pro'
		},
	},
	integrations: [],
	site: 'https://bustinbung.com',
});