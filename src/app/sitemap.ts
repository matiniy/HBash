import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.haidehbashash.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/contact', '/services', '/listings', '/iabs', '/trec-notice', '/land2'];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
