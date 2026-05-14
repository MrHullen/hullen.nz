<script>
  import { urlFor } from '$lib/sanity';
  export let portableText = {};
  export let index = undefined;
  export let isInline = undefined;

  // Silence unused export warnings
  $: _silenceWarnings = { index, isInline };
  
  // Extract the actual image block data
  $: imageData = portableText?.value;
</script>

{#if imageData && imageData.asset}
  <img
    src={urlFor(imageData.asset).url()}
    alt={imageData.alt || ''}
    class="w-full border-4 border-surface-container-highest my-8"
    style="position: relative; z-index: 9999;"
  />
{/if}
