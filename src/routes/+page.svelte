<script>
  export let data;

  // Fallback placeholder data for layout preview
  const handwrittenCode = data?.handwrittenCode ?? [
    {
      title: 'HOMEROOM_SORT',
      description: 'Student distribution script for balanced homeroom class generation using constraint satisfaction.',
      techStack: 'Python / Pandas / Git',
      githubUrl: '#',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlizoykof5CF4l7sDxP75uKsGklrQiH35a8s3070rSytsIR2FUomS32pcMv2lePIbESZIb5Oo-TCRpoCofOMhdrNl3QiZ7lhGFX3UpftIoXkICZte4qCRhwKgfu4kny5CzKodzGyOLuQCyI94qbSx4mtkMSlHwBCyuRJyYcGzROOWgLA6dG9RfYK8t7mypnpQLbc-HJ0wNUMf7AoIivlr7FKQe9iS1dPLbHteR5Pol3szF4kxkm1VB8usE80OoGq1zwV5Wh9dk-Xph'
    },
    {
      title: 'IB_CS_WIKI',
      description: 'Static site generator for IB Computer Science curriculum wiki built from Markdown sources.',
      techStack: 'Python / Jinja2 / Markdown',
      githubUrl: '#',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF-zgAH3FiihpKpdqiudb-hrEvqpCbGobkVPZCaixPp3Hn317WfenTecbSQJQOzdKa8sEc4U-EweRNbsfKHm4uW5FVpUocfN4gyH2gwesFKi13zYrrX4wGssUd-ARWsD7ciVhtiJ24K57tHJEuLGxTFwiNF06WeLe2xTNiymBBLAMOsvNTZUgz4Ay8SgL1mk1MoEfXN3Kja8a0O56rqrGeAQZNb1lp5oycmRodGVZFb5I3wKfRAkgzjC_kr9cFuFdE7Ufibg3lIV91'
    },
    {
      title: 'ATTENDANCE_BOT',
      description: 'Discord bot for automated attendance tracking with Google Sheets integration.',
      techStack: 'Node.js / Discord.js / GSheets API',
      githubUrl: '#',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjNVugX8as4yk4UyIvt1d1yr94uElM98jKirB5vUZFMmGsSA21-NMplQzEmg1fw-ShZdR7AWhJ9QjMky5PFHiC-jtQQg4PGZZAdzM00_qXgSMzLRkRKRVxajvpOMSYTVpD9WjQdmZvUXsFlJhzHAfVHGlJx4Zshi4XrznkpTjnfeaaxUdxvLz1ILfigG3bxvY9ybAS7HJnyFJjJKIds4oNtb2rZaLcNmGA0r2Lj9NPp18RlPf-e6P4c_xTG5U9I0XC-Qm-hOPxGtLh'
    }
  ];

  const vibeCode = data?.vibeCode ?? [
    {
      title: 'HULLEN_ARCHIVE',
      description: 'This very site. A retro-futurist personal portfolio built with SvelteKit and Tailwind.',
      techStack: 'SvelteKit / Tailwind / Vercel',
      githubUrl: '#',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9ujXlYEXSIF-Ks2NG-2npzLWw3TwmzZ4QzRWELv4Unq-SPxt0rFXVKgHEUbHHbVQ0Ru-rO16UsSdEkeG9TFVPyhRTkKOOSADQBdSBmPg0_tRxu4Hl0tvWKyPZhIBizxQOZHv0lTrpt7GJXdzKBYeSFxFI-wQAmR78dRW3JZoXlD7WRQlnsFsJEKCv2_3QjjIO-bylY84vuVkWC1VxcfyB5zmtf_OyIBdkr6qoUF2COHLP93JRSpmgllw0xCKe4rPOgXZ_7V_nln2-'
    },
    {
      title: 'PAINT_TRACKER',
      description: 'Hobby project tracker for miniature painting progress with photo timeline.',
      techStack: 'React / Firebase / Cloudinary',
      githubUrl: '#',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEUyFrkkC0sBt-YsTUMr6psG-3rPlXQkJ2x7UK-lhECnG1kzAYyoKWgAaB_AH7kMv-j-41KwiRVHf8m5T0GtSnJHj8w5ETBkbRa0-h3-qGEo4Xhn3oWdZvRWGR7LnW6K5kZXyPddsPusAQ9nsbQC5gRf-QVgT14XTkfLlUXsemj5wfRW1d_3KxkBzmRIbU8APPeKEaEOE39YlHizzmLLufXmhpxr-ZO-fbr2i7HZQwvrv2o1Tmz4iocsH0V_15c9oRjOIqgmAKkiiF'
    }
  ];

  const armies = data?.armies ?? [
    {
      name: 'SOUL HAUNTERS',
      description: 'Night Lords successor warband specializing in terror tactics. Kitbashed from Mk VI marines with extensive green-stuff lightning claw conversions.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3cm6OHFiBr5AjmnEuY9ZaDQ3VhQDuj9wVTLUQkYtHGW9UwVXDoPVQnboFg-z8cef6f_y0na9GsMO6xP-wd2RUUL0QAuUsaUlBStiQQmW3KI7CQ1nWYat9LnPsnafJ-t2O60KrSzgdQGMNcPjY8MntwNpNTdKLjsDzjGkp9A4HphtGVik7hmAS9X94NUnoJjusue_rgpbb2KBwdvMuWO_qDJ8e9g-2nGqTihQdBnd4mqjOgDbtYMimODWa5fQlnSj5KuzjNdQDg6Ge'
    },
    {
      name: "OMNISSIAH'S DIRGE",
      description: 'Adeptus Mechanicus forge world detachment. Heavy weathering with oxide and oil washes over a bone-white and verdigris scheme.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEUyFrkkC0sBt-YsTUMr6psG-3rPlXQkJ2x7UK-lhECnG1kzAYyoKWgAaB_AH7kMv-j-41KwiRVHf8m5T0GtSnJHj8w5ETBkbRa0-h3-qGEo4Xhn3oWdZvRWGR7LnW6K5kZXyPddsPusAQ9nsbQC5gRf-QVgT14XTkfLlUXsemj5wfRW1d_3KxkBzmRIbU8APPeKEaEOE39YlHizzmLLufXmhpxr-ZO-fbr2i7HZQwvrv2o1Tmz4iocsH0V_15c9oRjOIqgmAKkiiF'
    },
    {
      name: 'THE VOID-CLADE SANCTION',
      description: 'Genestealer Cult mining operation. Converted from Necromunda kits with custom 3D-printed industrial bases.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2H9IUJNaueh9I-d78eA_CtD5WcZxfvc6hUSMQKTyk5heAmvqaXdfk6iTxUe93ABY5uKblroxBrm_rFJgEJ2vq8xilI8ric3AKRzW5jmwtc9k4eM9BxtZDZ9mcA_5pwkA_KzRB6ogFwLN92qdvQqm4m8viuHChFAkRSV6Wb-6YXgTnDb3G5AxhYTbnWRTXRFJuEQYf7C3_ieccjzP3K3SyDmGv3Yfqu5E0G_FjD_lxFrRd3v3VflzEPAxCZb3geGPYq8TvHrpx4mDi'
    }
  ];

  const blogPosts = data?.blogPosts ?? [
    {
      id: '1042',
      title: 'Batch painting 20 cultists without losing sanity',
      date: '2024.03.14',
      tag: 'WARHAMMER_40K',
      excerpt: 'The secret lies in the contrast paints and a very specific playlist of 80s synthwave. Here\'s my breakdown of the process...',
      color: 'secondary-container'
    },
    {
      id: '1041',
      title: 'Why 0px border radius is the future of the past',
      date: '2024.02.28',
      tag: 'DEV_LOG',
      excerpt: 'Modern UI design has gone too soft. It\'s time to bring back the sharp corners and technical precision of early computing...',
      color: 'primary-fixed'
    },
    {
      id: '1040',
      title: 'Final photoshoot: Imperial Knight Aurelius',
      date: '2024.01.15',
      tag: 'GALLERY',
      excerpt: 'Six months of work culminating in 150 decals and 4 layers of reactive weathering. The largest project to date...',
      color: 'secondary-container'
    }
  ];
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
          <h2 class="font-headline text-4xl md:text-6xl font-black italic text-secondary-container tracking-tighter uppercase mb-2">GRIMDARK_GALLERY</h2>
          <p class="font-label text-primary-fixed text-xs tracking-widest">WARHAMMER 40,000 PAINTING &amp; MODELLING</p>
        </div>
        <div class="hidden md:block h-[2px] flex-grow mx-8 bg-surface-container-highest"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each armies as army}
          <div class="relative group cursor-pointer overflow-hidden border-4 border-surface-container-highest">
            <img alt={army.name} class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" src={army.image} />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div class="absolute inset-0 border-8 border-secondary-container/20 group-hover:border-secondary-container/40 transition-colors"></div>
            <div class="absolute bottom-0 left-0 p-6">
              <span class="bg-secondary-container text-on-secondary-fixed px-3 py-1 font-label text-xs font-bold mb-3 inline-block">ARMY_ROSTER</span>
              <h3 class="font-headline text-2xl font-black text-white italic mb-2">{army.name}</h3>
              <p class="text-on-surface-variant max-w-md font-body text-sm">{army.description}</p>
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
        <h2 class="font-headline text-4xl md:text-6xl font-black italic text-primary-fixed tracking-tighter uppercase mb-4">HANDWRITTEN_CODE</h2>
        <div class="flex gap-4">
          <span class="font-label text-xs px-2 py-1 bg-surface-container-highest text-on-surface-variant">TOTAL: {String(handwrittenCode.length).padStart(2, '0')}</span>
          <span class="font-label text-xs px-2 py-1 bg-surface-container-highest text-on-surface-variant">TYPE: ARTISANAL</span>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each handwrittenCode as project}
          <div class="bg-surface border-4 border-surface-container-highest group hover:border-primary-fixed transition-colors">
            <div class="h-40 bg-surface-container flex items-center justify-center relative overflow-hidden">
              <img alt={project.title} class="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" src={project.image} />
              <div class="absolute inset-0 bg-primary-fixed/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="p-6">
              <h3 class="font-headline font-black text-white text-xl mb-2">{project.title}</h3>
              <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-6">{project.description}</p>
              <div class="flex justify-between items-center">
                <span class="font-label text-[10px] text-secondary-container">{project.techStack}</span>
                <a href={project.githubUrl} class="inline-flex items-center">
                  <span class="material-symbols-outlined text-primary-fixed text-sm">open_in_new</span>
                </a>
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
          <span class="font-label text-xs px-2 py-1 bg-surface-container-highest text-on-surface-variant">TOTAL: {String(vibeCode.length).padStart(2, '0')}</span>
          <span class="font-label text-xs px-2 py-1 bg-surface-container-highest text-on-surface-variant">STATUS: VIBING</span>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each vibeCode as project}
          <div class="bg-surface border-4 border-surface-container-highest group hover:border-primary-fixed transition-colors">
            <div class="h-40 bg-surface-container flex items-center justify-center relative overflow-hidden">
              <img alt={project.title} class="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" src={project.image} />
              <div class="absolute inset-0 bg-primary-fixed/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="p-6">
              <h3 class="font-headline font-black text-white text-xl mb-2">{project.title}</h3>
              <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-6">{project.description}</p>
              <div class="flex justify-between items-center">
                <span class="font-label text-[10px] text-secondary-container">{project.techStack}</span>
                <a href={project.githubUrl} class="inline-flex items-center">
                  <span class="material-symbols-outlined text-primary-fixed text-sm">open_in_new</span>
                </a>
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
          {#each blogPosts as post}
            <article class="group relative p-6 bg-surface-container-low border-l-4 border-{post.color} hover:bg-surface-container transition-colors cursor-pointer">
              <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <span class="font-label text-xs text-{post.color} font-black">[ LOG_ID: {post.id} ]</span>
                <span class="font-label text-xs text-on-surface-variant opacity-50">STARDATE: {post.date}</span>
                <span class="hidden md:block h-3 w-[1px] bg-surface-container-highest"></span>
                <span class="font-label text-xs text-primary-fixed">TAG: {post.tag}</span>
              </div>
              <h3 class="font-headline text-2xl font-bold text-white group-hover:text-{post.color} transition-colors mb-4 uppercase">{post.title}</h3>
              <p class="font-body text-on-surface-variant text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
              <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="material-symbols-outlined text-{post.color}">double_arrow</span>
              </div>
            </article>
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
