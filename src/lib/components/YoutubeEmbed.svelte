<script lang="ts">
  interface Props {
    videoId: string;
    title?: string;
    thumbQuality?: 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault';
  }

  let { videoId, title = 'YouTube video', thumbQuality = 'hqdefault' }: Props = $props();

  // $derived so they update if props change
  let thumbUrl = $derived(`https://i.ytimg.com/vi/${videoId}/${thumbQuality}.jpg`);
  let embedUrl = $derived(`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`);

  let activated = $state(false);
  let imgError   = $state(false);

  function activate() { activated = true; }
  function onImgError() { imgError = true; }
</script>

<div class="yt-facade">
  {#if activated}
    <iframe
      src={embedUrl}
      {title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  {:else}
    <button class="yt-poster" onclick={activate} aria-label="Play {title}">
      {#if !imgError}
        <img src={thumbUrl} alt={title} loading="lazy" onerror={onImgError} />
      {:else}
        <div class="yt-fallback"></div>
      {/if}
      <div class="yt-play-btn" aria-hidden="true">
        <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
          <path class="yt-play-bg" d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"/>
          <path class="yt-play-arrow" d="M45 24 27 14v20z"/>
        </svg>
      </div>
    </button>
  {/if}
</div>

<style>
  .yt-facade {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
    overflow: hidden;
  }

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  .yt-poster {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    background: #111;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .yt-poster img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease, filter 0.3s ease;
    filter: brightness(0.82);
  }

  .yt-poster:hover img {
    transform: scale(1.03);
    filter: brightness(0.65);
  }

  .yt-fallback {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #1a1a1f, #2a2208);
  }

  .yt-play-btn {
    position: relative;
    z-index: 1;
    width: 68px;
    height: 48px;
    transition: transform 0.2s ease;
    filter: drop-shadow(0 2px 10px rgba(0,0,0,0.6));
  }

  .yt-poster:hover .yt-play-btn {
    transform: scale(1.15);
  }

  .yt-play-bg {
    fill: #ff0000;
    opacity: 0.92;
    transition: opacity 0.2s;
  }

  .yt-poster:hover .yt-play-bg { opacity: 1; }

  .yt-play-arrow { fill: #fff; }
</style>
