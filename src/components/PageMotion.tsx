import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const motionSelector = 'main section, main article';

export default function PageMotion() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname === '/') return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(motionSelector));

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      elements.forEach((element) => element.classList.add('page-motion-visible'));
      return;
    }

    elements.forEach((element, index) => {
      element.classList.add('page-motion-item');
      element.style.setProperty('--page-motion-delay', `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('page-motion-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove('page-motion-item', 'page-motion-visible');
        element.style.removeProperty('--page-motion-delay');
      });
    };
  }, [location.pathname]);

  return null;
}
