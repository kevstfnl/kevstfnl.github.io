// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://kevstfnl.github.io',
    output: 'static',
    base: 'kevstfnl.github.io',
    compressHTML: true,
    integrations: [sitemap()],
    markdown: {
        shikiConfig: {
            theme: 'css-variables',
        },
    },
    vite: {
        plugins: [tailwindcss()],
        css: {
            transformer: "lightningcss",
        }
    },
});
