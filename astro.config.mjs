import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://corobotx.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
