<script>
  import GlossaryChip from './GlossaryChip.svelte';
  import ComparisonTable from './ComparisonTable.svelte';
  import Checklist from './Checklist.svelte';
  import AffiliateCTA from './AffiliateCTA.svelte';

  /** @type {import('$lib/data/categories.js').categories[number]} */
  export let category;
</script>

<section class="cat" id={category.id}>
  <div class="wrap">
    <div class="cat-head">
      <span class="cat-num mono">{category.num}</span>
      <h2>{category.name}</h2>
    </div>
    <p class="cat-intro">{category.intro}</p>

    <div class="chips">
      {#each category.glossary as g}
        <GlossaryChip term={g.term} def={g.def} />
      {/each}
    </div>

    <div class="grid2">
      <ComparisonTable table={category.table} />
      <Checklist items={category.checklist} />
    </div>

    <AffiliateCTA categoryId={category.id} categoryName={category.name} />
  </div>
</section>

<style>
  .cat { padding: 52px 0; border-top: 1px solid var(--border); }
  .cat-head { display: flex; align-items: baseline; gap: 14px; flex-wrap: wrap; margin-bottom: 6px; }
  .cat-num { color: var(--text-muted); font-size: 0.85rem; }
  .cat-head h2 { font-size: 1.7rem; font-weight: 600; }
  .cat-intro { color: var(--text-muted); max-width: 62ch; margin: 14px 0 22px; }
  .chips { display: flex; flex-direction: column; gap: 8px; margin-bottom: 30px; }
  .chips :global(button) { align-self: flex-start; }
  .grid2 { display: grid; grid-template-columns: 1.4fr 1fr; gap: 40px; align-items: start; }

  @media (max-width: 760px) {
    .grid2 { grid-template-columns: 1fr; }
  }
</style>
