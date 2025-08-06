// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  }
});
