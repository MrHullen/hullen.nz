<script>
  import { lightbox } from '$lib/lightboxStore';
  import { fade } from 'svelte/transition';
  
  function close() {
    lightbox.set({ isOpen: false, src: '', alt: '' });
  }
  
  // Allow closing with the Escape key
  function handleKeydown(event) {
    if (event.key === 'Escape') close();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if $lightbox.isOpen}
  <div 
    class="fixed inset-0 z-[99999] flex items-center justify-center bg-[#131313]/95 backdrop-blur-sm cursor-zoom-out p-4 md:p-12"
    on:click={close}
    transition:fade={{ duration: 150 }}
  >
    <button class="absolute top-6 right-6 text-[#fe00fe] font-mono hover:text-[#00fbfb] transition-colors">
      [ CLOSE ]
    </button>
    <img 
      src={$lightbox.src} 
      alt={$lightbox.alt} 
      class="max-w-full max-h-full object-contain border-4 border-surface-container-highest shadow-2xl cursor-auto"
      on:click|stopPropagation 
    />
  </div>
{/if}
