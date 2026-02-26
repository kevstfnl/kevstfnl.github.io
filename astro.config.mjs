import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import compressor from "astro-compressor";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://kevstfnl.github.io",
	output: "static",
	base: "/",
	compressHTML: true,
	integrations: [sitemap(), playformCompress(), compressor({ gzip: { level: 6 } })],
	vite: {
		plugins: [tailwindcss()],
		css: {
			transformer: "lightningcss",
		},
	},
});
