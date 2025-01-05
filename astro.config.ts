import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://bustinbung.com",

  markdown: {
      shikiConfig: {
          theme: 'catppuccin-frappe',
      }
  },

  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  api: 'modern-compiler',
              }
          }
      }
  },

  integrations: [mdx()]
});