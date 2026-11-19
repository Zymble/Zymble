// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const site = env.PUBLIC_SITE_URL || 'https://rushclippy.com';

// Only pages with status "live" in src/config/routes.ts go into the sitemap.
import { indexablePaths } from './src/config/routes.ts';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  // CSS is small; inlining removes the render-blocking request (Lighthouse mobile >= 95).
  build: { inlineStylesheets: 'always' },
  adapter: vercel(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    svelte(),
    mdx(),
    sitemap({
      filter: (page) => indexablePaths.some((p) => new URL(page).pathname === p),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', 'pt-br': 'pt-BR', es: 'es' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
