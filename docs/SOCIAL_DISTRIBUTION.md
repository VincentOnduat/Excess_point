# Social distribution plan

<img src="assets/social-reach-plan.svg" alt="Excess Point at the centre, reaching out to Instagram, TikTok, X, LinkedIn, YouTube and Pinterest" width="640" />

One hub, six spokes: every guide in `src/lib/content/posts/` gets turned into a
draft for each of these six platforms via `scripts/social/generate.js`, then
edited by hand before it goes out. The site is always the destination the
posts point back to — never the other way round.

## Before you post anywhere: check the program allows it

This is the step it's easiest to skip and most costly to get wrong. Go back
to [`COMPLIANCE.md`](COMPLIANCE.md)'s per-program table and confirm the
specific affiliate program behind that guide's link permits the channel
you're about to post on. At least one major UK insurance comparison
affiliate programme explicitly bans PPC and paid social promotion of its
links as of September 2026 — terms vary by programme and channel, so check
per-post, not once at the start.

## Per-platform disclosure — the part that isn't optional

The ASA's CAP Code treats every one of these as advertising the moment an
affiliate link is involved, regardless of platform:

| Platform | Where the "(Ad)" disclosure has to be |
|---|---|
| Instagram | First line of the caption |
| TikTok | Spoken or on-screen text in the first 3 seconds, *and* as the first hashtag |
| X | Start of the first post in the thread |
| LinkedIn | First line of the post |
| YouTube | Said out loud in the video *and* at the top of the description |
| Pinterest | Start of the pin description |

A disclosure only in a bio, an "About" page, or a blanket footer does not
satisfy the CAP Code for any of these — see `COMPLIANCE.md` for the full
reasoning and sources.

## Workflow

1. Write or finish a guide in `src/lib/content/posts/<slug>.json` (see
   `scripts/new-post-template.md`).
2. Run `node scripts/social/generate.js <slug>` — six draft files land in
   `content/social-drafts/<slug>/`.
3. Edit each draft for its platform: trim to the character limit, add a
   platform-native hook, write the video script where one's needed.
4. Check that day's row in `CONTENT_CALENDAR.md` and the program's row in
   `COMPLIANCE.md` before publishing.
5. Post, with the disclosure exactly where the table above says it goes.

Drafts in `content/social-drafts/` are committed like everything else, so
edits stay versioned — delete a slug's folder once it's posted if you'd
rather not keep old drafts around.
