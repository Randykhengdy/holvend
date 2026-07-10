// Svelte action: fade-up reveal on scroll
// - Elements already in viewport on mount trigger immediately (no jump)
// - Uses rootMargin so element is fully laid out before triggering
export function reveal(node: HTMLElement, { delay = 0 }: { delay?: number } = {}) {
  node.classList.add('reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => node.classList.add('visible'), delay);
          observer.unobserve(node);
        }
      });
    },
    {
      // rootMargin: trigger slightly before element enters — no layout-shift visible
      rootMargin: '0px 0px -40px 0px',
      threshold: 0
    }
  );

  // Check immediately — if already in viewport on mount, reveal without animation
  const rect = node.getBoundingClientRect();
  const inViewOnMount =
    rect.top < window.innerHeight && rect.bottom > 0;

  if (inViewOnMount) {
    // Skip animation entirely for above-the-fold content
    node.classList.remove('reveal');
    node.classList.add('visible');
  } else {
    observer.observe(node);
  }

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
