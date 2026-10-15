// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Update if you add a custom domain in Cloudflare.
  site: 'https://jengrau.pages.dev',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
});
