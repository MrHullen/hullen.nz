<script>
  import { urlFor } from '$lib/sanity';
  export let portableText = undefined;
  export let index = undefined;
  export let isInline = undefined;
</script>

<div class="p-4 border-2 border-[#00fbfb] text-[#00fbfb] bg-[#131313] font-mono text-xs overflow-x-auto my-8">
  <p class="font-bold mb-2">SYSTEM_DIAGNOSTIC // INSPECTING_PORTABLE_TEXT</p>
  <pre>{JSON.stringify(portableText, null, 2)}</pre>
</div>
