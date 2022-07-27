<script>
  import { page } from '$app/stores'

  // Boolean value for burger menu on mobile
  // toggled off whenever $page changes
  let active = false
  function toggle() {
    active = !active
  }
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item"
    on:click={() => { active = false }}
    aria-current="{$page.url.pathname == '/' ? 'page' : undefined}"
    href="/">
      <!-- <img src="/logo.png" alt="Me"> -->
      <span class="has-text-dark ml-2"> Dave Hullen<span class="has-text-primary ml-0">.nz</span> </span>
    </a>

    <button
      on:click={toggle}
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div> <!-- .navbar-brand -->

  <div
  class="navbar-menu"
  class:is-active={active}>
    <div class="navbar-end">
			
      <div class="navbar-item">
        <a
        class="navbar-item"
        class:is-active={$page.url.pathname.includes('/about')}
        on:click={toggle}
        aria-current="{$page.url.pathname.includes('/about') ? 'page' : undefined}"
        href="/about">
          <!-- <i class="fas fa-laptop-code"></i> -->
          <span> About </span>
        </a>
      </div>
    </div> <!-- .navbar-end -->
  </div> <!-- .navbar-menu -->
</nav>