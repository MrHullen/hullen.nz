<script>
  export let text
  export let size
</script>

<span
  data-content={text}
  style="font-size: {size}rem; line-height: {size}rem; height: {size}rem;"
  ></span>

<style>
  span {
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0 0;
    position: relative;
    width: 100%;
  }

  span:before,
  span:after {
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    content: attr(data-content);
  }

  span:before {
    color: red;
    width: 100%;
  }

  span:after {
    color: white;
    width: 50%;
  }
</style>
