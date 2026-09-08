<script>
  export let data;
  $: post = data.post;
</script>

<svelte:head>
  <title>{post.title} — Excess Point</title>
</svelte:head>

<article class="wrap post">
  <span class="cat mono">{post.category} insurance</span>
  <h1>{post.title}</h1>
  <p class="meta mono">{post.date}{post.disclosureRequired ? ' · (Ad) contains affiliate links' : ''}</p>

  {#each post.body as para}
    <p>{para}</p>
  {/each}

  <div class="caption-box">
    <div class="caption-label mono">Social caption (paste into the post, don't retype)</div>
    <p class="caption">{post.socialCaption}</p>
  </div>
</article>

<style>
  .post { padding: 48px 0 64px; max-width: 680px; }
  .cat { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent-strong); }
  h1 { font-size: 2rem; margin: 10px 0 8px; }
  .meta { color: var(--text-muted); font-size: 0.8rem; margin-bottom: 28px; }
  .post p { font-size: 1.02rem; margin: 0 0 18px; }
  .caption-box {
    margin-top: 36px;
    background: var(--bg-surface-2);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 18px 20px;
  }
  .caption-label { font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px; }
  .caption { margin: 0; font-size: 0.92rem; }
</style>
