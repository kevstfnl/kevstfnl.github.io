import { readFileSync } from "node:fs";
import sitemap from "@astrojs/sitemap";
import seoGraph from "@jdevalk/astro-seo-graph/integration";
import { defineConfig } from "astro/config";

const site = "https://kevstfnl.github.io";
const seoGraphDist = "/node_modules/@jdevalk/astro-seo-graph/dist/";
const stripSourcemapComment = (code) => code.replace(/\/\/# sourceMappingURL=.*$/gm, "");

export default defineConfig({
	site,
	output: "static",
	base: "/",
	build: {
		inlineStylesheets: "always",
	},
	vite: {
		optimizeDeps: {
			esbuildOptions: {
				plugins: [
					{
						name: "ignore-astro-seo-graph-missing-sourcemaps",
						setup(build) {
							build.onLoad({ filter: /@jdevalk\/astro-seo-graph\/dist\/.*\.js$/ }, (args) => ({
								contents: stripSourcemapComment(readFileSync(args.path, "utf8")),
								loader: "js",
							}));
						},
					},
				],
			},
		},
		plugins: [
			{
				name: "ignore-astro-seo-graph-missing-sourcemaps",
				load(id) {
					if (!id.includes(seoGraphDist)) {
						return null;
					}

					return {
						code: stripSourcemapComment(readFileSync(id, "utf8")),
						map: null,
					};
				},
			},
		],
	},
	integrations: [
		sitemap(),
		seoGraph({
			validateH1: true,
			validateUniqueMetadata: true,
			validateImageAlt: true,
			validateMetadataLength: true,
			validateInternalLinks: true,
			llmsTxt: {
				title: "Kevin Stefanelli",
				siteUrl: site,
				summary: "Portfolio de Kevin Stefanelli, développeur TypeScript full-stack spécialisé en IA.",
			},
		}),
	],
});
