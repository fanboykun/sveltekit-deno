<script lang="ts">
  import HelloWorld from '$lib/components/hello-world.svelte';
  import { useCounter } from '$lib/hooks/use-counter.svelte';
  const counter = useCounter(1);
</script>
<main class="bg-gray-100">
  <HelloWorld />
</main>
