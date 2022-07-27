<script>
  import Nav from '$lib/Nav.svelte'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Nav />

<Header
  title="Home"
  subtitle="Welcome to my site" />

<main class="content section">
  <h2>
    Welcome
  </h2>

  <p>
    This is where I showcase the work I've done, both in teaching and practicing web development.
  </p>

  <section class="columns section">
    <div class="column box">
      <h2>Simple</h2>
      <p>Website designs are clean, simple, and easy to understand. Users don't need to search around to find what they're looking for - everything is at their fingertips.</p>
    </div>
    <div class="column box">
      <h2>Fast</h2>
      <p>The background code delivers the website to users quickly. Load times are short and there's no waiting around staring at a blank page - it appears almost instantly.</p>
    </div>
    <div class="column box">
      <h2>Accessible</h2>
      <p>People able to use the website, regardless of the device, browser, or disability. It has full support for mobile and accessibility tools, such as screen readers for low vision users.</p>
    </div>
    <div class="column box">
      <h2>Reliable</h2>
      <p>Powered by Google, the website is stored in the cloud. If Google is working, so is the website.</p>
    </div>
  </section>
</main>

<Footer />

<style>
  .box:last-child { margin-bottom: 1.5rem; }
</style>