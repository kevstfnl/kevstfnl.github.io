import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
    site: "https://kevstfnl.github.io",
    output: "static",
    base: "/",
    compressHTML: true,
    integrations: [sitemap(), playformCompress(), compressor({ gzip: { level: 6} })],
    markdown: {
        shikiConfig: {
            theme: "css-variables",
        },
    },
    vite: {
        plugins: [tailwindcss()],
        css: {
            transformer: "lightningcss",
        },
    },
});