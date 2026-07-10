<script lang="ts">
  import { goto } from '$app/navigation';
  import { reveal } from '$lib/actions/reveal';
  import { products, categories } from '$lib/data/products';
</script>

<svelte:head>
  <title>Shop — Holvend</title>
  <meta name="description" content="Browse all Holvend men's grooming products. Hair styling, hair care, and shave essentials." />
</svelte:head>

<!-- Page Header -->
<div class="shop-page-header">
  <span class="shop-eyebrow">Our Products</span>
  <h1>The Collection</h1>
  <p>Discover power-packed essentials for every grooming need.</p>
</div>

<div class="shop-layout">
  <!-- Sidebar -->
  <aside class="shop-sidebar" use:reveal>
    <div class="sidebar-block">
      <h2>ALL</h2>
      <div class="category-desc">
        Discover power packed product essentials that fulfill a variety of men care needs.
      </div>
    </div>
    <nav class="category-nav" aria-label="Product categories">
      <a href="/shop" class="active-cat">All Products</a>
      {#each categories as cat}
        <a href="/shop/{cat.category_code}">{cat.category_name}</a>
      {/each}
    </nav>
  </aside>

  <!-- Products Grid -->
  <div class="shop-products">
    {#each products as product, i}
      <div
        class="product-card"
        use:reveal={{ delay: i * 70 }}
        onclick={() => goto(`/shop/products/${product.productCode}`)}
        role="button"
        tabindex="0"
        onkeydown={(e) => e.key === 'Enter' && goto(`/shop/products/${product.productCode}`)}
        aria-label="View {product.product}"
      >
        <div class="product-card-img">
          {#if product.productPhotos[0]}
            <img src={product.productPhotos[0].photo_path} alt={product.product} loading="lazy" />
          {:else}
            <div class="img-placeholder"></div>
          {/if}
          <div class="card-overlay">
            <span class="card-cta">View Details</span>
          </div>
        </div>
        <div class="product-card-info">
          <h3>{product.product}</h3>
          {#if product.size}
            <span class="card-size">{product.size}</span>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .shop-page-header {
    background: linear-gradient(180deg, #1E1E24 0%, #111113 100%);
    text-align: center;
    padding: 60px 20px 50px;
    border-bottom: 1px solid rgba(224,168,13,0.15);
  }
  .shop-eyebrow {
    display: block;
    font-size: 11px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 10px;
  }
  .shop-page-header h1 {
    font-family: 'Fredericka the Great', cursive;
    font-size: clamp(32px, 6vw, 60px);
    color: #fff;
    margin-bottom: 12px;
  }
  .shop-page-header p {
    color: rgba(255,255,255,0.5);
    font-size: 15px;
    margin: 0;
  }

  /* Override product card for shop page */
  :global(.shop-products) { align-items: flex-start; }

  .product-card-img {
    position: relative;
  }
  .card-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 8px;
  }
  .product-card:hover .card-overlay { opacity: 1; }
  .card-cta {
    background: var(--primary);
    color: #000;
    font-size: 12px;
    font-weight: 700;
    padding: 8px 20px;
    border-radius: 50px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .product-card-info {
    padding: 4px 4px 0;
  }
  .card-size {
    display: inline-block;
    font-size: 11px;
    color: var(--primary);
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-top: 2px;
  }

  .img-placeholder {
    background: #eee;
    width: 100%;
    height: 100%;
  }
</style>
