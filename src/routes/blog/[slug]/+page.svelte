<script>
  import { PortableText } from '@portabletext/svelte';
  import PortableTextImage from '$lib/components/PortableTextImage.svelte';

  export let data;
  export let params = {};
  $: _silenceParams = params;

  const components = {
    types: {
      image: PortableTextImage,
    },
  };
</script>

<article class="px-8 md:px-16 py-12 max-w-4xl mx-auto">
    <!-- Back Link -->
    <a href="/" class="inline-flex items-center gap-2 font-label text-xs text-primary-fixed hover:text-white transition-colors mb-12 group">
      <span class="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
      BACK_TO_ARCHIVE
    </a>

    <!-- Post Header -->
    <header class="mb-12 border-b-2 border-surface-container-highest pb-8">
      <div class="flex flex-wrap items-center gap-4 mb-6">
        {#if data.post.tag}
          <span class="bg-secondary-container text-on-secondary-fixed px-3 py-1 font-label text-xs font-bold uppercase">{data.post.tag}</span>
        {/if}
        {#if data.post.publishedAt}
          <span class="font-label text-xs text-on-surface-variant opacity-50">
            DATESTAMP: {new Date(data.post.publishedAt).toISOString().slice(0, 10).replace(/-/g, '.')}
          </span>
        {/if}
      </div>
      <h1 class="font-headline text-4xl md:text-6xl font-black italic text-primary-fixed tracking-tighter uppercase leading-none">
        {data.post.title}
      </h1>
    </header>

    <!-- Post Body -->
    <div class="font-body text-on-surface-variant prose prose-invert prose-p:leading-relaxed max-w-3xl">
      {#if data.post.body}
        <PortableText value={data.post.body} {components} />
      {:else}
        <p class="font-label text-xs text-on-surface-variant opacity-50">[ NO_CONTENT_TRANSMITTED ]</p>
      {/if}
    </div>

    <!-- Bottom Navigation -->
    <div class="mt-16 pt-8 border-t-2 border-surface-container-highest">
      <a href="/" class="inline-flex items-center gap-2 font-headline font-black uppercase text-sm text-primary-fixed border-b-2 border-primary-fixed pb-1 hover:text-white hover:border-white transition-all">
        <span class="material-symbols-outlined text-sm">arrow_back</span>
        RETURN_TO_MAINFRAME
      </a>
    </div>
</article>
