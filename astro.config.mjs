// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true
  }
});
