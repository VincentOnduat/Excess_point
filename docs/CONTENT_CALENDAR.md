# Content calendar template

Copy this table into whatever you actually track weekly work in (Notion,
a spreadsheet, or a Cowork Tasks board). One row per piece of content.
The rule: **the social post is a trailer for the guide, never the whole
argument** — it should make someone curious enough to tap through, where
the actual comparison and the affiliate link live.

| Week | Guide (content/posts/*.json) | Category | Platform(s) | Angle / hook | Disclosure added? | Affiliate link live? |
|---|---|---|---|---|---|---|
| 1 | third-party-vs-comprehensive-car-insurance | Car | Instagram, TikTok | "The middle option that isn't what you think" | ☐ | ☐ |
| 2 | | Home | | | ☐ | ☐ |
| 3 | | Pet | | | ☐ | ☐ |
| 4 | | Life | | | ☐ | ☐ |
| 5 | | Travel | | | ☐ | ☐ |
| 6 | | (revisit best performer) | | | ☐ | ☐ |
| 7 | | | | | ☐ | ☐ |
| 8 | | | | | ☐ | ☐ |

## How a week should actually run

1. Pick the category glossary term or checklist item most people get wrong
   (car's "third party, fire & theft" gap is a good template — it's specific,
   surprising, and true).
2. Write it as a `content/posts/<slug>.json` file — see
   `scripts/new-post-template.md` for the shape.
3. Add the social caption to the same file so it never drifts from the
   article it's supposed to summarise.
4. Check the box in `docs/COMPLIANCE.md`'s per-program table before posting
   anywhere paid.
5. Post, with the (Ad) disclosure as the first line/hashtag, linking to
   `/blog/<slug>`.
