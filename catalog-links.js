document.querySelectorAll('.product-card[data-universe]').forEach(card => {
  card.tabIndex = 0;
  card.setAttribute('role', 'link');
  card.setAttribute('aria-label', card.dataset.product ? `Ver ${card.dataset.product} no catálogo` : `Ver produtos de ${card.dataset.universe}`);

  const openCatalog = () => {
    const params = new URLSearchParams({ universo: card.dataset.universe });
    if (card.dataset.sku) params.set('produto', card.dataset.sku);
    window.location.href = `produtos.html?${params.toString()}`;
  };

  card.addEventListener('click', openCatalog);
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCatalog(event);
    }
  });
});
