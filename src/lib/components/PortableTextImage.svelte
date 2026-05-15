<script>
  import { urlFor } from '$lib/sanity';
  import { lightbox } from '$lib/lightboxStore';

  export let portableText = {};
  export let index = undefined;
  export let isInline = undefined;

  // Silence unused export warnings
  $: _silenceWarnings = { index, isInline };
  
  // Extract the actual image block data
  $: imageData = portableText?.value;

  function openLightbox() {
    lightbox.set({ isOpen: true, src: urlFor(imageData.asset).url(), alt: imageData.alt || '' });
  }
</script>

{#if imageData && imageData.asset}
  <img
    src={urlFor(imageData.asset).url()}
    alt={imageData.alt || ''}
    class="w-full border-4 border-surface-container-highest my-8 cursor-zoom-in hover:border-[#fe00fe] transition-colors"
    style="position: relative; z-index: 9999;"
    on:click={openLightbox}
    on:keydown={(e) => e.key === 'Enter' && openLightbox()}
    role="button"
    tabindex="0"
  />
{/if}
