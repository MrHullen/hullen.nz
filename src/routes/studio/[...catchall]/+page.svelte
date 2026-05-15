<script>
  import { onMount } from 'svelte';
  import { renderStudio } from 'sanity';
  import config from '$lib/sanity.config.ts';

  onMount(() => {
    renderStudio(document.getElementById('sanity-studio'), config);
  });
</script>

<div id="sanity-studio" class="h-screen max-h-[100dvh] w-full absolute inset-0 z-[9999]"></div>
