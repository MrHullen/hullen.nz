<script>
  import TopNav from '$lib/TopNav.svelte'
  import SideNav from '$lib/SideNav.svelte'
  import MobileNav from '$lib/MobileNav.svelte'
  import Lightbox from '$lib/components/Lightbox.svelte'
  import CommandPalette from '$lib/components/CommandPalette.svelte'
  import { cleanRead } from '$lib/accessibilityStore'
  import '../app.css'
  export let params = {};
  $: _silenceParams = params;
</script>

<div class="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
  {#if !$cleanRead}
    <div class="fixed inset-0 crt-overlay pointer-events-none z-[100] mix-blend-overlay opacity-30"></div>
  {/if}
  <TopNav></TopNav>
  <SideNav></SideNav>

  <main class="pt-16 xl:pl-64 min-h-screen relative overflow-hidden">
    <slot></slot>
  </main>

  <MobileNav></MobileNav>
</div>
<Lightbox />
<CommandPalette />
