<script>
  import "../app.css";
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import { slide } from "svelte/transition";

  let loading = false;
  beforeNavigate(() => (loading = true));
  afterNavigate(() => (loading = false));
</script>

<header>
  <nav class="w-full text-2xl text-center p-2 font-bold">
    <a href="/">Website Al-Quran</a>
  </nav>
</header>
<main>
  <slot />
</main>
{#if loading}
  <div transition:slide class="fixed w-full p-2 text-center bottom-0 bg-white">
    Loading...
  </div>
{/if}

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.blue.50);
    color: theme(colors.blue.950);
  }
</style>
