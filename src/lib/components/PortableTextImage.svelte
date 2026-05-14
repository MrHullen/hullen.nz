<script>
  import { urlFor } from '$lib/sanity';
  export let value = {};
  export let portableText = undefined;
  export let index = undefined;
  export let isInline = undefined;

  // Dummy statement to silence Svelte's "unused export" warnings
  $: _silenceWarnings = { portableText, index, isInline };
</script>

{#if value && value.asset}
  <img
    src={urlFor(value).url()}
    alt={value.alt || 'Blog image'}
    class="w-full border-4 border-surface-container-highest my-8 grayscale hover:grayscale-0 transition-all duration-500"
  />
{:else}
  <div class="p-4 border-2 border-[#fe00fe] text-[#fe00fe] bg-[#131313] font-mono text-xs overflow-x-auto my-8">
    <p class="font-bold mb-2">SYSTEM_WARNING // IMAGE_DATA_UNRESOLVED</p>
    <pre>{JSON.stringify(value, null, 2)}</pre>
  </div>
{/if}
