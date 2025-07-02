import { useEffect, useRef } from 'react';

export function useFadeInOnScroll() {
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('fade-in-visible');
        }
      },
      { threshold: 0.1 }
    );
    node.classList.add('fade-in-section');
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
} 