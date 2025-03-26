import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: 'https://github.gokulyc.in',
  integrations: [mdx(), sitemap(), react()],
});