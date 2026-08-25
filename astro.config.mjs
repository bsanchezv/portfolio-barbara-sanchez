import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages: ajustar según el nombre del repo
// - Sitio de usuario (username.github.io): site = 'https://username.github.io', base = '/'
// - Sitio de proyecto (username.github.io/repo-name): base = '/repo-name/'
export default defineConfig({
  site: 'https://bsanchezv.github.io',
  base: '/Portafolio-Barbara-Sanchez/',
  integrations: [tailwind()],
  output: 'static',
});
