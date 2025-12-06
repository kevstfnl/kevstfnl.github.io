
export type SocialLink = {
	href: string;
	label: string;
	iconName: string;
};

export const socialLinks: SocialLink[] = [
	{
		href: "/linkedin",
		label: "Linkedin",
		iconName: "ri:linkedin-box-line"
	},
	{
		href: "/github",
		label: "Github",
		iconName: "ri:github-line"
	},
	{
		href: "/bluesky",
		label: "Bluesky",
		iconName: "ri:bluesky-line"
	},
];
