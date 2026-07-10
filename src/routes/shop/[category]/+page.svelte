<script lang="ts">
  import { goto } from '$app/navigation';
  import { reveal } from '$lib/actions/reveal';
  import { products, categories, getProductsByCategory } from '$lib/data/products';
  import { page } from '$app/stores';

  let categoryCode = $derived($page.params.category);
  let currentCategory = $derived(categories.find((c) => c.category_code === categoryCode));
  let filteredProducts = $derived(getProductsByCategory(categoryCode));
</script>

<svelte:head>
  <title>{currentCategory?.category_name ?? 'Category'} — Holvend Shop</title>
  <meta name="description" content="Browse Holvend {currentCategory?.category_name} products." />
</svelte:head>

<!-- Page Header -->
<div class="shop-page-header">
  <span class="shop-eyebrow">Collection</span>
  <h1>{currentCategory?.category_name ?? categoryCode}</h1>
  {#if currentCategory?.description}
    <p>{currentCategory.description}</p>
  {/if}
</div>

<div class="shop-layout">
  <!-- Sidebar -->
  <aside class="shop-sidebar" use:reveal>
    <div class="sidebar-block">
      <h2>{currentCategory?.category_name ?? categoryCode}</h2>
      {#if currentCategory?.description}
        <div class="category-desc">{currentCategory.description}</div>
      {/if}
    </div>
    <nav class="category-nav" aria-label="Product categories">
      <a href="/shop">All Products</a>
      {#each categories as cat}
        <a
          href="/shop/{cat.category_code}"
          class:active-cat={cat.category_code === categoryCode}
        >{cat.category_name}</a>
      {/each}
    </nav>
  </aside>

  <!-- Products Grid -->
  <div class="shop-products">
    {#if filteredProducts.length > 0}
      {#each filteredProducts as product, i}
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
    {:else}
      <div class="coming-soon-box" use:reveal>
        <div class="coming-soon-inner">
          <div class="coming-soon-icon">⏳</div>
          <h2>Coming Soon</h2>
          <p>{currentCategory?.category_name ?? categoryCode} products are on their way.</p>
          <a href="/shop" class="btn-gold" style="margin-top:20px; display:inline-block;">Browse All Products</a>
        </div>
      </div>
    {/if}
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
    font-size: clamp(28px, 5vw, 52px);
    color: #fff;
    margin-bottom: 10px;
  }
  .shop-page-header p {
    color: rgba(255,255,255,0.5);
    font-size: 15px;
    margin: 0;
  }

  .product-card-img { position: relative; }
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
  .product-card-info { padding: 4px 4px 0; }
  .card-size {
    display: inline-block;
    font-size: 11px;
    color: var(--primary);
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-top: 2px;
  }
  .img-placeholder { background: #eee; width: 100%; height: 100%; }

  .coming-soon-icon { font-size: 40px; margin-bottom: 12px; }
  .coming-soon-inner p { color: #666; margin: 8px 0 0; }
</style>
