# Social distribution scripts

One guide in `src/lib/content/posts/` → one draft per platform in
`content/social-drafts/<slug>/`.

```bash
node scripts/social/generate.js third-party-vs-comprehensive-car-insurance
```

This writes six `.md` files (one per platform in `platforms.json`) with the
disclosure line already in place and the platform's own format/character/
hashtag guidance at the top as a comment — edit each one for its platform
before posting, don't post the raw output.

`platforms.json` is the config: character limits, hashtag norms, and —
most important — exactly where each platform requires the "(Ad)" disclosure
to sit. Some platforms (TikTok, YouTube) need it spoken/on-screen in the
video itself, not just in the caption. Read
[`../../docs/SOCIAL_DISTRIBUTION.md`](../../docs/SOCIAL_DISTRIBUTION.md)
before your first post on a new platform.

Before you run this for real: replace `YOUR-DOMAIN` at the top of
`generate.js` with the site's actual deployed URL.
