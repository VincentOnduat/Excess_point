<script>
  import { onMount } from 'svelte';
  import { categories } from '$lib/data/categories.js';

  let activeId = '';

  onMount(() => {
    const targets = [...document.querySelectorAll('section.cat, #disclosure')];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) activeId = e.target.id;
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  });
</script>

<nav class="topnav">
  <div class="topnav-inner wrap">
    <a href="/" class="brand">Excess<span class="dot">·</span>Point</a>
    <div class="navlinks">
      {#each categories as cat}
        <a href="/#{cat.id}" class:active={activeId === cat.id}>{cat.name.split(' ')[0]}</a>
      {/each}
      <a href="/disclosure" class:active={activeId === 'disclosure'}>Disclosure</a>
    </div>
  </div>
</nav>

<style>
  .topnav {
    position: sticky;
    top: 0;
    z-index: 40;
    background: color-mix(in srgb, var(--bg) 88%, transparent);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
  }
  .topnav-inner {
    padding: 14px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
  .brand {
    display: flex;
    align-items: baseline;
    gap: 8px;
    font-family: 'Fraunces', serif;
    font-weight: 600;
    font-size: 1.15rem;
    white-space: nowrap;
    text-decoration: none;
  }
  .brand .dot { color: var(--accent); }
  .navlinks { display: flex; gap: 4px; flex-wrap: wrap; }
  .navlinks a {
    text-decoration: none;
    font-size: 0.86rem;
    font-weight: 600;
    color: var(--text-muted);
    padding: 7px 12px;
    border-radius: 999px;
    transition: color 0.15s, background 0.15s;
  }
  .navlinks a:hover,
  .navlinks a.active {
    color: var(--text);
    background: var(--bg-surface-2);
  }
</style>
