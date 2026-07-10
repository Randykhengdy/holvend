<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { products } from '$lib/data/products';
  import { goto } from '$app/navigation';
  import YoutubeEmbed from '$lib/components/YoutubeEmbed.svelte';

  const homePhotos = [
    '/images/image-grid/image1.webp',
    '/images/image-grid/image6.webp',
    '/images/image-grid/image3.webp',
    '/images/image-grid/image4.webp',
  ];

  const advantages = [
    { img: '/images/bpom.webp',        label: 'BPOM Verified' },
    { img: '/images/parabenfree.webp', label: 'Paraben Free' },
    { img: '/images/natural.webp',     label: '100% Natural' },
    { img: '/images/crueltyfree.webp', label: 'Cruelty Free' },
  ];

  const gridItems = homePhotos.map((photo, i) => ({
    gridPhoto: photo,
    product: products[i % products.length],
  }));
</script>

<svelte:head>
  <title>Holvend — Men's Grooming</title>
  <meta name="description" content="Holvend premium men's grooming products. BPOM verified, paraben free, 100% natural, cruelty free." />
</svelte:head>

<!-- ── Hero Video ── -->
<section class="hero-video-wrap">
  <video autoplay loop muted playsinline>
    <source src="/video/Holvend2.mp4" type="video/mp4" />
  </video>
  <div class="hero-overlay">
    <p class="hero-sub">Premium Men's Grooming</p>
    <h1 class="hero-title">HOLVEND</h1>
    <div class="hero-divider"></div>
    <p class="hero-tagline">Crafted from nature. Built for style.</p>
    <a href="/shop" class="btn-gold hero-cta">Shop Now</a>
  </div>
</section>

<!-- ── Featured Products Strip ── -->
<section class="featured-strip">
  <div class="featured-strip-inner">
    {#each products as p}
      <a href="/shop/products/{p.productCode}" class="featured-chip">
        <img src={p.productPhotos[0]?.photo_path} alt={p.product} />
        <span>{p.product}</span>
      </a>
    {/each}
  </div>
</section>

<!-- ── Image + Product Grid ── -->
<section class="image-grid-section">
  <div class="image-grid">
    {#each gridItems as item, i}
      <div class="grid-item" class:odd={i % 2 !== 0}>
        <a
          href="/shop/products/{item.product.productCode}"
          class="grid-img product-grid-img"
          aria-label="View {item.product.product}"
        >
          <img src={item.product.productPhotos[0]?.photo_path} alt={item.product.product} />
          <div class="grid-product-label">
            <span class="grid-product-name">{item.product.product}</span>
            <span class="grid-product-cta">View Product →</span>
          </div>
        </a>
        <div class="grid-img">
          <img src={item.gridPhoto} alt="Holvend lifestyle" />
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- ── Quote + YouTube ── -->
<section class="quote-section" use:reveal={{ delay: 100 }}>
  <div class="quote-inner">
    <span class="quote-eyebrow">The Brand</span>
    <h2 class="quote-text">"Crafting History,<br/>Weaving Legacies"</h2>
    <div class="quote-line"></div>
  </div>
  <div class="home-yt-wrap">
    <div class="yt-frame-wrap">
      <YoutubeEmbed videoId="RB5rxVczYOw" title="Holvend brand video" thumbQuality="maxresdefault" />
    </div>
  </div>
</section>

<!-- ── Advantages ── -->
<section class="advantages-section" use:reveal={{ delay: 120 }}>
  <p class="adv-eyebrow">Why Holvend</p>
  <div class="advantages">
    {#each advantages as adv}
      <div class="advantage-item">
        <div class="adv-icon-wrap">
          <img src={adv.img} alt={adv.label} />
        </div>
        <p>{adv.label}</p>
      </div>
    {/each}
  </div>
</section>

<!-- ── CTA Banner ── -->
<section class="cta-banner" use:reveal={{ delay: 80 }}>
  <div class="cta-content">
    <h2>Ready to elevate your grooming?</h2>
    <p>Explore our full range of premium products.</p>
    <a href="/shop" class="btn-gold">Browse the Collection</a>
  </div>
</section>

<style>
  /* ── Hero ── */
  .hero-video-wrap {
    position: relative;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    max-height: 100vh;
  }
  .hero-video-wrap video {
    width: 100%;
    display: block;
    object-fit: cover;
    max-height: 100vh;
  }
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0.18) 0%,
      rgba(0,0,0,0.55) 60%,
      rgba(0,0,0,0.82) 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 10vh;
    text-align: center;
    gap: 10px;
  }

  /* Staggered entrance — each child slides up with increasing delay */
  .hero-overlay > * {
    animation: heroEnter 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  .hero-overlay > *:nth-child(1) { animation-delay: 0.1s; }
  .hero-overlay > *:nth-child(2) { animation-delay: 0.25s; }
  .hero-overlay > *:nth-child(3) { animation-delay: 0.38s; }
  .hero-overlay > *:nth-child(4) { animation-delay: 0.48s; }
  .hero-overlay > *:nth-child(5) { animation-delay: 0.58s; }

  @keyframes heroEnter {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .hero-sub {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(11px, 1.4vw, 14px);
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--primary);
    margin: 0;
    line-height: 1;
  }
  .hero-title {
    font-family: 'Fredericka the Great', cursive;
    font-size: clamp(52px, 12vw, 130px);
    color: #fff;
    line-height: 0.95;
    letter-spacing: 6px;
    text-shadow: 0 4px 40px rgba(0,0,0,0.5);
  }
  .hero-divider {
    width: 60px;
    height: 2px;
    background: var(--primary);
    margin: 4px auto;
  }
  .hero-tagline {
    font-family: 'Bellota Text', sans-serif;
    font-size: clamp(13px, 1.8vw, 18px);
    color: rgba(255,255,255,0.85);
    letter-spacing: 2px;
    margin: 0;
    line-height: 1;
  }
  .hero-cta {
    margin-top: 12px;
    font-size: clamp(13px, 1.5vw, 15px);
    padding: 13px 36px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  /* ── Featured strip ── */
  .featured-strip {
    background: #1E1E24;
    padding: 18px 5%;
    overflow-x: auto;
  }
  .featured-strip-inner {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .featured-chip {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(224,168,13,0.25);
    border-radius: 50px;
    padding: 6px 18px 6px 6px;
    color: #fff;
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
    transition: background 0.25s, border-color 0.25s, transform 0.25s;
    white-space: nowrap;
  }
  .featured-chip img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    object-fit: cover;
  }
  .featured-chip:hover {
    background: rgba(224,168,13,0.15);
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-2px);
  }

  /* ── Image Grid ── */
  :global(.image-grid-section) { padding: 0; }
  :global(.image-grid) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3px;
  }
  :global(.grid-item) {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  :global(.grid-item.odd) { flex-direction: column-reverse; }

  .product-grid-img {
    position: relative;
    display: block;
    overflow: hidden;
  }
  :global(.grid-img) { overflow: hidden; min-height: 200px; }
  :global(.grid-img img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }
  :global(.grid-img:hover img) { transform: scale(1.05); }

  .grid-product-label {
    position: absolute;
    inset: 0;
    background: linear-gradient(160deg, transparent 40%, rgba(0,0,0,0.75) 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px 16px;
    opacity: 0;
    transition: opacity 0.35s ease;
  }
  .product-grid-img:hover .grid-product-label { opacity: 1; }
  .grid-product-name {
    display: block;
    color: #fff;
    font-family: 'Bellota Text', sans-serif;
    font-size: clamp(13px, 1.5vw, 17px);
    font-weight: 700;
    line-height: 1.3;
  }
  .grid-product-cta {
    display: block;
    color: var(--primary);
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    margin-top: 4px;
    letter-spacing: 0.5px;
  }

  /* ── Quote ── */
  .quote-section {
    background: #111113;
    padding: 70px 5% 40px;
  }
  .quote-inner {
    text-align: center;
    margin-bottom: 40px;
  }
  .quote-eyebrow {
    font-size: 11px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 14px;
  }
  .quote-text {
    font-family: 'Quicksand', sans-serif;
    font-size: clamp(26px, 5.5vw, 64px);
    color: #fff;
    line-height: 1.15;
    font-weight: 700;
    margin: 0;
  }
  .quote-line {
    width: 50px;
    height: 3px;
    background: var(--primary);
    margin: 24px auto 0;
    border-radius: 2px;
  }
  .home-yt-wrap {
    padding: 0;
    display: flex;
    justify-content: center;
  }
  .yt-frame-wrap {
    width: 100%;
    max-width: 1100px;
    aspect-ratio: 16 / 9;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.6);
  }

  /* ── Advantages ── */
  .advantages-section {
    background: var(--body-bg);
    padding: 60px 5%;
    text-align: center;
  }
  .adv-eyebrow {
    font-size: 11px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 32px;
  }
  :global(.advantages) {
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
  }
  :global(.advantage-item) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  .adv-icon-wrap {
    width: 90px;
    height: 90px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    padding: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .advantage-item:hover .adv-icon-wrap {
    transform: translateY(-4px);
    box-shadow: 0 8px 28px rgba(224,168,13,0.2);
  }
  .adv-icon-wrap img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  :global(.advantage-item p) {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-dark) !important;
    margin: 0;
    letter-spacing: 0.3px;
  }

  /* ── CTA Banner ── */
  .cta-banner {
    background: linear-gradient(135deg, #1a1a1f 0%, #2a2208 100%);
    padding: 80px 5%;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .cta-banner::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, rgba(224,168,13,0.12) 0%, transparent 70%);
  }
  .cta-content {
    position: relative;
    z-index: 1;
  }
  .cta-content h2 {
    font-family: 'Fredericka the Great', cursive;
    font-size: clamp(22px, 4vw, 42px);
    color: #fff;
    margin-bottom: 12px;
  }
  .cta-content p {
    color: rgba(255,255,255,0.6);
    font-size: 15px;
    margin-bottom: 28px;
  }

  @media (max-width: 768px) {
    .hero-overlay { padding-bottom: 8vh; }
    .featured-strip-inner { justify-content: flex-start; flex-wrap: nowrap; }
    .featured-strip { overflow-x: auto; }
    .quote-section { padding: 50px 5% 30px; }
  }
</style>
