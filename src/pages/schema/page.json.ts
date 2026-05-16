import { buildSeoPieces } from "@/assets/data/seo";
import { site } from "@/assets/data/site";
import { createSchemaEndpoint } from "@jdevalk/astro-seo-graph";

const pages = [
	{
		path: "/",
		title: `${site.name} — ${site.role}`,
		description: site.description,
	},
	{
		path: "/blog",
		title: `Blog technique TypeScript & IA — ${site.name}`,
		description:
			"Articles et notes de Kevin Stefanelli autour du TypeScript, de l'IA appliquée et des architectures web modernes.",
	},
	{
		path: "/contact",
		title: `Contact freelance IA & web — ${site.name}`,
		description: "Parlons d'un projet web, d'une intégration IA ou d'une refonte produit avec Kevin Stefanelli.",
	},
];

export const GET = createSchemaEndpoint({
	entries: async () => pages,
	mapper: (page) =>
		buildSeoPieces({
			url: new URL(page.path, site.url).toString(),
			title: page.title,
			description: page.description,
		}),
});
