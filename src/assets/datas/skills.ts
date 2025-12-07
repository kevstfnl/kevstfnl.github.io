export type Technologie = {
	label: string;
	iconName: string;
};

export type Skill = {
	title: string;
	subtitle: string;
	description: string;
	iconName: string;
	className?: string;
	technologies: Technologie[];
};

export const skills: Skill[] = [
	{
		title: "Fullstack",
		subtitle: "Développement",
		description: "De la page au serveur, une approche produit pour garder une vue d’ensemble.",
		className: "md:col-span-2 xl:col-span-1 xl:col-start-3",
		iconName: "ri:send-to-back",
		technologies: [
			{
				iconName: "devicon:nextjs",
				label: "NextJS",
			},
			{
				iconName: "devicon:solidjs",
				label: "SolidStart",
			},
			{
				iconName: "devicon:astro",
				label: "Astro",
			}
		]
	},
	{
		title: "Backend",
		subtitle: "Développement, Base de données",
		description: "APIs claires, logiques métier propres et architectures pensées pour durer.",
		iconName: "ri:puzzle-line",
		className: "xl:col-span-2 xl:col-start-2 xl:row-start-2",
		technologies: [
			{
				iconName: "material-icon-theme:typescript",
				label: "TypeScript",
			},
			{
				iconName: "devicon:java",
				label: "Java",
			},
			{
				iconName: "material-icon-theme:php-elephant",
				label: "Php",
			},
			{
				iconName: "devicon:mysql",
				label: "MySQL"
			},
			{
				iconName: "devicon:mongodb",
				label: "Mongo"
			},
			{
				iconName: "devicon:redis",
				label: "Redis"
			},
		]
	},
	{
		title: "Frontend",
		subtitle: "Développement UX - UI",
		description: "Interfaces modernes, accessibles et réactives, avec un soin particulier sur les micro-interactions.",
		className: "xl:row-span-2 xl:col-start-1 xl:row-start-2",
		iconName: "ri:pencil-line",
		technologies: [
			{
				iconName: "material-icon-theme:react-ts",
				label: "React",
			},
			{
				iconName: "devicon:solidjs",
				label: "SolidJS",
			},
			{
				iconName: "material-icon-theme:figma",
				label: "Figma",
			},
			{
				iconName: "material-icon-theme:tailwindcss",
				label: "Tailwind",
			},
		]
	},
	{
		title: "DevOps",
		subtitle: "Deploiement, Linux",
		description: "Automatisation, CI/CD et conteneurs pour des déploiements fiables.",
		iconName: "ri:tools-line",
		className: "xl:col-start-3 xl:row-start-3",
		technologies: [
			{
				iconName: "devicon:docker",
				label: "Docker",
			},
			{
				iconName: "devicon:github",
				label: "Workflows",
			},
			{
				iconName: "devicon:linux",
				label: "Linux",
			},
		]
	},
	{
		title: "IA",
		subtitle: "Intelligence artificielle",
		description: "Intégration d’IA, RAG, et outils pour augmenter la productivité et la valeur métier. ",
		iconName: "ri:tools-line",
		className: "xl:col-start-2 xl:row-start-3",
		technologies: [
			{
				iconName: "ri:openai-fill",
				label: "OpenAI",
			},
			{
				iconName: "simple-icons:ollama",
				label: "Ollama",
			},
			{
				iconName: "simple-icons:n8n",
				label: "N8N",
			},
			{
				iconName: "octicon:mcp-16",
				label: "MCP",
			},
			{
				iconName: "ri:ai",
				label: "RAG",
			},
		]
	},
]
