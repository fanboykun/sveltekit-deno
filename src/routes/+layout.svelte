<script lang="ts">
  import '../styles/app.css';
  import { PUBLIC_APP_NAME } from '$env/static/public';

  let { children } = $props();
</script>
<svelte:head>
  <title>
    {PUBLIC_APP_NAME}
  </title>
</svelte:head>
{@render children?.()}
