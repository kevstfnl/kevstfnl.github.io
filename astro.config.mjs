import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import icons from 'unplugin-icons/vite'
import compressor from "astro-compressor";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://kevstfnl.github.io",
    output: "static",
    base: "/",
    compressHTML: true,
    integrations: [sitemap(), icon(), playformCompress(), compressor({ gzip: { level: 6 } })],
    markdown: {
        shikiConfig: {
            theme: "css-variables",
        },
    },
    vite: {
        plugins: [tailwindcss(), icons({ compiler: "astro"})],
        css: {
            transformer: "lightningcss",
        },
    },
});