#!/usr/bin/env node
// Turns one src/lib/content/posts/<slug>.json guide into a first-draft skeleton for
// every platform in platforms.json. These are starting points to edit, not
// finished posts — see docs/SOCIAL_DISTRIBUTION.md for the disclosure rules
// each platform actually requires before anything gets published.
//
// Usage: node scripts/social/generate.js <slug>

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');

const slug = process.argv[2];
if (!slug) {
  console.error('Usage: node scripts/social/generate.js <slug>');
  console.error('  (slug = filename of a src/lib/content/posts/*.json file, without .json)');
  process.exit(1);
}

const postPath = join(ROOT, 'src', 'lib', 'content', 'posts', `${slug}.json`);
if (!existsSync(postPath)) {
  console.error(`No post found at src/lib/content/posts/${slug}.json`);
  process.exit(1);
}

const post = JSON.parse(readFileSync(postPath, 'utf8'));
const platforms = JSON.parse(readFileSync(join(__dirname, 'platforms.json'), 'utf8'));

const outDir = join(ROOT, 'content', 'social-drafts', slug);
mkdirSync(outDir, { recursive: true });

const siteUrl = `https://YOUR-DOMAIN/blog/${post.slug}`; // update once the site has a real domain

for (const [key, p] of Object.entries(platforms)) {
  const draft = `# ${p.label} draft — ${post.title}

> Source guide: src/lib/content/posts/${slug}.json
> Format: ${p.format}
> Character guide: ~${p.captionLimit}
> Disclosure: ${p.disclosurePlacement}
> Notes: ${p.notes}

---

(Ad) ${post.socialCaption}

Link: ${siteUrl}

---
Edit above this line. Everything below is scratch space for alternate
hooks, hashtags, or a video script if this platform needs one.
`;
  writeFileSync(join(outDir, `${key}.md`), draft);
}

console.log(`Wrote ${Object.keys(platforms).length} platform drafts to content/social-drafts/${slug}/`);
