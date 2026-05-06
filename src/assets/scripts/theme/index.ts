let html: HTMLElement;
let prefersReducedMotion: MediaQueryList;
let storedTheme: string;

export function initTheme() {
	html = document.documentElement;
	prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
	storedTheme =
		localStorage.getItem("theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

	applyTheme(storedTheme);
	document.addEventListener("click", onThemeToggleClick);
}

function onThemeToggleClick(event: MouseEvent) {
	const target = event.target;
	if (!(target instanceof Element)) return;

	const button = target.closest<HTMLElement>("button[data-toggle-theme]");
	if (!button) return;

	void processEffect(button);
}

function toggleTheme() {
	storedTheme = storedTheme === "dark" ? "light" : "dark";
	applyTheme(storedTheme);
}

function applyTheme(theme: string) {
	localStorage.setItem("theme", theme);
	html.setAttribute("theme", theme);
}

async function processEffect(element: HTMLElement) {
	if (!document.startViewTransition || prefersReducedMotion.matches) {
		toggleTheme();
		return;
	}

	const themeChangeDuration = parseCssTimeToMilliseconds(
		getComputedStyle(html).getPropertyValue("--theme-change-duration"),
	);
	const duration = Number.isFinite(themeChangeDuration) ? themeChangeDuration : 375;

	const { top, left, width, height } = element.getBoundingClientRect();
	const x = left + width / 2;
	const y = top + height / 2;
	const right = window.innerWidth - x;
	const bottom = window.innerHeight - y;
	const radius = Math.hypot(Math.max(x, right), Math.max(y, bottom));

	const transition = document.startViewTransition(() => {
		toggleTheme();
	});
	await transition.ready;

	html.animate(
		{
			clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
		},
		{
			duration,
			easing: "ease-in",
			pseudoElement: "::view-transition-new(root)",
		},
	);
}

export function parseCssTimeToMilliseconds(value: string) {
	const time = value.trim();
	const duration = Number.parseFloat(time);

	if (!Number.isFinite(duration)) return 375;
	if (time.endsWith("ms")) return duration;
	if (time.endsWith("s")) return duration * 1000;

	return duration;
}
