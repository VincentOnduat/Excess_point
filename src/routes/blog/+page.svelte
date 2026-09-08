<script>
  export let data;
</script>

<svelte:head>
  <title>Guides — Excess Point</title>
</svelte:head>

<div class="wrap posts-wrap">
  <h1>Guides</h1>
  <p class="sub">The source articles behind the social posts — each one gets its own caption template in <code>scripts/new-post-template.md</code>.</p>

  {#if data.posts.length === 0}
    <p class="empty">No guides published yet. Add a JSON file to <code>content/posts/</code> to see it here.</p>
  {:else}
    <ul class="posts">
      {#each data.posts as post}
        <li>
          <a href="/blog/{post.slug}">
            <span class="cat mono">{post.category}</span>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .posts-wrap { padding: 48px 0 64px; }
  h1 { font-size: 2rem; margin-bottom: 10px; }
  .sub { color: var(--text-muted); max-width: 60ch; margin-bottom: 32px; }
  .empty { color: var(--text-muted); }
  .posts { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 20px; }
  .posts a {
    display: block;
    text-decoration: none;
    color: inherit;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 20px 22px;
  }
  .cat {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--accent-strong);
  }
  .posts h2 { font-size: 1.15rem; margin: 8px 0 6px; }
  .posts p { color: var(--text-muted); margin: 0; font-size: 0.92rem; }
</style>
