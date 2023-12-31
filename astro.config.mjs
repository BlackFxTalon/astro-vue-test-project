import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";
import svgLoader from 'vite-svg-loader';

// https://astro.build/config
export default defineConfig({
  integrations: [vue({ appEntrypoint: '/src/main.js' })],
  vite: {
    plugins: [svgLoader()],
  }
});