import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://kevstfnl.github.io",
	output: "static",
	base: "/",
	compressHTML: true,
	integrations: [sitemap(), playformCompress()],
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
