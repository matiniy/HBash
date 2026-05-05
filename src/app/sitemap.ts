import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.haidehbashash.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = '2026-05-05';
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/listings',
    '/iabs',
    '/trec-notice',
    '/land2',
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
