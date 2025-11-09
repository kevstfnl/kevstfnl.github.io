import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://kevstfnl.github.io",
	output: "static",
	base: "/",
	compressHTML: true,
	integrations: [sitemap()],
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
