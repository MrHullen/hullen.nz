<script>
  import { urlFor } from '$lib/sanity';

  export let value;
</script>

{#if value && value.asset}
  <img
    src={urlFor(value.asset).url()}
    alt={value.alt || ''}
    class="w-full border-4 border-surface-container-highest my-8 grayscale hover:grayscale-0 transition-all duration-500"
  />
{/if}
