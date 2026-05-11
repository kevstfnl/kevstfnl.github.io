export const site = {
	url: "https://kevstfnl.github.io",
	name: "Kevin Stefanelli",
	shortName: "Kev Stfnl",
	role: "Développeur TypeScript & IA",
	description:
		"Développeur TypeScript full-stack spécialisé en IA, interfaces modernes, backends robustes et pipelines agentiques utiles.",
	image: "/og.png",
	email: "kevin.stefanelli.pro@gmail.com",
	github: "https://github.com/kevstfnl",
	linkedin: "https://www.linkedin.com/in/kevin-stefanelli-3b73a9222/",
	location: "Aubagne, France",
	availability: "Disponible pour des missions produit, des MVP IA et des architectures full-stack modernes.",
};

export const navLinks = [
	{ href: "/", label: "Accueil" },
	{ href: "/projets", label: "Projets" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

export const languages = ["JavaScript", "TypeScript", "PHP", "SQL", "Java", "CSS", "HTML"];

type Skill = {
	category: string;
	description: string;
	stacks: string[];
};

export const skills: Skill[] = [
	{
		category: "Frontend",
		description:
			"Création d'interfaces réactives, accessibles et soignées, avec une attention particulière portée à l'expérience utilisateur et à la maintenabilité du code.",
		stacks: ["React", "SolidJS", "CSS/SASS", "TailwindCSS", "UnoCSS", "Bootstrap"],
	},
	{
		category: "Full-stack",
		description:
			"Conception d'applications web complètes, du rendu côté interface jusqu'à l'intégration des routes, données et logiques métier dans des architectures modernes.",
		stacks: ["Astro", "Next.js", "SolidStart"],
	},
	{
		category: "Backend",
		description:
			"Développement d'API robustes, lisibles et évolutives, orientées performance, clarté des contrats et intégration fluide avec les services externes.",
		stacks: ["Express", "Hono", "Elysia", "Symfony"],
	},
	{
		category: "Bases de données",
		description:
			"Modélisation et exploitation de bases relationnelles ou orientées documents, avec une approche pragmatique sur la structure, les performances et la fiabilité.",
		stacks: ["MySQL", "SQLite", "PostgreSQL", "MongoDB", "Redis", "Valkey"],
	},
	{
		category: "Runtime & outils",
		description:
			"Maîtrise de l'environnement de développement et de déploiement pour produire des projets stables, reproductibles et simples à maintenir au quotidien.",
		stacks: ["NodeJS / Bun", "Docker", "Git", "Linux"],
	},
	{
		category: "IA",
		description:
			"Intégration de briques IA utiles en production: appels modèles, recherche vectorielle, agents avec outils et protocoles d'orchestration pour des workflows concrets.",
		stacks: ["OpenAI API", "Qdrant", "Tool-Calling", "A2A", "MCP", "Vercel AI SDK"],
	},
];

export const stack = [...new Set(skills.flatMap((skill) => skill.stacks))];
