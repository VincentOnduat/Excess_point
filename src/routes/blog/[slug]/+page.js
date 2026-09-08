import { error } from '@sveltejs/kit';

/** @typedef {import('$lib/content/posts/types.js').Post} Post */

export const prerender = true;

export function entries() {
  /** @type {Record<string, { default: Post }>} */
  const files = import.meta.glob('/src/lib/content/posts/*.json', { eager: true });
  return Object.values(files).map((f) => ({ slug: f.default.slug }));
}

/** @param {{ params: { slug: string } }} event */
export function load({ params }) {
  /** @type {Record<string, { default: Post }>} */
  const files = import.meta.glob('/src/lib/content/posts/*.json', { eager: true });
  const post = Object.values(files)
    .map((f) => f.default)
    .find((p) => p.slug === params.slug);

  if (!post) throw error(404, 'Guide not found');
  return { post };
}
