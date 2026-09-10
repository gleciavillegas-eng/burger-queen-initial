/* ---------------------------------------------------------
   PRODUCT ORDERING
--------------------------------------------------------- */

function initProductOrdering() {

  const cards = document.querySelectorAll('.product-card');

  cards.forEach((card) => {

    const productId = card.dataset.productId;

    let product = PRODUCTS.find(
      (p) => p.id === productId
    );

    /*
      If data-product-id isn't in the HTML,
      try using the card's position.
    */
    if (!product) {

      const cardIndex =
        Array.from(cards).indexOf(card);

      product = PRODUCTS[cardIndex];
    }

    if (!product) return;

    /* Save product ID */
    card.dataset.productId = product.id;

    /* Make card relative */
    if (!card.style.position) {
      card.style.position = 'relative';
    }

    /* Prevent duplicate buttons */
    if (card.querySelector('.bq-add-to-cart')) {
      return;
    }

    /* Create Add button */
    const addBtn = document.createElement('button');

    addBtn.className = 'bq-add-to-cart';

    addBtn.textContent =
      `+ Add · $${product.price.toFixed(2)}`;

    addBtn.title =
      `Add ${product.name} to your order`;

    addBtn.style.cssText = `
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(27,19,16,.85);
      color: #F8DCC0;
      border: none;
      border-radius: 30px;
      padding: 8px 14px;
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      font-family: 'Work Sans', sans-serif;
      transition: background .2s ease;
      z-index: 5;
    `;

    addBtn.addEventListener('mouseenter', () => {
      addBtn.style.background = '#D9992E';
    });

    addBtn.addEventListener('mouseleave', () => {
      addBtn.style.background =
        'rgba(27,19,16,.85)';
    });

    addBtn.addEventListener('click', (e) => {

      e.preventDefault();
      e.stopPropagation();

      addToCart(product.id);

    });

    card.appendChild(addBtn);

  });

  initCartUI();
}