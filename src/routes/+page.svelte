<script>
  export let data;
  export let params = {};
</script>

<body class="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
  <!-- Main Content -->
  <main class="pt-16 xl:pl-64 min-h-screen relative overflow-hidden">
    <!-- CRT Scanline Overlay -->
    <div class="fixed inset-0 crt-overlay z-[100] mix-blend-overlay"></div>
    <!-- Hero Section -->
    <section class="relative min-h-[819px] flex flex-col justify-center px-8 md:px-16 py-20 bg-surface">
      <div class="absolute inset-0 dither-pattern opacity-20"></div>
      <div class="relative z-10 max-w-4xl">
        <div class="inline-block bg-primary-fixed text-on-primary-fixed px-3 py-1 mb-6 font-label text-xs font-bold uppercase tracking-widest">CONNECTION_ESTABLISHED // PORT: 8080</div>
        <h1 class="font-headline text-5xl md:text-8xl font-black italic text-primary-fixed tracking-tighter leading-none mb-6 drop-shadow-[4px_4px_0_#fe00fe]">
          WELCOME TO THE<br />HULLEN ARCHIVE
        </h1>
        <p class="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-10 border-l-4 border-secondary-container pl-6">Digital architect by day, miniature war-painter by night. Building immersive web environments and breathing life into grim-dark lead.</p>
        <div class="flex flex-wrap gap-4">
          <button class="bg-primary-fixed text-on-primary-fixed px-8 py-4 font-headline font-black uppercase tracking-tighter text-lg hover:shadow-[0_0_20px_#00fbfb] transition-all active:translate-x-1 active:translate-y-1"> INITIALIZE_CONTACT </button>
          <button class="border-2 border-secondary-container text-secondary-container px-8 py-4 font-headline font-black uppercase tracking-tighter text-lg hover:bg-secondary-container hover:text-white transition-all active:translate-x-1 active:translate-y-1"> VIEW_REPOSITORY </button>
        </div>
      </div>
      <!-- Hero Decorative Graphic -->
      <div class="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 border-y-8 border-l-8 border-surface-container-high opacity-50 hidden lg:block">
        <div class="w-full h-full bg-surface-container-low flex items-center justify-center p-8">
          <div class="w-full aspect-square border-4 border-dashed border-primary-fixed/20 animate-spin-slow"></div>
        </div>
      </div>
    </section>
    <!-- Hobby Projects: Armies -->
    <section class="px-8 md:px-16 py-20 bg-surface-container-low relative">
      <div class="flex justify-between items-end mb-12">
        <div>
          <h2 class="font-headline text-4xl md:text-6xl font-black italic text-secondary-container tracking-tighter uppercase mb-2">HOBBY_PROJECTS</h2>
          <p class="font-label text-primary-fixed text-xs tracking-widest">WARHAMMER 40,000 PAINTING &amp; MODELLING</p>
        </div>
        <div class="hidden md:block h-[2px] flex-grow mx-8 bg-surface-container-highest"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each data.armies ?? [] as army}
          <div class="bg-surface border-4 border-surface-container-highest group hover:border-secondary-container transition-colors">
            <div class="h-48 bg-surface-container flex items-center justify-center relative overflow-hidden">
              {#if army.imageUrl}
                <img alt={army.name} class="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" src={army.imageUrl} />
              {:else}
                <span class="material-symbols-outlined text-secondary-container/30 text-6xl">shield</span>
              {/if}
              <div class="absolute inset-0 bg-secondary-container/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="p-6">
              <span class="bg-secondary-container text-on-secondary-fixed px-2 py-0.5 font-label text-[10px] font-bold mb-3 inline-block">ARMY_ROSTER</span>
              <h3 class="font-headline font-black text-white text-xl mb-2">{army.name}</h3>
              <p class="font-body text-xs text-on-surface-variant leading-relaxed">{army.lore}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>
    <!-- Instagram Banner -->
    <section class="px-8 md:px-16 py-12 bg-surface-container-low">
      <div class="bg-secondary-container flex flex-col md:flex-row items-center justify-between p-8 text-on-secondary-fixed gap-6">
        <div class="flex items-center gap-6">
          <span class="material-symbols-outlined text-5xl">camera</span>
          <div>
            <h3 class="font-headline text-3xl font-black italic leading-none mb-2 uppercase">INSTAGRAM_FEED</h3>
            <p class="font-body font-bold">DAILY UPDATES FROM THE PAINTING DESK. WIP, TUTORIALS, AND COMPLETED SQUADS.</p>
          </div>
        </div>
        <a class="inline-flex items-center gap-2 border-b-4 border-on-secondary-fixed font-headline font-black uppercase text-sm hover:gap-4 transition-all flex-shrink-0" href="#">FOLLOW_PATH</a>
      </div>
    </section>
    <!-- Artisanal Handwritten Code -->
    <section class="px-8 md:px-16 py-20 bg-surface">
      <div class="mb-16">
        <h2 class="font-headline text-4xl md:text-6xl font-black italic text-primary-fixed tracking-tighter uppercase mb-4">ARTISANAL_HANDWRITTEN_CODE</h2>
        <div class="flex gap-4">
          <span class="font-label text-xs px-2 py-1 bg-surface-container-highest text-on-surface-variant">TOTAL: {String((data.handwrittenCode ?? []).length).padStart(2, '0')}</span>
          <span class="font-label text-xs px-2 py-1 bg-surface-container-highest text-on-surface-variant">TYPE: ARTISANAL</span>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each data.handwrittenCode ?? [] as project}
          <div class="bg-surface border-4 border-surface-container-highest group hover:border-primary-fixed transition-colors">
            <div class="h-40 bg-surface-container flex items-center justify-center relative overflow-hidden">
              {#if project.image}
                <img alt={project.title} class="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" src={project.image} />
              {:else}
                <span class="material-symbols-outlined text-primary-fixed/30 text-6xl">code</span>
              {/if}
              <div class="absolute inset-0 bg-primary-fixed/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="p-6">
              <h3 class="font-headline font-black text-white text-xl mb-2">{project.title}</h3>
              <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-4">{project.description}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                {#each project.techStack as tech}
                  <span class="font-label text-[10px] px-2 py-0.5 bg-surface-container-highest text-secondary-container">{tech}</span>
                {/each}
              </div>
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
        {/each}
      </div>
    </section>
    <!-- Vibe Code -->
    <section class="px-8 md:px-16 py-20 bg-surface-container-low">
      <div class="mb-16">
        <h2 class="font-headline text-4xl md:text-6xl font-black italic text-primary-fixed tracking-tighter uppercase mb-4">VIBE_CODE</h2>
        <div class="flex gap-4">
          <span class="font-label text-xs px-2 py-1 bg-surface-container-highest text-on-surface-variant">TOTAL: {String((data.vibeCode ?? []).length).padStart(2, '0')}</span>
          <span class="font-label text-xs px-2 py-1 bg-surface-container-highest text-on-surface-variant">STATUS: VIBING</span>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each data.vibeCode ?? [] as project}
          <div class="bg-surface border-4 border-surface-container-highest group hover:border-primary-fixed transition-colors">
            <div class="h-40 bg-surface-container flex items-center justify-center relative overflow-hidden">
              {#if project.image}
                <img alt={project.title} class="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" src={project.image} />
              {:else}
                <span class="material-symbols-outlined text-primary-fixed/30 text-6xl">deployed_code</span>
              {/if}
              <div class="absolute inset-0 bg-primary-fixed/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="p-6">
              <h3 class="font-headline font-black text-white text-xl mb-2">{project.title}</h3>
              <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-4">{project.description}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                {#each project.techStack as tech}
                  <span class="font-label text-[10px] px-2 py-0.5 bg-surface-container-highest text-secondary-container">{tech}</span>
                {/each}
              </div>
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
        {/each}
      </div>
    </section>
    <!-- Blog / Log Entries -->
    <section class="px-8 md:px-16 py-20 bg-surface">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center gap-4 mb-12">
          <h2 class="font-headline text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter">TRANS_MISSIONS</h2>
          <div class="h-1 flex-grow bg-primary-fixed/20"></div>
        </div>
        <div class="space-y-8">
          {#each data.blogPosts ?? [] as post, i}
            <a href="/blog/{post.slug}" class="block group relative p-6 bg-surface-container-low border-l-4 border-secondary-container hover:bg-surface-container transition-colors cursor-pointer no-underline">
              <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <span class="font-label text-xs text-secondary-container font-black">[ LOG_ID: {String(1042 - i).padStart(4, '0')} ]</span>
                <span class="font-label text-xs text-on-surface-variant opacity-50">STARDATE: {post.date}</span>
                <span class="hidden md:block h-3 w-[1px] bg-surface-container-highest"></span>
                <span class="font-label text-xs text-primary-fixed">TAG: {post.tag}</span>
              </div>
              <h3 class="font-headline text-2xl font-bold text-white group-hover:text-secondary-container transition-colors mb-4 uppercase">{post.title}</h3>
              <p class="font-body text-on-surface-variant text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
              <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="material-symbols-outlined text-secondary-container">double_arrow</span>
              </div>
            </a>
          {/each}
        </div>
        <div class="mt-12 text-center">
          <button class="font-headline font-black uppercase text-sm text-primary-fixed border-b-2 border-primary-fixed pb-1 hover:text-white hover:border-white transition-all">VIEW_ALL_LOGS</button>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <footer class="flex flex-col items-center justify-center p-12 w-full gap-8 bg-[#131313] border-t-2 border-dashed border-[#353535]">
      <div class="flex gap-12 items-center flex-wrap justify-center">
        <div class="flex flex-col items-center">
          <div class="bg-white p-2 mb-4">
            <img alt="Netscape badge" class="h-8" data-alt="Classic pixelated 88x31 blue and white web badge with Netscape Navigator logo and text" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg_v6s9zHT6UflARQzdsQDylxvp35m3c__b8nuSEChGGH7W5Ou6IbQNX9v6tpptMsdDq_8ovDt9IZG68Pbe5_0gpymazfNuZIixPE8hkwj-DW3QyQvgz8uWScqXlG4Jg1_pWmVchdd5x0uzQ_bydinax2GQPNBaUPjQCHRCNFNWm0wVcrBbE5WAy2URdfH5X_4rf2x57KAV2vYO19kmY3NtHhhjbpjIVO8z_oPnwF3d8hdT2VCtzU5DKrqmc7AQVo1LAt8RirdnB-N" />
          </div>
          <p class="font-mono text-[10px] tracking-widest text-[#00fbfb] uppercase">Optimized for 800x600 resolution</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="bg-primary-fixed p-2 mb-4">
            <span class="material-symbols-outlined text-on-primary-fixed font-bold">html</span>
          </div>
          <p class="font-mono text-[10px] tracking-widest text-[#00fbfb] uppercase">Valid HTML 4.01 Transitional</p>
        </div>
      </div>
      <div class="flex gap-8">
        <a class="font-mono text-[10px] tracking-widest text-white opacity-50 hover:text-[#00fbfb] hover:animate-pulse underline cursor-crosshair" href="#">VISITOR_MAP</a>
        <a class="font-mono text-[10px] tracking-widest text-white opacity-50 hover:text-[#00fbfb] hover:animate-pulse underline cursor-crosshair" href="#">SOURCE_CODE</a>
        <a class="font-mono text-[10px] tracking-widest text-white opacity-50 hover:text-[#00fbfb] hover:animate-pulse underline cursor-crosshair" href="#">GUESTBOOK</a>
      </div>
      <div class="text-center">
        <p class="font-mono text-[10px] tracking-widest text-white opacity-50 mb-2">© 1985-2024 HULLEN.NZ - BEST VIEWED IN NETSCAPE NAVIGATOR</p>
        <p class="font-mono text-[10px] tracking-[0.3em] text-secondary-container animate-pulse">SYSTEM_STABLE // ALL_RIGHTS_RESERVED</p>
      </div>
    </footer>
  </main>
  <!-- Mobile Navigation Bottom Bar -->
  <nav class="md:hidden fixed bottom-0 left-0 w-full h-16 bg-[#131313] shadow-[0_-4px_0_0_#00fbfb] z-[110] flex items-center justify-around px-4">
    <a class="flex flex-col items-center text-[#fe00fe]" href="#">
      <span class="material-symbols-outlined">home</span>
      <span class="text-[8px] font-headline font-bold">HOME</span>
    </a>
    <a class="flex flex-col items-center text-[#00fbfb] opacity-60" href="#">
      <span class="material-symbols-outlined">brush</span>
      <span class="text-[8px] font-headline font-bold">MINIS</span>
    </a>
    <a class="flex flex-col items-center text-[#00fbfb] opacity-60" href="#">
      <span class="material-symbols-outlined">code</span>
      <span class="text-[8px] font-headline font-bold">CODE</span>
    </a>
    <a class="flex flex-col items-center text-[#00fbfb] opacity-60" href="#">
      <span class="material-symbols-outlined">terminal</span>
      <span class="text-[8px] font-headline font-bold">LOGS</span>
    </a>
  </nav>
</body>
