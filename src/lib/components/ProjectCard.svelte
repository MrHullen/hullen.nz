<script>
  export let project;
  export let fallbackIcon = 'code';
</script>

<div class="bg-surface border-4 border-surface-container-highest group hover:border-primary-fixed transition-colors">
  <div class="h-40 bg-surface-container flex items-center justify-center relative overflow-hidden">
    {#if project.image}
      <img alt={project.title} class="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" src={project.image} />
    {:else}
      <span class="material-symbols-outlined text-primary-fixed/30 text-6xl">{fallbackIcon}</span>
    {/if}
    <div class="absolute inset-0 bg-primary-fixed/20 group-hover:bg-transparent transition-colors"></div>
  </div>
  <div class="p-6">
    <h3 class="font-headline font-black text-white text-xl mb-2">{project.title}</h3>
    <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-4">{project.description}</p>
    {#if project.techStack?.length}
      <div class="flex flex-wrap gap-2 mb-4">
        {#each project.techStack as tech}
          <span class="font-label text-[10px] px-2 py-0.5 bg-surface-container-highest text-secondary-container">{tech}</span>
        {/each}
      </div>
    {/if}
    <div class="flex justify-end gap-4">
      {#if project.githubUrl}
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 font-label text-[10px] text-primary-fixed hover:text-white hover:scale-110 transition-all">
          <span class="material-symbols-outlined text-sm">code</span>
          REPO
        </a>
      {/if}
      {#if project.liveUrl}
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 font-label text-[10px] text-primary-fixed hover:text-white hover:scale-110 transition-all">
          <span class="material-symbols-outlined text-sm">public</span>
          LIVE
        </a>
      {/if}
    </div>
  </div>
</div>
