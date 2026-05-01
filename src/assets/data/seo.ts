import { navLinks, site, stack } from "@/assets/data/site";
import {
	assembleGraph,
	buildBreadcrumbList,
	buildPiece,
	buildSiteNavigationElement,
	buildWebPage,
	buildWebSite,
	makeIds,
} from "@jdevalk/seo-graph-core";
import type { GraphEntity, WebPageType } from "@jdevalk/seo-graph-core";

const siteUrl = `${site.url}/`;
const ids = makeIds({ siteUrl, personUrl: siteUrl });

const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

const pageTypeFromUrl = (url: string): WebPageType => {
	const { pathname } = new URL(url);

	if (pathname === "/" || pathname === "/blog/") {
		return "CollectionPage";
	}

	return "WebPage";
};

const breadcrumbItems = (url: string, title: string) => {
	const { pathname } = new URL(url);

	if (pathname === "/") {
		return [{ name: "Accueil", url: siteUrl }];
	}

	return [
		{ name: "Accueil", url: siteUrl },
		{ name: title, url },
	];
};

const siteEntities = () => [
	buildPiece({
		"@type": "Person",
		"@id": ids.person,
		name: site.name,
		url: siteUrl,
		email: site.email,
		jobTitle: site.role,
		sameAs: [site.github, site.linkedin],
		knowsAbout: stack,
	}),
	buildWebSite(
		{
			url: siteUrl,
			name: site.name,
			description: site.description,
			publisher: { "@id": ids.person },
			about: { "@id": ids.person },
			inLanguage: "fr-FR",
		},
		ids,
	),
	buildSiteNavigationElement(
		{
			name: "Navigation principale",
			isPartOf: { "@id": ids.website },
			items: navLinks.map((link) => ({
				name: link.label,
				url: absoluteUrl(link.href),
			})),
		},
		ids,
	),
];

const homePageEntity = () =>
	buildWebPage(
		{
			url: siteUrl,
			name: `${site.name} — ${site.role}`,
			description: site.description,
			isPartOf: { "@id": ids.website },
			about: { "@id": ids.person },
			inLanguage: "fr-FR",
		},
		ids,
		"CollectionPage",
	);

export const buildSeoPieces = ({
	url,
	title,
	description,
}: {
	url: string;
	title: string;
	description: string;
}): GraphEntity[] => {
	const pieces = [...siteEntities()];

	if (new URL(url).pathname !== "/") {
		pieces.push(homePageEntity());
	}

	pieces.push(
		buildWebPage(
			{
				url,
				name: title,
				description,
				isPartOf: { "@id": ids.website },
				breadcrumb: { "@id": ids.breadcrumb(url) },
				about: { "@id": ids.person },
				inLanguage: "fr-FR",
				copyrightHolder: { "@id": ids.person },
				copyrightYear: new Date().getFullYear(),
				isAccessibleForFree: true,
			},
			ids,
			pageTypeFromUrl(url),
		),
		buildBreadcrumbList(
			{
				url,
				items: breadcrumbItems(url, title),
			},
			ids,
		),
	);

	return pieces as GraphEntity[];
};

export const buildSeoGraph = (page: {
	url: string;
	title: string;
	description: string;
}) =>
	assembleGraph(buildSeoPieces(page), {
		warnOnDanglingReferences: true,
	});
