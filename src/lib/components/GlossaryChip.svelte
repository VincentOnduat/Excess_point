<script>
  export let term;
  export let def;
  let open = false;
</script>

<button class="chip" class:open on:click={() => (open = !open)} aria-expanded={open}>
  {term}
</button>
{#if open}
  <div class="chip-def">
    <strong>{term}:</strong> {def}
  </div>
{/if}

<style>
  .chip {
    font: inherit;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 7px 13px;
    border-radius: 999px;
    background: var(--bg-surface-2);
    border: 1px solid var(--border);
    cursor: pointer;
    color: var(--text);
    transition: background 0.15s;
  }
  .chip:hover,
  .chip.open { background: var(--accent-tint); }
  .chip-def {
    grid-column: 1 / -1;
    font-size: 0.88rem;
    color: var(--text-muted);
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 12px 16px;
    margin: 8px 0 0;
  }
</style>
