import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Fades images in as they finish loading, so lazy images fill in gracefully
// instead of popping. Skips eager/hero images (they should paint ASAP for LCP)
// and skips already-cached images (no fade => no flash on revisit).
// ponytail: global DOM sweep per route instead of wrapping every <img>.
export default function ImageReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const imgs = document.querySelectorAll<HTMLImageElement>(
        'img:not([loading="eager"]):not([data-revealed])',
      );
      imgs.forEach((img) => {
        if (img.complete) {
          img.dataset.revealed = '1';
          return;
        }
        img.classList.add('img-reveal');
        const done = () => {
          img.classList.add('is-loaded');
          img.dataset.revealed = '1';
        };
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
