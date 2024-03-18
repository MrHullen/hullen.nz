<script>
  import Nav from '$lib/Nav.svelte'
  import Header from '$lib/Header.svelte'
  import WhoIAm from '$lib/WhoIAm.svelte'
  import InvertedText from '$lib/InvertedText.svelte'
  import Triangle from '$lib/Triangle.svelte'
</script>

<Nav />

<Header />

<Triangle />

<main>
  <WhoIAm />

  <Triangle />

  <h2>
    Work // Projects
  </h2>

  <a href="https://craighead.school.nz">
    <InvertedText text="__Craighead" size="10" />
  </a>
  <a href="https://digitech.craighead.school.nz/">
    <InvertedText text="_____DigiTech" size="10" />
  </a>
  <a href="https://hullen.nz" >
    <InvertedText text="_Hullen" size="10" />
  </a>
  <a href="https://digitech.craighead.school.nz/shop">
    <InvertedText text="__Resources" size="10" />
  </a>

</main>

<footer>&copy; Dave Hullen 2024</footer>

<style>
  main {
    margin-top: 10vh;
  }
  
  h2 {
    margin: 0 0 -0.75rem 1rem;
  }
</style>

