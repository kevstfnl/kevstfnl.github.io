const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

document.addEventListener("click", onButtonClick);

function onButtonClick(event: MouseEvent) {
	const target = event.target;
	if (!(target instanceof Element)) return;

	const button = target.closest<HTMLElement>(".btn");
	if (!button) return;

	createRipple(button, event);
}

function createRipple(button: HTMLElement, event: MouseEvent) {
	button.querySelectorAll(":scope > .btn-ripple").forEach((ripple) => ripple.remove());

	const rect = button.getBoundingClientRect();
	const hasPointerPosition = event.clientX !== 0 || event.clientY !== 0;
	const x = hasPointerPosition ? event.clientX - rect.left : rect.width / 2;
	const y = hasPointerPosition ? event.clientY - rect.top : rect.height / 2;
	const radius = Math.max(
		Math.hypot(x, y),
		Math.hypot(rect.width - x, y),
		Math.hypot(x, rect.height - y),
		Math.hypot(rect.width - x, rect.height - y),
	);
	const size = radius * 2;

	const ripple = document.createElement("span");
	ripple.className = "btn-ripple";
	ripple.style.width = `${size}px`;
	ripple.style.height = `${size}px`;
	ripple.style.left = `${x - radius}px`;
	ripple.style.top = `${y - radius}px`;

	if (reduce.matches) {
		ripple.style.opacity = "0.18";
		button.append(ripple);
		window.setTimeout(() => ripple.remove(), 180);
		return;
	}

	button.append(ripple);
	requestAnimationFrame(() => {
		ripple.dataset.state = "active";
	});

	ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}
