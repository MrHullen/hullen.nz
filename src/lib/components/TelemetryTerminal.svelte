<script>
  import { onMount } from 'svelte';
  
  let lines = [];
  let terminalViewport;

  const bootSequence = [
    "INITIATING ARCHIVE_OS v3.1.4...",
    "[OK] COGITATOR ARRAYS ONLINE",
    "[OK] MOUNTING DRIVE: manufactorum_v2",
    "[OK] LOADING MODULE: pedagogy_engine",
    "VERIFYING LOCAL TIME: SAIGON NODE...",
    "VERIFYING DATA INTEGRITY...",
    "[OK] NO WARP CORRUPTION DETECTED",
    "SYSTEM STATUS: NOMINAL",
    "--------------------------------"
  ];

  const telemetryData = [
    "SYS_MEM: 42% ALLOCATED",
    "PING: 14ms",
    "COMPILING: IB_CS_SYLLABUS...",
    "WARNING: PAINT WATER SPILL DETECTED",
    "CRUSADE_ROSTER: UPDATE PENDING",
    "AIDER_AGENT: IDLE",
    "COFFEE_RESERVES: OPTIMAL",
    "SCANNING FOR INQUISITORIAL OVERRIDE...",
    "UPDATING YEAR 8 COGNITIVE BIAS DECKS..."
  ];

  function scrollToBottom() {
    if (terminalViewport) {
      setTimeout(() => {
        terminalViewport.scrollTop = terminalViewport.scrollHeight;
      }, 10);
    }
  }

  onMount(() => {
    let delay = 0;
    
    // 1. Run the rapid boot sequence
    bootSequence.forEach((line) => {
      delay += Math.random() * 300 + 150; // Random delay between 150ms and 450ms
      setTimeout(() => {
        lines = [...lines, line];
        scrollToBottom();
      }, delay);
    });

    // 2. Start the slow telemetry loop after boot finishes
    setTimeout(() => {
      setInterval(() => {
        const randomLine = telemetryData[Math.floor(Math.random() * telemetryData.length)];
        // Keep only the last 15 lines to prevent DOM bloat
        lines = [...lines.slice(-14), `> ${randomLine}`];
        scrollToBottom();
      }, 2500); // New line every 2.5 seconds
    }, delay + 1000);
  });
</script>

<div class="w-full max-w-md mx-auto xl:mx-0 bg-[#131313] border-2 border-surface-container-highest shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col font-mono text-xs sm:text-sm h-64 sm:h-80 relative overflow-hidden">
  <!-- Title Bar -->
  <div class="bg-surface-container-highest px-3 py-1 flex items-center justify-between border-b-2 border-surface-container-highest">
    <span class="text-[#00fbfb] opacity-70">sys_monitor.exe</span>
    <div class="flex gap-2">
      <span class="w-2 h-2 rounded-full bg-surface-container-highest border border-[#00fbfb]/30"></span>
      <span class="w-2 h-2 rounded-full bg-surface-container-highest border border-[#00fbfb]/30"></span>
    </div>
  </div>

  <!-- Terminal Content -->
  <div 
    bind:this={terminalViewport}
    class="p-4 overflow-y-hidden text-[#00fbfb] flex-grow flex flex-col justify-end"
  >
    <div class="flex flex-col gap-1">
      {#each lines as line}
        <div class="opacity-80 drop-shadow-[0_0_2px_rgba(0,251,251,0.5)]">{line}</div>
      {/each}
      <div class="flex items-center gap-2 mt-1">
        <span class="opacity-80">&gt;</span>
        <span class="w-2 h-4 bg-[#00fbfb] animate-pulse drop-shadow-[0_0_5px_rgba(0,251,251,0.8)]"></span>
      </div>
    </div>
  </div>
  
  <!-- CRT Scanline Overlay -->
  <div class="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 mix-blend-overlay"></div>
</div>
