<div class="triangle">
  <div class="triangle-left" />
  <div class="triangle-right" />
</div>

<style>
  .triangle {
    display: flex;
    justify-content: center;
  }

  .triangle-right {
    width: 0;
    height: 0;
    border-right: 8vw solid transparent;
    border-top: 13vw solid red;
  }

  .triangle-left {
    width: 0;
    height: 0;
    border-left: 8vw solid transparent;
    border-top: 13vw solid white;
  }
</style>