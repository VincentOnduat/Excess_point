<script>
  import { getAffiliateLink } from '$lib/data/affiliateLinks.js';

  export let categoryId;
  export let categoryName;

  $: link = getAffiliateLink(categoryId);
  $: hasLink = Boolean(link.url);
</script>

<div class="cat-cta">
  {#if hasLink}
    <a class="btn btn-primary" href={link.url} rel="sponsored noopener" target="_blank">
      Compare {categoryName.toLowerCase()} quotes →
    </a>
    <span class="cta-note mono">(Ad) via {link.program}</span>
  {:else}
    <a class="btn btn-primary" href="#" aria-disabled="true" on:click|preventDefault>
      Compare {categoryName.toLowerCase()} quotes →
    </a>
    <span class="cta-note mono">affiliate link placeholder — add one in content/affiliate-links.json</span>
  {/if}
</div>

<style>
  .cat-cta { margin-top: 26px; display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
  .cta-note { font-size: 0.72rem; color: var(--text-muted); }
</style>
