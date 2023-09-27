import { defineConfig, sharpImageService } from 'astro/config';

import mdx from "@astrojs/mdx";

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
	integrations: [mdx()],
	site: 'https://bustinbung.com',
});