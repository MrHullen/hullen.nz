<script>
  import InvertedText from '$lib/InvertedText.svelte'
</script>

<header>
  <div>
    <h1>
      <InvertedText text="Dave" size="25" />
    </h1>
    <h2 class="is-red-text">Web Developer // Teacher</h2>
  </div>
</header>

<style>
  div {
    width: fit-content;
    height: 25rem;
  }

  h2 {
    text-align: right;
    margin: -3rem 1.5rem 0 0;
  }

  header {
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    width: 940px;
    margin: 0 auto;
    letter-spacing: -50px;
  }

  @media screen and (max-width: 1000px) {
    header {
      transform: scale(0.2);
      height: 15vh
    }
  }
</style>
