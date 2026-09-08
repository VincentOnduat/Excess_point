# New guide + social post — fill-in template

Use this to draft a new piece consistently (by hand, or as the prompt for an
automated draft you review before publishing — see the README's note on
automation). Once filled in, save the JSON block as
`content/posts/<slug>.json`.

1. **Category** (car / home / pet / life / travel):
2. **The one true, specific, slightly surprising thing** this post explains
   (a glossary term people misunderstand, or a checklist item that's cost
   someone real money):
3. **Title** (state the surprising thing directly, don't tease it):
4. **Excerpt** (one sentence, used as the link preview):
5. **Body** (3–5 short paragraphs, plain language, no invented prices or
   quotes — compare features/terms, not numbers you don't actually have):
6. **Social caption** (the hook + the (Ad) disclosure as the FIRST line or
   hashtag + "link in bio"/link):

```json
{
  "slug": "",
  "title": "",
  "date": "YYYY-MM-DD",
  "category": "",
  "excerpt": "",
  "body": [""],
  "socialCaption": "",
  "disclosureRequired": true
}
```

Before publishing, check `docs/COMPLIANCE.md`'s per-program table for
whichever platform you're posting to.
