<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores';

  let { children } = $props();
</script>

<svelte:head>
  <meta name="description" content="Holvend — Premium men's grooming products crafted from natural ingredients. BPOM verified, paraben free, cruelty free." />
  <meta property="og:site_name" content="Holvend" />
  <meta property="og:type" content="website" />
  <!-- Preload hero video so it's ready when user hits home -->
  <link rel="preload" href="/video/Holvend2.mp4" as="video" type="video/mp4" />
</svelte:head>

<Header />

<main>
  {@render children()}
</main>

<Footer />
