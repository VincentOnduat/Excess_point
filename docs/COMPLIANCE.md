# Compliance notes — read before you publish anything

This isn't legal advice (neither of us is a lawyer or FCA compliance officer) —
it's a working checklist based on FCA and ASA guidance current as of September
2026. Confirm anything load-bearing with the FCA or a compliance advisor
before you spend real ad budget or reach real scale.

## What this site is, deliberately

Excess Point is built as a **pure affiliate / content site** — not a broker,
not an introducer, not an appointed representative. That means:

- We never advise on, arrange, or sell a specific policy ourselves.
- We never hold client money.
- We only ever link out to *already FCA-authorised* insurers, brokers or
  comparison sites, via their own affiliate programs.

The moment any of that changes (e.g. you want to advise on which policy to
pick, or get paid per introduction rather than per affiliate click), the
regulatory picture changes with it — see the "other structures" note at the
bottom.

## CAP Code disclosure — non-negotiable

The Advertising Standards Authority treats affiliate content as advertising,
full stop, whether you wrote it or not.

- Every piece of content with an affiliate link needs an **upfront, obvious**
  label — "(Ad)" in a title/thumbnail, or "#ad" as the *first* hashtag on
  social. A disclosure buried in a bio or an "About" page is not enough.
- "Affiliate link" alone is not considered widely understood by consumers —
  ASA guidance recommends "(Ad)" specifically.
- This applies per-post. A blanket disclaimer on your homepage doesn't cover
  a TikTok caption or an Instagram carousel — each one needs its own label.

Every post JSON file in `content/posts/` has a `disclosureRequired` field —
treat that as a reminder, not a formality.

## Before you run paid ads

- **Google Ads**: in the UK, financial services ads (this includes insurance
  affiliate links) require **advertiser verification**, and for an affiliate
  that verification has to be submitted *by the FCA-authorised firm you're
  promoting* — you can't self-serve it. Ask your affiliate program's manager
  whether they'll sponsor your verification before you plan a Google Ads
  budget around this.
- **Meta / Microsoft Ads** run similar financial-services verification
  requirements — check before planning spend there too.
- Several UK insurance comparison affiliate programs **explicitly ban PPC
  bidding and/or paid social promotion** of their program (this was true of
  at least one major comparison site's Awin listing as of September 2026).
  Read each program's specific terms before running any paid campaign — a
  violation risks the whole affiliate account, not just the one ad.

Given the above, organic content (SEO, organic social, email if a program
allows it) is the realistic default channel until/unless a specific program
sponsors paid verification for you.

## Per-program checklist (fill in as you apply)

| Program | Commission model | PPC allowed? | Paid social allowed? | Email allowed? | Notes |
|---|---|---|---|---|---|
| | | | | | |

## If you ever want more than pure affiliate

- **Introducer Appointed Representative (IAR)**: you'd need an FCA-authorised
  Principal firm to appoint you. They approve every piece of your marketing
  before it goes out, and you still can't advise, arrange contracts, or
  handle money. Faster than full authorisation, still not instant.
- **Full FCA authorisation**: needed to actually broker/advise. Typically a
  several-month process with capital, PI insurance and ongoing compliance
  obligations — not a 2-month project.

See the FCA's own guidance at [fca.org.uk/firms/authorisation](https://www.fca.org.uk/firms/authorisation)
and the CAP Code guidance at [asa.org.uk/advice-online/affiliate-marketing.html](https://www.asa.org.uk/advice-online/affiliate-marketing.html).
