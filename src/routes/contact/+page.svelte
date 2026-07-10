<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import YoutubeEmbed from '$lib/components/YoutubeEmbed.svelte';
</script>

<svelte:head>
  <title>Contact — Holvend</title>
  <meta name="description" content="Get in touch with Holvend. Join us as a reseller or contact us via WhatsApp or email." />
</svelte:head>

<!-- Hero -->
<section class="contact-hero">
  <div class="contact-hero-inner">
    <span class="contact-eyebrow">Get In Touch</span>
    <h1>Contact Us</h1>
    <div class="contact-hero-line"></div>
    <p>We'd love to hear from you.</p>
  </div>
</section>

<!-- Main Content -->
<div class="contact-section">
  <!-- Video -->
  <div class="contact-video" use:reveal>
    <div class="video-frame">
      <YoutubeEmbed videoId="DRWOvK7mDeg" title="Holvend contact video" thumbQuality="hqdefault" />
    </div>
  </div>

  <!-- Info Card -->
  <div class="contact-info" use:reveal={{ delay: 100 }}>
    <div class="contact-badge">💼</div>
    <h2>Join Us as a Reseller!</h2>
    <p class="contact-sub">Interested in selling Holvend products? Reach out to us directly:</p>

    <div class="contact-links">
      <a href="https://wa.me/+6285174405750" target="_blank" rel="noopener noreferrer" class="contact-link-row wa">
        <div class="contact-link-icon">
          <img src="/images/whatsapp.webp" alt="WhatsApp" />
        </div>
        <div>
          <span class="contact-link-label">WhatsApp</span>
          <span class="contact-link-value">+62 851 74405750</span>
        </div>
        <span class="contact-link-arrow">→</span>
      </a>

      <a href="mailto:holvend.official@gmail.com" class="contact-link-row email">
        <div class="contact-link-icon email-icon">✉</div>
        <div>
          <span class="contact-link-label">Email</span>
          <span class="contact-link-value">holvend.official@gmail.com</span>
        </div>
        <span class="contact-link-arrow">→</span>
      </a>
    </div>

    <a
      href="https://wa.me/+6285174405750"
      class="btn-gold contact-cta"
      target="_blank"
      rel="noopener noreferrer"
    >
      Chat on WhatsApp
    </a>
  </div>
</div>

<!-- Socials strip -->
<section class="socials-section" use:reveal={{ delay: 80 }}>
  <div class="container">
    <p class="socials-title">Follow Us</p>
    <div class="socials-grid">
      <a href="https://youtube.com/@holvend?si=gKwTjtgRY8a7Yvkn" target="_blank" rel="noopener noreferrer" class="social-tile yt">
        <div class="social-tile-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
        </div>
        <span>YouTube</span>
      </a>
      <a href="https://www.instagram.com/holvend.official/?hl=en" target="_blank" rel="noopener noreferrer" class="social-tile ig">
        <div class="social-tile-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </div>
        <span>Instagram</span>
      </a>
      <a href="https://www.tiktok.com/@holvend?_t=8gz8qQIKgPB&_r=1" target="_blank" rel="noopener noreferrer" class="social-tile tt">
        <div class="social-tile-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/></svg>
        </div>
        <span>TikTok</span>
      </a>
      <a href="https://www.linkedin.com/company/pt-holvend-karya-muda/?originalSubdomain=id" target="_blank" rel="noopener noreferrer" class="social-tile li">
        <div class="social-tile-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
        </div>
        <span>LinkedIn</span>
      </a>
    </div>
  </div>
</section>

<style>
  /* Hero */
  .contact-hero {
    background: linear-gradient(135deg, #111113 0%, #1E1E24 70%, #1a1408 100%);
    padding: 90px 20px 70px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .contact-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 100%, rgba(224,168,13,0.1) 0%, transparent 60%);
  }
  .contact-hero-inner { position: relative; z-index: 1; }
  .contact-eyebrow {
    display: block;
    font-size: 11px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 12px;
  }
  .contact-hero h1 {
    font-family: 'Fredericka the Great', cursive;
    font-size: clamp(36px, 7vw, 68px);
    color: #fff;
    margin-bottom: 16px;
  }
  .contact-hero-line {
    width: 50px;
    height: 3px;
    background: var(--primary);
    margin: 0 auto 18px;
    border-radius: 2px;
  }
  .contact-hero p { color: rgba(255,255,255,0.5); font-size: 16px; margin: 0; }

  /* Main layout */
  .contact-section {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 0;
    padding: 0;
  }
  .contact-video {
    flex: 1.5;
    min-width: 280px;
  }
  .video-frame {
    height: 100%;
    min-height: 380px;
    overflow: hidden;
    aspect-ratio: 16/9;
  }
  /* iframe handled by YoutubeEmbed component */

  /* Info card */
  .contact-info {
    flex: 1;
    min-width: 280px;
    background: #fff;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
  .contact-badge {
    font-size: 36px;
    margin-bottom: 16px;
    line-height: 1;
  }
  .contact-info h2 {
    font-family: 'Fredericka the Great', cursive;
    font-size: clamp(20px, 3vw, 30px);
    color: #111;
    margin-bottom: 10px;
    line-height: 1.2;
  }
  .contact-sub {
    color: #666 !important;
    font-size: 14px !important;
    margin-bottom: 28px !important;
    line-height: 1.6 !important;
  }

  .contact-links { display: flex; flex-direction: column; gap: 12px; width: 100%; margin-bottom: 28px; }
  .contact-link-row {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 18px;
    border: 1.5px solid #e8e8e8;
    border-radius: 12px;
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    background: #fafafa;
  }
  .contact-link-row:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  }
  .contact-link-row.wa:hover  { border-color: #25d366; }
  .contact-link-row.email:hover { border-color: var(--primary); }
  .contact-link-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  .contact-link-icon img { width: 100%; height: 100%; object-fit: contain; }
  .email-icon {
    font-size: 20px;
    background: #fff5d6;
    color: var(--primary);
    border: 1px solid rgba(224,168,13,0.2);
  }
  .contact-link-label {
    display: block;
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #999;
    font-weight: 600;
  }
  .contact-link-value {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: #111;
    margin-top: 2px;
  }
  .contact-link-arrow { margin-left: auto; color: #ccc; font-size: 16px; }
  .contact-link-row:hover .contact-link-arrow { color: var(--primary); }

  .contact-cta {
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 14px;
  }

  /* Socials */
  .socials-section {
    background: #f2f1ed;
    padding: 60px 0;
  }
  .socials-title {
    text-align: center;
    font-size: 11px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 28px !important;
  }
  .socials-grid {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .social-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: #fff;
    border: 1.5px solid #e8e8e8;
    border-radius: 16px;
    padding: 24px 32px;
    color: #111;
    font-size: 13px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
    min-width: 110px;
    text-align: center;
  }
  .social-tile:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
  .social-tile-icon { width: 32px; height: 32px; }
  .social-tile-icon svg { width: 100%; height: 100%; }
  .social-tile.yt:hover  { border-color: #ff0000; color: #ff0000; }
  .social-tile.ig:hover  { border-color: #e1306c; color: #e1306c; }
  .social-tile.tt:hover  { border-color: #000; color: #000; }
  .social-tile.li:hover  { border-color: #0077b5; color: #0077b5; }

  .social-tile.yt .social-tile-icon  { color: #ff0000; }
  .social-tile.ig .social-tile-icon  { color: #e1306c; }
  .social-tile.tt .social-tile-icon  { color: #111; }
  .social-tile.li .social-tile-icon  { color: #0077b5; }

  @media (max-width: 768px) {
    .contact-section { flex-direction: column; }
    .contact-video { min-height: 260px; }
    .video-frame { min-height: 260px; }
    .contact-info { padding: 36px 24px; }
    .social-tile { padding: 18px 20px; min-width: 90px; }
  }
</style>
