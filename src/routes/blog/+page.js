export const prerender = true;

export function load() {
  const files = import.meta.glob('/content/posts/*.json', { eager: true });
  const posts = Object.values(files)
    .map((f) => f.default)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return { posts };
}
