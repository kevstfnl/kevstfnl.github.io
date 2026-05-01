import { site } from "@/assets/data/site";
import { createSchemaMap } from "@jdevalk/astro-seo-graph";

export const GET = createSchemaMap({
	siteUrl: site.url,
	entries: [{ path: "/schema/page.json", lastModified: new Date() }],
});
