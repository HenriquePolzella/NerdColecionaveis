const products = [
  {sku:'PROD002',universe:'naruto',type:'ACTION FIGURE',name:'Naruto (20cm c/ suporte)',price:'R$ 90,00',images:['assets/prod002-naruto-gallery-3.png','assets/prod002-naruto-dark.png','assets/prod002-naruto-gallery-2.png']},
  {sku:'PROD003',universe:'naruto',type:'ACTION FIGURE',name:'Itachi (20cm c/ suporte)',price:'R$ 90,00',images:['assets/prod003-itachi-gallery-4.png','assets/prod003-itachi-dark.png','assets/prod003-itachi-gallery-2.png']},
  {sku:'PROD004',universe:'dragon-ball',type:'ACTION FIGURE',name:'Goku Criança - esfera do dragão (10cm) - Azul ou Laranja',price:'R$ 75,00',images:['assets/prod004-goku-crianca-01-azul.png','assets/prod004-goku-crianca-02-laranja.png','assets/prod004-goku-crianca-03-dupla.png']},
  {sku:'PROD006',universe:'dragon-ball',type:'ACTION FIGURE',name:'Cooler - Dragon Ball Z - (17cm)',price:'R$ 90,00',image:'assets/prod006-cooler-01.png'},
  {sku:'PROD007',universe:'dragon-ball',type:'ACTION FIGURE',name:'Goku Sayadin - Dragon Ball Z - (17cm)',price:'R$ 90,00',available:false,image:'assets/prod007-goku-sayadin-01.png'},
  {sku:'PROD008',universe:'dragon-ball',type:'ACTION FIGURE',name:'Capitão Genyu - Dragon Ball Z - (17cm)',price:'R$ 90,00',image:'assets/prod008-capitao-genyu-01.png'},
  {sku:'PROD009',universe:'dragon-ball',type:'ACTION FIGURE',name:'Gogeta - Dragon Ball Z - (17cm)',price:'R$ 90,00',image:'assets/prod009-gogeta-01.png'},
  {sku:'PROD010',universe:'dragon-ball',type:'ACTION FIGURE',name:'Gohan - Dragon Ball Z - (17cm)',price:'R$ 90,00',image:'assets/prod010-gohan-01.png'},
  {sku:'PROD011',universe:'dragon-ball',type:'ACTION FIGURE',name:'Son Vegeta - Dragon Ball Z - (33cm)',price:'R$ 135,00',image:'assets/action-figure-cutout.png'},
  {sku:'PROD012',universe:'one-piece',type:'ACTION FIGURE',name:'Monkey D. Luffy Correndo - One Piece - (17cm)',price:'R$ 80,00',images:['assets/prod012-luffy-01.png','assets/prod012-luffy-02.png','assets/prod012-luffy-03.png']},
  {sku:'PROD013',universe:'one-piece',type:'ACTION FIGURE',name:'Rononoa Zoro - One Piece - (17cm)',price:'R$ 60,00',images:['assets/prod013-zoro-01.png','assets/prod013-zoro-02.png','assets/prod013-zoro-03.png','assets/prod013-zoro-04.png']},
  {sku:'PROD014',universe:'one-piece',type:'ACTION FIGURE',name:'Capitão Shanks - One Piece - (17cm)',price:'R$ 60,00',image:'assets/prod014-shanks-01.png'},
  {sku:'PROD015',universe:'marvel',type:'ACTION FIGURE',name:'Spider Man - Marvel - (15cm)',price:'R$ 50,00',image:'assets/prod024-spiderman-black.png'},
  {sku:'PROD016',universe:'pokemon',type:'POP STYLE',name:'Pikachu - Edição 353',price:'R$ 45,00',images:['assets/prod016-pikachu-box-dark-v3.png','assets/prod016-pikachu-dark-v2.png']},
  {sku:'PROD017',universe:'pokemon',type:'POP STYLE',name:'Squirtle - Edição 504',price:'R$ 45,00',images:['assets/prod017-squirtle-box-dark-v3.png','assets/prod017-squirtle-box-figure-dark-v3.png']},
  {sku:'PROD018',universe:'pokemon',type:'POP STYLE',name:'Charizard - Edição 843',price:'R$ 45,00',images:['assets/charizard-01-caixa.png','assets/charizard-02-caixa-e-figura.png']},
  {sku:'PROD019',universe:'pokemon',type:'POP STYLE',name:'Dragonite - Edição 850',price:'R$ 45,00',images:['assets/prod019-dragonite-dark-v2.png','assets/dragonite-02-caixa-e-figura.png']},
  {sku:'PROD020',universe:'pokemon',type:'POP STYLE',name:'Charmander - Edição 455',price:'R$ 45,00',images:['assets/prod020-charmander-dark-v2.png','assets/charmander-02-caixa-e-figura.png']},
  {sku:'PROD021',universe:'dc',type:'ESTÁTUA DE RESINA',name:'The Joker - (22cm)',price:'R$ 50,00',image:'assets/prod021-joker-black.png'},
  {sku:'PROD022',universe:'games',type:'ESTÁTUA DE RESINA',name:'Kratos - (21,5cm)',price:'R$ 60,00',images:['assets/prod022-kratos-01.png','assets/prod022-kratos-02.png','assets/prod022-kratos-03.png']},
  {sku:'PROD023',universe:'marvel',type:'ESTÁTUA DE RESINA',name:'Iron Man - Busto - 16(cm)',price:'R$ 125,00',available:false,image:'assets/prod023-ironman-black.png'},
  {sku:'PROD025',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇧🇷',name:'Mega Charizard Y ex (030/∞)',collection:'Mega Evolution Promos',price:'R$ 30,00',image:'assets/prod025-mega-charizard-y-ex-030.png'},
  {sku:'PROD026',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇧🇷',name:'Capacete Punk',collection:'Fogo Fantasmagórico • 2025',price:'R$ 7,00',image:'assets/prod026-capacete-punk.png'},
  {sku:'PROD027',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇧🇷',name:'Vileplume ex da Érica (003/217)',collection:'Heróis Excelsos • 2026',price:'R$ 9,50',image:'assets/prod027-vileplume-ex-erika-003-217.png'},
  {sku:'PROD028',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Fomantis (085/084)',collection:'Escuridão Absoluta • 2026',price:'R$ 20,00',image:'assets/prod028-fomantis-085-084.png'},
  {sku:'PROD029',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Silvally (095/084)',collection:'Escuridão Absoluta • 2026',price:'R$ 19,00',image:'assets/prod029-silvally-095-084.png'},
  {sku:'PROD030',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Lurantis ex (004/084)',collection:'Escuridão Absoluta • 2026',price:'R$ 3,00',image:'assets/prod030-lurantis-ex-004-084.png'},
  {sku:'PROD031',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇧🇷',name:'Regice ex (048/217)',collection:'Heróis Excelsos • 2026',price:'R$ 5,00',image:'assets/prod031-regice-ex-048-217.png'},
  {sku:'PROD032',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Mega Chandelure ex (038/084)',collection:'Escuridão Absoluta • 2026',price:'R$ 6,00',image:'assets/prod032-mega-chandelure-ex-038-084.png'},
  {sku:'PROD033',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇧🇷',name:'Registeel ex (145/217)',collection:'Heróis Excelsos • 2026',price:'R$ 4,00',image:'assets/prod033-registeel-ex-145-217.png'},
  {sku:'PROD034',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Zarude (088/∞)',collection:'Mega Evolution Promos • 2025',price:'R$ 22,00',image:'assets/prod034-zarude-088-infinito.png'},
  {sku:'PROD035',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Morpeko ex (102/084)',collection:'Escuridão Absoluta • 2026',price:'R$ 15,00',image:'assets/prod035-morpeko-ex-102-084.png'},
  {sku:'PROD036',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Grimmsnarl ex da Marine (136/182)',collection:'Rivais Predestinados • 2025',price:'R$ 8,00',image:'assets/prod036-grimmsnarl-ex-marine-136-182.png'},
  {sku:'PROD037',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Persian ex da Equipe Rocket (218/∞)',collection:'Escarlate e Violeta Promos • 2023',price:'R$ 10,00',image:'assets/prod037-persian-ex-equipe-rocket-218-infinito.png'},
  {sku:'PROD038',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇧🇷',name:'Bulbasaur (133/132)',collection:'Megaevolução • 2025',price:'R$ 45,00',image:'assets/prod038-bulbasaur-133-132.png'},
  {sku:'PROD039',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇧🇷',name:'Spiritomb da Cíntia (244/217)',collection:'Heróis Excelsos • 2026',price:'R$ 45,00',image:'assets/prod039-spiritomb-cintia-244-217.png'},
  {sku:'PROD040',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇧🇷',name:'Dragapult ex (160/217)',collection:'Heróis Excelsos • 2026',price:'R$ 5,00',image:'assets/prod040-dragapult-ex-160-217.png'},
  {sku:'PROD041',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇧🇷',name:'Mega Eelektross ex (266/217)',collection:'Heróis Excelsos • 2026',price:'R$ 20,00',image:'assets/prod041-mega-eelektross-ex-266-217.png'},
  {sku:'PROD042',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇧🇷',name:'Dugtrio da Equipe Rocket (239/217)',collection:'Heróis Excelsos • 2026',price:'R$ 35,00',image:'assets/prod042-dugtrio-equipe-rocket-239-217.png'},
  {sku:'PROD043',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Mega Zeraora ex (098/084)',collection:'Escuridão Absoluta • 2026',price:'R$ 25,00',image:'assets/prod043-mega-zeraora-ex-098-084.png'},
  {sku:'PROD044',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Morpeko ex (055/084)',collection:'Escuridão Absoluta • 2026',price:'R$ 3,50',image:'assets/prod044-morpeko-ex-055-084.png'},
  {sku:'PROD045',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Mega Darkrai ex (048/084)',collection:'Escuridão Absoluta • 2026',price:'R$ 8,00',image:'assets/prod045-mega-darkrai-ex-048-084.png'},
  {sku:'PROD046',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Clefairy ex da Lílian (056/159)',collection:'Amigos de Jornada • 2025',price:'R$ 40,00',image:'assets/prod046-clefairy-ex-lilian-056-159.png'},
  {sku:'PROD047',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Clamperl (195/182)',collection:'Rivais Predestinados • 2025',price:'R$ 35,00',image:'assets/prod047-clamperl-195-182.png'},
  {sku:'PROD048',universe:'pokemon',type:'CARTA POKÉMON • NM • 🇺🇸',name:'Dhelmise (091/084)',collection:'Escuridão Absoluta • 2026',price:'R$ 30,00',image:'assets/prod048-dhelmise-091-084.png'}
];

const names = {
  naruto:'Naruto',
  pokemon:'Pokémon',
  'one-piece':'One Piece',
  'dragon-ball':'Dragon Ball',
  marvel:'Marvel',
  dc:'DC',
  games:'Games'
};

const params = new URLSearchParams(location.search);
const universe = params.get('universo');
const targetSku = params.get('produto');
const searchQuery = (params.get('busca') || '').trim();
const normalizeSearch = value => String(value || '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('pt-BR');
const normalizedQuery = normalizeSearch(searchQuery);
const universeFiltered = universe ? products.filter(item => item.universe === universe) : products;
const filtered = normalizedQuery ? universeFiltered.filter(item => normalizeSearch([
  item.name,
  item.sku,
  item.type,
  item.collection,
  names[item.universe],
  item.universe
].join(' ')).includes(normalizedQuery)) : universeFiltered;
const grid = document.getElementById('catalog-grid');
const title = document.getElementById('universe-title');
const count = document.getElementById('result-count');
const sortSelect = document.getElementById('product-sort');
const description = document.getElementById('catalog-description');

title.textContent = searchQuery
  ? (universe && names[universe] ? `${names[universe]} para “${searchQuery}”` : `“${searchQuery}”`)
  : (universe && names[universe] ? names[universe] : 'todos os universos');
if (searchQuery) {
  description.textContent = `Resultados encontrados para a busca “${searchQuery}”.`;
}
count.textContent = filtered.length;

document.querySelectorAll('.filter-tabs a').forEach(link => {
  if ((universe && link.dataset.filter === universe) || (!universe && !link.dataset.filter)) {
    link.classList.add('active');
  }
});

const priceToNumber = price => Number(
  price.replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.')
);

// Preencha somente com números (ex.: 5511999999999) para abrir diretamente a conversa da loja.
const whatsappNumber = '5511941561672';

const getWhatsAppLink = item => {
  const message = [
    'Olá, *Nerds Colecionáveis*!',
    '',
    'Encontrei este item no site de vocês:',
    '',
    `*Produto:* ${item.name}`,
    `*SKU:* ${item.sku}`,
    `*Valor:* ${item.price}`,
    '',
    'Tenho interesse em adquiri-lo. Poderiam me passar mais informações sobre disponibilidade e pagamento?'
  ].join('\n');
  const destination = whatsappNumber ? `https://wa.me/${whatsappNumber}` : 'https://wa.me/';
  return `${destination}?text=${encodeURIComponent(message)}`;
};

const sortProducts = mode => {
  const sorted = [...filtered];

  if (mode === 'name-asc') {
    sorted.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' }));
  } else if (mode === 'name-desc') {
    sorted.sort((a, b) => b.name.localeCompare(a.name, 'pt-BR', { sensitivity: 'base' }));
  } else if (mode === 'price-asc') {
    sorted.sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
  } else if (mode === 'price-desc') {
    sorted.sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price));
  }

  return sorted;
};

const bindGalleries = () => {
  document.querySelectorAll('.product-gallery').forEach(gallery => {
    const image = gallery.querySelector('.gallery-main');
    const images = JSON.parse(image.dataset.gallery);
    const counter = gallery.querySelector('.gallery-counter');

    const showImage = direction => {
      let index = Number(image.dataset.index);
      index = (index + direction + images.length) % images.length;
      image.dataset.index = index;
      image.src = images[index];
      counter.textContent = `${index + 1}/${images.length}`;
    };

    gallery.querySelector('.gallery-prev').addEventListener('click', event => {
      event.stopPropagation();
      showImage(-1);
    });

    gallery.querySelector('.gallery-next').addEventListener('click', event => {
      event.stopPropagation();
      showImage(1);
    });
  });
};

const renderProducts = (mode = 'default') => {
  const orderedProducts = sortProducts(mode);

  grid.innerHTML = orderedProducts.length ? orderedProducts.map(item => {
    const gallery = item.images || (item.image ? [item.image] : []);
    return `
  <article class="catalog-card ${item.available === false ? 'is-unavailable' : ''}" data-sku="${item.sku}">
    ${gallery.length ? `
      <div class="catalog-card-media product-photo-media ${gallery.length > 1 ? 'product-gallery' : ''}">
        <span class="product-sku">${item.sku}</span>
        ${item.available === false ? '<span class="unavailable-badge">INDISPONÍVEL</span>' : ''}
        <img class="gallery-main" src="${gallery[0]}" alt="${item.name}" data-gallery='${JSON.stringify(gallery)}' data-index="0">
        ${gallery.length > 1 ? `
          <button class="gallery-arrow gallery-prev" type="button" aria-label="Foto anterior">‹</button>
          <button class="gallery-arrow gallery-next" type="button" aria-label="Próxima foto">›</button>
          <span class="gallery-counter">1/${gallery.length}</span>
        ` : ''}
      </div>
    ` : `
      <div class="catalog-card-media empty-product-media">
        <span class="product-sku">${item.sku}</span>
        <div class="empty-product-visual">IMAGEM<br>EM BREVE</div>
      </div>
    `}
    <div class="catalog-card-body">
      <span>${item.type}</span>
      <h2>${item.name}</h2>
      ${item.collection ? `<p class="product-collection">${item.collection}</p>` : ''}
      ${item.available === false ? '<span class="availability-message">INDISPONÍVEL</span>' : `
        <strong>${item.price}</strong>
        <a class="whatsapp-buy" href="${getWhatsAppLink(item)}" target="_blank" rel="noopener noreferrer" aria-label="Comprar ${item.name} pelo WhatsApp">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2a9.84 9.84 0 0 0-8.43 14.91L2 22l5.23-1.56A9.98 9.98 0 1 0 12.04 2Zm0 17.93a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.1.92.96-3.02-.2-.31a7.92 7.92 0 1 1 6.77 3.72Zm4.46-5.93c-.25-.12-1.45-.7-1.67-.78-.23-.08-.39-.12-.56.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.25-.12-1.03-.37-1.96-1.18a7.4 7.4 0 0 1-1.36-1.67c-.14-.24-.02-.37.1-.49.11-.11.25-.28.37-.42.12-.14.16-.24.25-.4.08-.16.04-.3-.02-.42-.06-.12-.56-1.33-.76-1.82-.2-.48-.41-.41-.56-.42h-.47c-.16 0-.43.06-.65.3-.22.24-.85.82-.85 2s.87 2.33.99 2.49c.12.16 1.71 2.58 4.14 3.62.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/>
          </svg>
          Comprar pelo WhatsApp
        </a>
      `}
    </div>
  </article>
  `;
  }).join('') : `<div class="empty-catalog">Nenhum produto encontrado${searchQuery ? ` para “${searchQuery}”` : ' neste universo'}.</div>`;

  bindGalleries();

  if (targetSku) {
    const targetCard = grid.querySelector(`[data-sku="${targetSku}"]`);
    if (targetCard) {
      targetCard.classList.add('is-targeted');
      requestAnimationFrame(() => targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    }
  }
};

sortSelect.addEventListener('change', () => renderProducts(sortSelect.value));
renderProducts();
