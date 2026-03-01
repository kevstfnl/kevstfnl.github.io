document.addEventListener("pointerdown", processWave);

function processWave(e: PointerEvent) {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    const target = e.target;
    if (!(target instanceof Element)) return;

    const button = target.closest<HTMLElement>(".btn");
    if (!button) return;
    if (button.matches(":disabled, [aria-disabled='true']")) return;

    const rect = button.getBoundingClientRect();
    const originX = e.clientX - rect.left;
    const originY = e.clientY - rect.top;
    const rippleSize = getRippleSize(rect, originX, originY);

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = `${rippleSize}px`;
    ripple.style.height = `${rippleSize}px`;
    ripple.style.left = `${originX - rippleSize / 2}px`;
    ripple.style.top = `${originY - rippleSize / 2}px`;

    const ripples = button.querySelectorAll(".ripple");
    if (ripples.length >= 6) {
        ripples[0]?.remove();
    }

    button.append(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}

function getRippleSize(rect: DOMRect, x: number, y: number): number {
    const farthestX = Math.max(x, rect.width - x);
    const farthestY = Math.max(y, rect.height - y);
    return Math.hypot(farthestX, farthestY) * 2;
}
