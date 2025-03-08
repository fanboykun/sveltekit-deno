<script lang="ts">
  import { browser, dev } from '$app/environment';
  import { hello } from '$lib';
  import { onMount } from 'svelte';

  onMount(() => {
    if (browser) console.log('browser');
  });
</script>

{#if dev}
  <h1>
    Greetings: {hello('world')}
  </h1>
{/if}
