<script>
  import { page } from '$app/stores';
</script>

<nav class="md:hidden fixed bottom-0 left-0 w-full h-16 bg-[#131313] shadow-[0_-4px_0_0_#00fbfb] z-[10000] flex items-center justify-around px-4">
  <a class="flex flex-col items-center {$page.url.pathname === '/' ? 'text-[#fe00fe] opacity-100' : 'text-[#00fbfb] opacity-60'}" href="/">
    <span class="material-symbols-outlined">home</span>
    <span class="text-[8px] font-headline font-bold">HOME</span>
  </a>
  <a class="flex flex-col items-center text-[#00fbfb] opacity-60" href="/#minis">
    <span class="material-symbols-outlined">brush</span>
    <span class="text-[8px] font-headline font-bold">MINIS</span>
  </a>
  <a class="flex flex-col items-center text-[#00fbfb] opacity-60" href="/#code">
    <span class="material-symbols-outlined">code</span>
    <span class="text-[8px] font-headline font-bold">CODE</span>
  </a>
  <a class="flex flex-col items-center {$page.url.pathname.startsWith('/blog') ? 'text-[#fe00fe] opacity-100' : 'text-[#00fbfb] opacity-60'}" href="/#logs">
    <span class="material-symbols-outlined">terminal</span>
    <span class="text-[8px] font-headline font-bold">LOGS</span>
  </a>
</nav>
