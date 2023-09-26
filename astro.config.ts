import { defineConfig, sharpImageService } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    service: sharpImageService()
  },
  integrations: [mdx()],
  site: 'https://bustinbung.com',
});