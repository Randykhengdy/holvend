<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import YoutubeEmbed from '$lib/components/YoutubeEmbed.svelte';

  const advantages = [
    { img: '/images/bpom.webp',        label: 'BPOM Verified',  desc: 'Officially registered & approved by BPOM Indonesia.' },
    { img: '/images/parabenfree.webp', label: 'Paraben Free',   desc: 'No harmful preservatives — safe for daily use.' },
    { img: '/images/natural.webp',     label: '100% Natural',   desc: 'Formulated from carefully selected natural ingredients.' },
    { img: '/images/crueltyfree.webp', label: 'Cruelty Free',   desc: 'Never tested on animals. Always ethical.' },
  ];

  const stats = [
    { value: '2023', label: 'Founded' },
    { value: '4+',   label: 'Products' },
    { value: 'BPOM', label: 'Certified' },
    { value: '100%', label: 'Natural' },
  ];
</script>

<svelte:head>
  <title>About — Holvend</title>
  <meta name="description" content="Holvend was founded by Vonnette's Barber in 2023. Premium men's grooming products from natural ingredients." />
</svelte:head>

<!-- Hero Banner -->
<section class="about-hero">
  <div class="about-hero-overlay">
    <span class="about-eyebrow">Our Story</span>
    <h1>About Holvend</h1>
    <div class="about-hero-line"></div>
    <p>Born from the barber chair. Built for every man.</p>
  </div>
</section>

<!-- Stats Row -->
<div class="stats-row" use:reveal>
  {#each stats as s}
    <div class="stat-item">
      <span class="stat-value">{s.value}</span>
      <span class="stat-label">{s.label}</span>
    </div>
  {/each}
</div>

<div class="about-section">

  <!-- Block 1: Story + Video -->
  <div class="about-block" use:reveal>
    <div class="about-text">
      <span class="section-eyebrow">Who We Are</span>
      <h2>HOLVEND</h2>
      <p>
        Holvend was founded by Vonnette's Barber in 2023 with many years of experience in hair
        styling and men's grooming. From the first year we operated Vonnette Barbershop, we loved
        hair products and sold many local and international products that inspired us greatly.
        The name 'Holvend' was planned several years before launch. In 2023 we created new products
        for barbers, stylists, and those passionate about hair styling.
      </p>
      <p class="about-tagline"><strong>Our styles work everywhere.</strong></p>
    </div>
    <div class="about-video">
      <div class="video-frame">
        <YoutubeEmbed videoId="RIvcdymmvz4" title="Holvend story" thumbQuality="hqdefault" />
      </div>
    </div>
  </div>

  <!-- Block 2: Image + Provide / Aim -->
  <div class="about-block about-block-alt" use:reveal={{ delay: 80 }}>
    <div class="about-image">
      <img src="/images/IMG_7691.webp" alt="Holvend team at work" />
    </div>
    <div class="about-text">
      <span class="section-eyebrow">What We Do</span>
      <h2>WHAT DO WE PROVIDE</h2>
      <p>
        With a passionate commitment to hair products and men's grooming, we offer several choices
        of products made from natural ingredients to keep your hair clean, tidy, and well cared for.
        Suitable for all hair types and styles.
      </p>

      <span class="section-eyebrow" style="margin-top: 32px; display:block;">Our Mission</span>
      <h2>WHAT DO WE AIM</h2>
      <p>
        Our mission is to make the everyday difficulties of hair styling easier, and to solve the
        challenges that hairdressers regularly face. We believe beauty is a kind of happiness —
        feeling good about the way you look matters. Holvend wants to give you the best.
      </p>

      <a href="/shop" class="btn-gold" style="display:inline-block; margin-top: 28px;">
        Explore Products
      </a>
    </div>
  </div>

</div>

<!-- Advantages Cards -->
<section class="about-advantages" use:reveal={{ delay: 100 }}>
  <div class="container">
    <span class="about-eyebrow" style="display:block;text-align:center;margin-bottom:12px;">Our Promise</span>
    <h2 class="adv-title">Why Choose Holvend</h2>
    <div class="adv-cards">
      {#each advantages as adv}
        <div class="adv-card">
          <div class="adv-card-icon">
            <img src={adv.img} alt={adv.label} />
          </div>
          <h4>{adv.label}</h4>
          <p>{adv.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Hero */
  .about-hero {
    background: linear-gradient(135deg, #111113 0%, #1E1E24 60%, #2a2208 100%);
    position: relative;
    padding: 100px 20px 80px;
    text-align: center;
    overflow: hidden;
  }
  .about-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 80%, rgba(224,168,13,0.1) 0%, transparent 65%);
  }
  .about-hero-overlay {
    position: relative;
    z-index: 1;
  }
  .about-eyebrow {
    display: block;
    font-size: 11px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 12px;
  }
  .about-hero h1 {
    font-family: 'Fredericka the Great', cursive;
    font-size: clamp(36px, 7vw, 72px);
    color: #fff;
    margin-bottom: 16px;
  }
  .about-hero-line {
    width: 50px;
    height: 3px;
    background: var(--primary);
    margin: 0 auto 20px;
    border-radius: 2px;
  }
  .about-hero p {
    color: rgba(255,255,255,0.55);
    font-size: 16px;
    margin: 0;
  }

  /* Stats */
  .stats-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: var(--primary);
    padding: 28px 5%;
    gap: 0;
  }
  .stat-item {
    flex: 1;
    min-width: 120px;
    text-align: center;
    padding: 8px 16px;
    border-right: 1px solid rgba(0,0,0,0.15);
  }
  .stat-item:last-child { border-right: none; }
  .stat-value {
    display: block;
    font-family: 'Fredericka the Great', cursive;
    font-size: clamp(24px, 4vw, 40px);
    color: #111;
    line-height: 1;
    margin-bottom: 4px;
  }
  .stat-label {
    display: block;
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(0,0,0,0.6);
    font-weight: 600;
  }

  /* Section */
  .about-section {
    padding: 70px 5%;
  }
  .section-eyebrow {
    font-size: 11px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 8px;
    display: block;
  }
  :global(.about-text h2) {
    font-family: 'Fredericka the Great', cursive !important;
    font-size: clamp(20px, 2.5vw, 28px) !important;
    color: #111 !important;
    margin-bottom: 14px !important;
  }
  :global(.about-text p) {
    color: #444 !important;
    font-size: 15px !important;
    line-height: 1.9 !important;
    text-align: justify !important;
  }
  .about-tagline strong { color: #111; font-size: 15px; font-weight: 700; }

  .about-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 60px;
    margin-bottom: 80px;
  }
  .about-block-alt { flex-direction: row-reverse; }

  .about-text { flex: 1; min-width: 280px; max-width: 520px; }

  .about-video { flex: 1; min-width: 280px; max-width: 540px; }
  .video-frame {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 16px 48px rgba(0,0,0,0.18);
    aspect-ratio: 16/9;
  }
  /* override iframe inside video-frame since YoutubeEmbed handles its own sizing */
  .video-frame { aspect-ratio: 16/9; }

  .about-image { flex: 1; min-width: 260px; max-width: 440px; }
  .about-image img {
    width: 100%;
    border-radius: 12px;
    object-fit: contain;
    box-shadow: 0 12px 40px rgba(0,0,0,0.12);
  }

  /* Advantage Cards */
  .about-advantages {
    background: linear-gradient(180deg, #111113 0%, #1a1a1f 100%);
    padding: 70px 0 80px;
  }
  .adv-title {
    text-align: center;
    font-family: 'Fredericka the Great', cursive;
    font-size: clamp(24px, 4vw, 40px);
    color: #fff;
    margin-bottom: 48px;
  }
  .adv-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
  }
  .adv-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(224,168,13,0.15);
    border-radius: 14px;
    padding: 32px 24px;
    text-align: center;
    transition: background 0.3s, transform 0.3s, border-color 0.3s;
  }
  .adv-card:hover {
    background: rgba(224,168,13,0.07);
    border-color: rgba(224,168,13,0.4);
    transform: translateY(-5px);
  }
  .adv-card-icon {
    width: 72px;
    height: 72px;
    margin: 0 auto 16px;
    background: rgba(255,255,255,0.08);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }
  .adv-card-icon img { width: 100%; height: 100%; object-fit: contain; }
  .adv-card h4 {
    color: var(--primary);
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: 0.5px;
  }
  .adv-card p {
    color: rgba(255,255,255,0.45) !important;
    font-size: 13px !important;
    line-height: 1.7 !important;
    margin: 0 !important;
    text-align: center !important;
  }

  @media (max-width: 768px) {
    .about-block, .about-block-alt { flex-direction: column; gap: 36px; }
    .stats-row { gap: 0; }
    .stat-item { min-width: 100px; }
    .adv-cards { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 480px) {
    .adv-cards { grid-template-columns: 1fr 1fr; gap: 14px; }
    .adv-card { padding: 20px 14px; }
  }
</style>
