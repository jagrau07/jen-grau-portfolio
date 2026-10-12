// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // Update if you add a custom domain in Cloudflare.
  site: 'https://jengrau.pages.dev',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [mdx()],
});
