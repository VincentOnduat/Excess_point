<script>
  import Hero from '$lib/components/Hero.svelte';
  import CategorySection from '$lib/components/CategorySection.svelte';
  import Disclosure from '$lib/components/Disclosure.svelte';
  import { categories } from '$lib/data/categories.js';
</script>

<svelte:head>
  <title>Excess Point — compare insurance by what's covered, not just price</title>
</svelte:head>

<Hero />

{#each categories as category}
  <CategorySection {category} />
{/each}

<Disclosure />
