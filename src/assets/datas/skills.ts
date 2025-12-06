export type Technologie = {
	label: string;
	iconName: string;
};

export type Skill = {
	title: string;
	iconName: string;
	technologies: Technologie[];
};
