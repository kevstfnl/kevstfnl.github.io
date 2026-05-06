let body: HTMLElement;
let desktopMedia: MediaQueryList;

export function initSidebar() {
	body = document.body;
	desktopMedia = window.matchMedia("(min-width: 48rem)");

	document.addEventListener("click", onSidebarClick);
	document.addEventListener("keydown", onSidebarKeydown);
	desktopMedia.addEventListener("change", onDesktopChange);
	syncControls(false);
}

function onSidebarClick(event: MouseEvent) {
	const target = event.target;
	if (!(target instanceof Element)) return;

	if (target.closest("[data-toggle-sidebar]")) {
		toggleSidebar();
		return;
	}

	if (target.closest("[data-close-sidebar]")) {
		closeSidebar();
		return;
	}

	if (target.closest("[data-sidebar-link]")) {
		closeSidebar();
	}
}

function onSidebarKeydown(event: KeyboardEvent) {
	if (event.key !== "Escape") return;
	if (!isSidebarOpen()) return;

	closeSidebar();
}

function onDesktopChange(event: MediaQueryListEvent) {
	if (!event.matches) return;
	closeSidebar();
}

function isSidebarOpen() {
	return body.dataset.sidebarOpen === "true";
}

function toggleSidebar() {
	if (desktopMedia.matches) return;

	if (isSidebarOpen()) {
		closeSidebar();
		return;
	}

	openSidebar();
}

function openSidebar() {
	body.dataset.sidebarOpen = "true";
	syncControls(true);
}

function closeSidebar() {
	body.dataset.sidebarOpen = "false";
	syncControls(false);
}

function syncControls(isOpen: boolean) {
	document.querySelectorAll<HTMLElement>("[data-toggle-sidebar]").forEach((button) => {
		button.setAttribute("aria-expanded", String(isOpen));
		button.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
		button.setAttribute("title", isOpen ? "Fermer le menu" : "Ouvrir le menu");
	});

	const sidebar = document.getElementById("mobile-sidebar");
	if (!sidebar) return;

	sidebar.setAttribute("aria-hidden", String(!isOpen));
}
