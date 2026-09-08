<script>
  /** @type {string[]} */
  export let items;
</script>

<ul class="checklist">
  {#each items as item, i}
    <li>
      <span class="n mono">{String(i + 1).padStart(2, '0')}</span>
      <span>{item}</span>
    </li>
  {/each}
</ul>

<style>
  .checklist { list-style: none; margin: 0; padding: 0; background: var(--bg-surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
  .checklist li { display: flex; gap: 12px; padding: 13px 16px; font-size: 0.9rem; border-bottom: 1px solid var(--border); }
  .checklist li:last-child { border-bottom: none; }
  .n { color: var(--accent-strong); font-weight: 600; flex-shrink: 0; }
</style>
