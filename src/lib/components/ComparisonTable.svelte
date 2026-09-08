<script>
  /** @type {{ head: string[], rows: [string, ...boolean[]][] }} */
  export let table;
</script>

<div class="table-wrap">
  <table class="cmp">
    <thead>
      <tr>
        {#each table.head as h}<th>{h}</th>{/each}
      </tr>
    </thead>
    <tbody>
      {#each table.rows as row}
        <tr>
          <td>{row[0]}</td>
          {#each row.slice(1) as included}
            <td>
              {#if included}<span class="tick">✓</span>{:else}<span class="cross">–</span>{/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .table-wrap { overflow-x: auto; }
  table.cmp { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
  table.cmp th,
  table.cmp td { text-align: left; padding: 10px 10px; border-bottom: 1px solid var(--border); }
  table.cmp th { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); font-weight: 600; }
  table.cmp td:not(:first-child),
  table.cmp th:not(:first-child) { text-align: center; }
  table.cmp tbody tr:hover { background: var(--bg-surface); }
  .tick { color: var(--positive); font-weight: 700; }
  .cross { color: var(--warning); font-weight: 700; }
</style>
