<script>
  import TopNav from '$lib/TopNav.svelte'
  import SideNav from '$lib/SideNav.svelte'
  import MobileNav from '$lib/MobileNav.svelte'
  import '../app.css'
</script>

<div class="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
  <div class="fixed inset-0 crt-overlay z-[100] mix-blend-overlay"></div>
  <TopNav></TopNav>
  <SideNav></SideNav>

  <main class="pt-16 xl:pl-64 min-h-screen relative overflow-hidden">
    <slot></slot>
  </main>

  <MobileNav></MobileNav>
</div>
