export type Technologie = {
	label: string;
	iconName: string;
};

export type Skill = {
	title: string;
	subtitle: string;
	description: string;
	iconName: string;
	technologies: Technologie[];
};

export const skills: Skill[] = [
	{
		title: "Frontend",
		subtitle: "Développement UX - UI",
		description: "Interfaces modernes, accessibles et réactives, avec un soin particulier sur les micro-interactions.",
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
		title: "Backend",
		subtitle: "Développement - Base de données",
		description: "Interfaces modernes, accessibles et réactives, avec un soin particulier sur les micro-interactions.",
		iconName: "ri:puzzle-line",
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
				label: "MongoDB"
			},
			{
				iconName: "devicon:redis",
				label: "Redis"
			},
		]
	},
]
