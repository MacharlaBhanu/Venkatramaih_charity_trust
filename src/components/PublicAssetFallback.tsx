import { useEffect } from 'react';

const githubPagesBase = import.meta.env.BASE_URL.replace(/\/$/, '');

const needsBasePath = (pathname: string) =>
  pathname.startsWith('/assets/') ||
  pathname.startsWith('/reference/') ||
  pathname === '/logo.png';

export default function PublicAssetFallback() {
  useEffect(() => {
    if (!githubPagesBase) return;

    const repairImagePath = (event: Event) => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement)) return;
      if (image.dataset.assetRetried === 'true') return;

      const url = new URL(image.src);
      if (url.origin !== window.location.origin || !needsBasePath(url.pathname)) return;

      image.dataset.assetRetried = 'true';
      image.src = `${window.location.origin}${githubPagesBase}${url.pathname}${url.search}`;
    };

    document.addEventListener('error', repairImagePath, true);
    return () => document.removeEventListener('error', repairImagePath, true);
  }, []);

  return null;
}
