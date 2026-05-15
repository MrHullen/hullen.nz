<script>
  import { page } from '$app/stores';
</script>

  <!-- Top Navigation -->
  <nav class="flex justify-between items-center px-6 h-16 w-full fixed top-0 z-[10000] bg-[#131313] shadow-[0_4px_0_0_#00fbfb]">
    <div class="text-2xl font-black italic tracking-tighter text-[#00fbfb] drop-shadow-[0_0_8px_rgba(0,251,251,0.6)] font-headline">HULLEN.NZ</div>
    <div class="hidden md:flex gap-8 items-center">
      <a class="font-['Space_Grotesk'] tracking-tighter uppercase text-sm active:translate-y-0.5 active:translate-x-0.5 {$page.url.pathname.startsWith('/blog') ? 'text-[#fe00fe] border-b-4 border-[#fe00fe] pb-1' : 'text-[#00fbfb] opacity-80 hover:opacity-100 hover:bg-[#00fbfb] hover:text-[#131313] transition-colors duration-75'}" href="/#logs">ARCHIVE</a>
      <a class="font-['Space_Grotesk'] tracking-tighter uppercase text-sm text-[#00fbfb] opacity-80 hover:opacity-100 hover:bg-[#00fbfb] hover:text-[#131313] transition-colors duration-75 active:translate-y-0.5 active:translate-x-0.5" href="mailto:hello@hullen.nz">COMMS</a>
      <a class="font-['Space_Grotesk'] tracking-tighter uppercase text-sm text-[#00fbfb] opacity-80 hover:opacity-100 hover:bg-[#00fbfb] hover:text-[#131313] transition-colors duration-75 active:translate-y-0.5 active:translate-x-0.5" href="/#code">PROJECTS</a>
      <a class="font-['Space_Grotesk'] tracking-tighter uppercase text-sm text-[#00fbfb] opacity-80 hover:opacity-100 hover:bg-[#00fbfb] hover:text-[#131313] transition-colors duration-75 active:translate-y-0.5 active:translate-x-0.5" href="/#minis">CORE</a>
    </div>
    <div class="flex items-center text-[#00fbfb]">
      <a href="/studio" aria-label="Open Sanity Studio"><span class="material-symbols-outlined cursor-pointer hover:animate-pulse">terminal</span></a>
    </div>
  </nav>
