<script lang="ts">
  import { page } from '$app/stores';
  import { categories } from '$lib/data/products';

  let menuOpen = $state(false);
  let shopSubmenuOpen = $state(false);

  function toggleMenu() {
    menuOpen = !menuOpen;
    if (!menuOpen) shopSubmenuOpen = false;
  }

  function closeMenu() {
    menuOpen = false;
    shopSubmenuOpen = false;
  }

  function toggleShopSubmenu(e: Event) {
    e.preventDefault();
    shopSubmenuOpen = !shopSubmenuOpen;
  }

  const navLinks = [
    { href: '/',        label: 'HOME' },
    { href: '/shop',    label: 'SHOP' },
    { href: '/contact', label: 'CONTACT' },
    { href: '/about',   label: 'ABOUT' },
  ];

  function isActive(href: string) {
    if (href === '/') return $page.url.pathname === '/';
    return $page.url.pathname.startsWith(href);
  }
</script>

<header>
  <div class="nav-container">
    <!-- Logo -->
    <a href="/" onclick={closeMenu} aria-label="Holvend Home">
      <img class="logo-img" src="/images/logoholvend160.png" alt="Holvend" />
    </a>

    <!-- Desktop Nav -->
    <nav class="desktop-nav" aria-label="Main navigation">
      {#each navLinks as link}
        {#if link.label === 'SHOP'}
          <div
            class="nav-shop-wrap"
            role="navigation"
            aria-label="Shop submenu"
          >
            <a href="/shop" class:active={isActive('/shop')}>{link.label}</a>
            <div class="nav-dropdown">
              <a href="/shop">ALL PRODUCTS</a>
              {#each categories as cat}
                <a href="/shop/{cat.category_code}">
                  {cat.category_name}
                </a>
              {/each}
            </div>
          </div>
        {:else}
          <a href={link.href} class:active={isActive(link.href)}>{link.label}</a>
        {/if}
      {/each}
    </nav>

    <!-- Burger -->
    <button
      class="burger-btn"
      class:opened={menuOpen}
      onclick={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
    >
      <svg width="44" height="44" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
  </div>
</header>

<!-- Drawer overlay -->
<div
  class="drawer-overlay"
  class:open={menuOpen}
  onclick={closeMenu}
  aria-hidden="true"
></div>

<!-- Mobile Drawer -->
<nav class="mobile-drawer" class:open={menuOpen} aria-label="Mobile navigation">
  {#each navLinks as link}
    {#if link.label === 'SHOP'}
      <div>
        <div class="drawer-shop-toggle">
          <a href="/shop" class="drawer-link" class:active={isActive('/shop')} onclick={closeMenu}>
            {link.label}
          </a>
          <button
            onclick={toggleShopSubmenu}
            style="background:transparent; border:none; cursor:pointer; padding:0;"
            aria-label="Toggle shop submenu"
          >
            <svg class="chevron" class:rotated={shopSubmenuOpen} viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
            </svg>
          </button>
        </div>
        <div class="drawer-submenu" class:open={shopSubmenuOpen}>
          <a href="/shop" onclick={closeMenu}>All Products</a>
          {#each categories as cat}
            <a href="/shop/{cat.category_code}" onclick={closeMenu}>{cat.category_name}</a>
          {/each}
        </div>
      </div>
    {:else}
      <a href={link.href} class="drawer-link" class:active={isActive(link.href)} onclick={closeMenu}>
        {link.label}
      </a>
    {/if}
  {/each}
</nav>
