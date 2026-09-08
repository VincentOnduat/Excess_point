import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
  const files = import.meta.glob('/content/posts/*.json', { eager: true });
  return Object.values(files).map((f) => ({ slug: f.default.slug }));
}

export function load({ params }) {
  const files = import.meta.glob('/content/posts/*.json', { eager: true });
  const post = Object.values(files)
    .map((f) => f.default)
    .find((p) => p.slug === params.slug);

  if (!post) throw error(404, 'Guide not found');
  return { post };
}
