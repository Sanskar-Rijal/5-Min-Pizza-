export function flyToCart(imageElement, cartElement) {
  // Get positions
  const imageRect = imageElement.getBoundingClientRect();
  const cartRect = cartElement.getBoundingClientRect();

  // Clone the currently selected image
  const clone = imageElement.cloneNode(true);
  clone.style.position = "fixed";
  clone.style.left = `${imageRect.left}px`;
  clone.style.top = `${imageRect.top}px`;
  clone.style.width = `${imageRect.width}px`;
  clone.style.height = `${imageRect.height}px`;
  clone.style.zIndex = "9999";
  clone.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  clone.style.pointerEvents = "none";

  document.body.appendChild(clone);

  // animation
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      // Calculate destination
      const endX = cartRect.left + cartRect.width / 2 - imageRect.width / 2;
      const endY = cartRect.top + cartRect.height / 2 - imageRect.height / 2;

      clone.style.left = `${endX}px`;
      clone.style.top = `${endY}px`;
      clone.style.transform = "scale(0.2)";
      clone.style.opacity = "0.5";
    });
  });

  // Removing clone
  setTimeout(() => {
    clone.remove();
  }, 800);
}
