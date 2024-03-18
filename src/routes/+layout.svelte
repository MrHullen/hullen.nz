<div class="background-container">
  <div class="red-square"></div>
  <slot />
</div>

<style>
  :global(*) {
    font-family: sans-serif;
  }

  :global(body) {
    padding: 0;
    margin: 0;
    width: 100vw;
  }

  .background-container {
    position: relative;
  }

  .red-square {
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    height: 100%;
    background-color: red;
    z-index: -1;
  }
</style>