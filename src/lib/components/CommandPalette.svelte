<script>
  import { commandOpen } from '$lib/commandStore';
  import { cleanRead } from '$lib/accessibilityStore';
  import { goto } from '$app/navigation';
  import { fade, fly } from 'svelte/transition';
  import { tick } from 'svelte';

  let searchInput;
  let query = '';
  let selectedIndex = 0;

  const commands = [
    { id: 'home', title: 'System / Home', action: () => goto('/') },
    { id: 'code', title: 'Go to Drives (Projects)', action: () => goto('/#code') },
    { id: 'minis', title: 'Go to Net (Miniatures)', action: () => goto('/#minis') },
    { id: 'logs', title: 'Go to Logs (Archive)', action: () => goto('/#logs') },
    { id: 'studio', title: 'Boot Sanity Studio', action: () => goto('/studio') },
    { id: 'clean', title: 'Toggle Clean Read Protocol', action: () => { $cleanRead = !$cleanRead; } }
  ];

  $: filteredCommands = commands.filter(c => c.title.toLowerCase().includes(query.toLowerCase()));
  $: { query; selectedIndex = 0; }

  async function close() {
    $commandOpen = false;
    query = '';
  }

  function executeCommand(command) {
    command.action();
    close();
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % filteredCommands.length;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + filteredCommands.length) % filteredCommands.length;
    }
    if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
      e.preventDefault();
      executeCommand(filteredCommands[selectedIndex]);
    }
  }

  $: if ($commandOpen && searchInput) {
    tick().then(() => searchInput.focus());
  }
</script>

<svelte:window on:keydown={(e) => { if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); $commandOpen = !$commandOpen; } }} />

{#if $commandOpen}
  <div 
    class="fixed inset-0 z-[99999] flex items-start justify-center pt-[20vh] bg-[#131313]/90 backdrop-blur-md p-4"
    on:click={close}
    transition:fade={{ duration: 150 }}
  >
    <div 
      class="w-full max-w-2xl bg-[#131313] border-2 border-[#00fbfb] shadow-[0_0_30px_rgba(0,251,251,0.15)] flex flex-col font-mono"
      on:click|stopPropagation
      transition:fly={{ y: -20, duration: 200 }}
    >
      <div class="flex items-center border-b-2 border-surface-container-highest p-4 gap-4 text-[#00fbfb]">
        <span class="material-symbols-outlined">terminal</span>
        <input 
          bind:this={searchInput}
          bind:value={query}
          on:keydown={handleKeydown}
          type="text" 
          placeholder="Enter command..." 
          class="w-full bg-transparent outline-none text-[#00fbfb] placeholder:text-[#00fbfb]/40 font-bold"
        />
        <span class="text-xs opacity-50 border border-surface-container-highest px-2 py-1 rounded">ESC</span>
      </div>

      <div class="max-h-[60vh] overflow-y-auto p-2">
        {#if filteredCommands.length === 0}
          <div class="p-4 text-center text-[#fe00fe] opacity-70">ERROR // COMMAND_NOT_FOUND</div>
        {:else}
          {#each filteredCommands as command, i}
            <button 
              on:click={() => executeCommand(command)}
              class="w-full text-left p-4 flex items-center gap-4 transition-colors {i === selectedIndex ? 'bg-[#00fbfb] text-[#131313]' : 'text-[#00fbfb] hover:bg-[#00fbfb]/10'}"
            >
              <span class="opacity-50 text-xs">[{i}]</span>
              {command.title}
            </button>
          {/each}
        {/if}
      </div>
    </div>
  </div>
{/if}
