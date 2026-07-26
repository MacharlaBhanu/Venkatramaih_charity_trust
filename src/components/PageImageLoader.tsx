import { useEffect, useState } from 'react';

declare const __SITE_IMAGE_MANIFEST__: string[];

const pagesBase = import.meta.env.BASE_URL.replace(/\/$/, '');

const withPagesBase = (source: string) => {
  if (!source || !pagesBase || !source.startsWith('/')) return source;
  if (source.startsWith(`${pagesBase}/`)) return source;

  if (
    source.startsWith('/assets/') ||
    source.startsWith('/reference/') ||
    source === '/logo.png'
  ) {
    return `${pagesBase}${source}`;
  }

  return source;
};

const preloadImage = (source: string) =>
  new Promise<void>((resolve) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = withPagesBase(source);

    if (image.complete) resolve();
  });

export default function PageImageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const loadSiteImages = async () => {
      const uniqueSources = [...new Set(__SITE_IMAGE_MANIFEST__)];

      if (uniqueSources.length === 0) {
        setProgress(100);
        setIsLoading(false);
        return;
      }

      let loaded = 0;
      await Promise.all(
        uniqueSources.map((source) =>
          preloadImage(source).finally(() => {
            loaded += 1;
            if (!cancelled) {
              setProgress(Math.round((loaded / uniqueSources.length) * 100));
            }
          }),
        ),
      );

      if (!cancelled) {
        setProgress(100);
        setIsLoading(false);
      }
    };

    void loadSiteImages();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="page-image-loader"
      role="status"
      aria-live="polite"
      aria-label={`Loading page images ${progress}%`}
    >
      <img
        src={`${import.meta.env.BASE_URL}assets/home/logo_mark.png`}
        alt=""
        aria-hidden="true"
        className="page-image-loader__logo"
      />
      <p className="page-image-loader__title">Kanneganti Charitable Trust</p>
      <div className="page-image-loader__track" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <p className="page-image-loader__progress">Loading {progress}%</p>
    </div>
  );
}
