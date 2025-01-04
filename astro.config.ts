import { defineConfig } from 'astro/config';

import markdoc from '@astrojs/markdoc';

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

  integrations: [markdoc()]
});