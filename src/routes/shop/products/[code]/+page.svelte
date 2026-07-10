<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { getProductByCode, products } from '$lib/data/products';
  import { page } from '$app/stores';

  let code = $derived($page.params.code);
  let product = $derived(getProductByCode(code));
  let activePhoto = $state(0);

  // Related products (exclude current)
  let related = $derived(products.filter(p => p.productCode !== code).slice(0, 3));

  $effect(() => { activePhoto = 0; });
</script>

<svelte:head>
  <title>{product?.product ?? 'Product'} — Holvend</title>
  {#if product}
    <meta name="description" content={product.description_en} />
  {/if}
</svelte:head>

{#if product}
  <!-- Breadcrumb -->
  <nav class="product-breadcrumb" aria-label="breadcrumb">
    <div class="container">
      <a href="/">Home</a>
      <span class="breadcrumb-sep">›</span>
      <a href="/shop">Shop</a>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-current">{product.product}</span>
    </div>
  </nav>

  <!-- Main Detail -->
  <div class="product-detail-wrap container">
    <!-- Gallery -->
    <div class="gallery-wrap" use:reveal>
      <div class="gallery-main">
        <img
          src={product.productPhotos[activePhoto]?.photo_path}
          alt={product.product}
          class="gallery-main-img"
        />
      </div>
      {#if product.productPhotos.length > 1}
        <div class="gallery-thumbs">
          {#each product.productPhotos as photo, i}
            <button
              class="thumb-btn"
              class:active-thumb={i === activePhoto}
              onclick={() => (activePhoto = i)}
              aria-label="View photo {i + 1}"
            >
              <img src={photo.photo_path} alt={photo.photo_name} />
            </button>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Info -->
    <div class="product-info" use:reveal={{ delay: 100 }}>
      <!-- Category tags -->
      <div class="product-cats">
        {#each product.categories as cat}
          <a href="/shop/{cat}" class="cat-tag">{cat}</a>
        {/each}
      </div>

      <h2>{product.product}</h2>

      {#if product.size}
        <span class="size-badge">{product.size}</span>
      {/if}

      <div class="info-divider"></div>

      <span class="label">Description</span>
      <p>{product.description_en}</p>

      <span class="label">How to Use</span>
      <p>{product.howToUse}</p>

      <div class="info-divider"></div>

      <div class="buy-section">
        <p class="buy-title">Buy <strong>{product.product}</strong> at:</p>
        <div class="buy-links">
          {#if product.link_shopee}
            <a href={product.link_shopee} target="_blank" rel="noopener noreferrer" class="buy-link-btn shopee" aria-label="Buy on Shopee">
              <img src="/images/shopee.webp" alt="Shopee" />
              <span>Shopee</span>
            </a>
          {/if}
          {#if product.link_tokopedia}
            <a href={product.link_tokopedia} target="_blank" rel="noopener noreferrer" class="buy-link-btn tokped" aria-label="Buy on Tokopedia">
              <img src="/images/tokopedia.webp" alt="Tokopedia" />
              <span>Tokopedia</span>
            </a>
          {/if}
          {#if product.link_wa}
            <a href={product.link_wa} target="_blank" rel="noopener noreferrer" class="buy-link-btn wa" aria-label="Order via WhatsApp">
              <img src="/images/whatsapp.webp" alt="WhatsApp" />
              <span>WhatsApp</span>
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Related Products -->
  {#if related.length > 0}
    <section class="related-section" use:reveal={{ delay: 80 }}>
      <div class="container">
        <div class="related-header">
          <span class="related-eyebrow">You Might Also Like</span>
          <h3>More Products</h3>
        </div>
        <div class="related-grid">
          {#each related as rp}
            <a href="/shop/products/{rp.productCode}" class="related-card">
              <div class="related-img">
                <img src={rp.productPhotos[0]?.photo_path} alt={rp.product} loading="lazy" />
              </div>
              <p>{rp.product}</p>
            </a>
          {/each}
        </div>
      </div>
    </section>
  {/if}
{:else}
  <div class="container" style="padding:80px 5%;text-align:center;">
    <h2 style="color:#e0a80d;">Product not found.</h2>
    <a href="/shop" class="btn-gold" style="margin-top:24px;display:inline-block;">Back to Shop</a>
  </div>
{/if}

<style>
  /* Breadcrumb */
  .product-breadcrumb {
    background: #1a1a1f;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 14px 0;
  }
  .product-breadcrumb .container {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
  }
  .product-breadcrumb a {
    color: rgba(255,255,255,0.5);
    font-family: 'Poppins', sans-serif;
    transition: color 0.2s;
  }
  .product-breadcrumb a:hover { color: var(--primary); }
  .breadcrumb-sep { color: rgba(255,255,255,0.25); }
  .breadcrumb-current { color: var(--primary); font-weight: 600; font-size: 13px; }

  /* Gallery */
  .gallery-main { margin-bottom: 16px; }
  .gallery-main-img {
    width: 100%;
    max-width: 440px;
    height: 440px;
    object-fit: contain;
    border-radius: 12px;
    background: #f4f4f0;
    display: block;
    border: 1px solid #e8e8e8;
    transition: transform 0.4s ease;
  }
  .gallery-main-img:hover { transform: scale(1.02); }

  .gallery-thumbs {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .thumb-btn {
    background: #f4f4f0;
    border: 2px solid transparent;
    border-radius: 8px;
    padding: 0;
    cursor: pointer;
    overflow: hidden;
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    transition: border-color 0.2s, transform 0.2s;
  }
  .thumb-btn:hover { transform: translateY(-2px); }
  .thumb-btn.active-thumb,
  .thumb-btn:hover { border-color: var(--primary); }
  .thumb-btn img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Info panel */
  .product-cats {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }
  .cat-tag {
    font-size: 11px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--primary);
    border: 1px solid rgba(224,168,13,0.4);
    border-radius: 4px;
    padding: 3px 10px;
    transition: background 0.2s;
  }
  .cat-tag:hover { background: rgba(224,168,13,0.1); color: var(--primary); }

  :global(.product-info h2) {
    font-size: clamp(22px, 3vw, 32px) !important;
    color: #111 !important;
    font-family: 'Fredericka the Great', cursive !important;
    line-height: 1.2 !important;
    margin-bottom: 8px !important;
  }

  .info-divider {
    width: 100%;
    height: 1px;
    background: rgba(0,0,0,0.08);
    margin: 20px 0;
  }

  /* Buy buttons */
  .buy-title { color: #333; font-size: 14px; margin-bottom: 14px; }
  .buy-links { display: flex; gap: 12px; flex-wrap: wrap; }
  .buy-link-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 10px;
    border: 1.5px solid #e0e0e0;
    background: #fff;
    font-size: 13px;
    font-weight: 600;
    color: #333;
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  }
  .buy-link-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    color: #333;
  }
  .buy-link-btn.shopee:hover  { border-color: #ee4d2d; }
  .buy-link-btn.tokped:hover  { border-color: #42b549; }
  .buy-link-btn.wa:hover      { border-color: #25d366; }
  .buy-link-btn img { width: 28px; height: 28px; object-fit: contain; border-radius: 6px; }
  .buy-link-btn span { white-space: nowrap; }

  /* Related */
  .related-section {
    background: #f2f1ed;
    padding: 60px 0;
    margin-top: 60px;
  }
  .related-header {
    margin-bottom: 32px;
  }
  .related-eyebrow {
    display: block;
    font-size: 11px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 6px;
  }
  .related-header h3 {
    font-family: 'Fredericka the Great', cursive;
    font-size: clamp(20px, 3vw, 30px);
    color: #111;
  }
  .related-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .related-card {
    flex: 1;
    min-width: 160px;
    max-width: 240px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: block;
  }
  .related-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(0,0,0,0.1);
  }
  .related-img {
    aspect-ratio: 1/1;
    overflow: hidden;
    background: #f4f4f0;
  }
  .related-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  .related-card:hover .related-img img { transform: scale(1.05); }
  .related-card p {
    color: #111;
    font-size: 13px;
    font-weight: 600;
    font-family: 'Bellota Text', sans-serif;
    padding: 12px;
    margin: 0;
    line-height: 1.4;
    text-align: center;
  }

  @media (max-width: 768px) {
    .gallery-main-img { max-width: 100%; height: 300px; }
    .related-section { padding: 40px 0; }
  }
</style>
