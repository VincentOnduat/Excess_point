/** @typedef {import('$lib/content/posts/types.js').Post} Post */

export const prerender = true;

export function load() {
  /** @type {Record<string, { default: Post }>} */
  const files = import.meta.glob('/src/lib/content/posts/*.json', { eager: true });
  const posts = Object.values(files)
    .map((f) => f.default)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return { posts };
}
