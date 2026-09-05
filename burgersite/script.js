/* =========================================================
   BURGER QUEEN — SITE SCRIPT
   Handles: mobile nav, header scroll shadow, product filter,
   testimonial slider, scroll-spy nav highlight, back-to-top,
   AND real functionality for: ordering (cart), Royal Club
   signup/points, franchise inquiries, and app-notify signup.

   NOTE ON DATA: there's no backend here, so cart contents,
   club membership, franchise leads, and app-notify emails
   are all saved in the browser's localStorage. That's enough
   to demo/test everything end-to-end. When you have a real
   backend, swap the getX()/saveX() functions below for fetch()
   calls to your API — the rest of the code doesn't need to change.
   ========================================================= */

/* ---------------------------------------------------------
   MENU DATA
   Matches the 6 product cards in the Bestsellers grid, in
   order. Edit prices/names here — the UI reads from this.
--------------------------------------------------------- */
const PRODUCTS = [
  { id: 'crown-classic',   name: 'The Crown Classic',    price: 8.99 },
  { id: 'double-stack',    name: "Queen's Double Stack", price: 10.49 },
  { id: 'royal-smash',     name: 'Royal Smash',          price: 9.49 },
  { id: 'spicy-sovereign', name: 'Spicy Sovereign',      price: 9.99 },
  { id: 'gold-bbq-melt',   name: 'Gold BBQ Melt',        price: 10.99 },
  { id: 'truffle-royale',  name: 'Truffle Royale',       price: 12.49 }
];

const TAX_RATE = 0.08; // 8% — change to match your local sales tax

document.addEventListener('DOMContentLoaded', () => {
  initReceiptPrintStyles();
  initMobileNav();
  initHeaderScroll();
  initProductFilter();
  initProductOrdering();
  initTestimonialSlider();
  initScrollSpy();
  classifyButtons();
  initRoyalClub();
  initFranchise();
  initAppNotify();
  initBackToTop();
});

/* ---------------------------------------------------------
   1. MOBILE NAV
--------------------------------------------------------- */
function initMobileNav() {
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelector('.nav-links');
  const navCta = document.querySelector('.nav-cta');
  if (!nav || !navLinks) return;

  const toggleBtn = document.createElement('button');
  toggleBtn.setAttribute('aria-label', 'Toggle navigation menu');
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.style.cssText =
    'display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:6px;z-index:200;';
  toggleBtn.innerHTML = `
    <span style="width:24px;height:2px;background:#F8DCC0;display:block;"></span>
    <span style="width:24px;height:2px;background:#F8DCC0;display:block;"></span>
    <span style="width:24px;height:2px;background:#F8DCC0;display:block;"></span>
  `;
  nav.insertBefore(toggleBtn, navCta || null);
  nav.style.position = 'relative';

  navLinks.dataset.open = 'false';

  function layout() {
    const mobile = window.innerWidth <= 900;
    toggleBtn.style.display = mobile ? 'flex' : 'none';

    if (mobile) {
      const open = navLinks.dataset.open === 'true';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.background = '#5A1E24';
      navLinks.style.padding = '20px 32px';
      navLinks.style.gap = '18px';
      navLinks.style.overflow = 'hidden';
      navLinks.style.transition = 'max-height .3s ease, padding .3s ease';
      navLinks.style.maxHeight = open ? '400px' : '0px';
      navLinks.style.paddingTop = open ? '20px' : '0px';
      navLinks.style.paddingBottom = open ? '20px' : '0px';
    } else {
      navLinks.removeAttribute('style');
      navLinks.dataset.open = 'false';
    }
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.dataset.open === 'true';
    navLinks.dataset.open = (!isOpen).toString();
    toggleBtn.setAttribute('aria-expanded', (!isOpen).toString());
    layout();
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && window.innerWidth <= 900) {
      navLinks.dataset.open = 'false';
      toggleBtn.setAttribute('aria-expanded', 'false');
      layout();
    }
  });

  window.addEventListener('resize', layout);
  layout();
}

/* ---------------------------------------------------------
   2. HEADER SCROLL SHADOW
--------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  const update = () => {
    header.style.boxShadow =
      window.scrollY > 20 ? '0 6px 20px rgba(0,0,0,.18)' : 'none';
    header.style.transition = 'box-shadow .2s ease';
  };
  update();
  window.addEventListener('scroll', update);
}

/* ---------------------------------------------------------
   3. PRODUCT / BESTSELLERS FILTER
--------------------------------------------------------- */
function initProductFilter() {
  const buttons = document.querySelectorAll('.filter-pills button');
  const cards = document.querySelectorAll('.product-card');
  const grid = document.querySelector('.product-grid');
  if (!buttons.length || !grid) return;

  const emptyMsg = document.createElement('p');
  emptyMsg.textContent = 'New items coming soon to this category — check back soon!';
  emptyMsg.style.cssText =
    'grid-column:1/-1;text-align:center;padding:50px 0;color:#6b4b41;font-size:15px;display:none;';
  grid.appendChild(emptyMsg);

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.textContent.trim().toLowerCase();
      let anyVisible = false;

      cards.forEach((card) => {
        const cardCategory = (card.dataset.category || 'burgers').toLowerCase();
        const match = cardCategory === category;
        card.style.display = match ? '' : 'none';
        if (match) anyVisible = true;
      });

      emptyMsg.style.display = anyVisible ? 'none' : 'block';
    });
  });
}

/* ---------------------------------------------------------
   4. TESTIMONIAL SLIDER
--------------------------------------------------------- */
function initTestimonialSlider() {
  const testimonials = [
    {
      quote: "The Crown Classic is hands down the best burger I've ever had. The brioche, the sauce, the char — everything is perfect.",
      name: 'Mark V.'
    },
    {
      quote: 'Royal Smash lives up to its name — juicy, smoky, and worth every crown I earned getting it.',
      name: 'Jasmine T.'
    },
    {
      quote: "Consistent every single time. That's rare these days, and Burger Queen nails it visit after visit.",
      name: 'Daniel R.'
    }
  ];

  const quoteEl = document.querySelector('.test-card p');
  const nameEl = document.querySelector('.test-author-info span');
  const prevBtn = document.querySelector('.test-nav button[aria-label="Previous"]');
  const nextBtn = document.querySelector('.test-nav button[aria-label="Next"]');
  if (!quoteEl || !nameEl || !prevBtn || !nextBtn) return;

  let current = 0;
  quoteEl.style.transition = 'opacity .15s ease';
  nameEl.style.transition = 'opacity .15s ease';

  function render() {
    quoteEl.style.opacity = '0';
    nameEl.style.opacity = '0';
    setTimeout(() => {
      quoteEl.textContent = `"${testimonials[current].quote}"`;
      nameEl.textContent = testimonials[current].name;
      quoteEl.style.opacity = '1';
      nameEl.style.opacity = '1';
    }, 150);
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    render();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % testimonials.length;
    render();
  });
}

/* ---------------------------------------------------------
   5. SCROLL-SPY NAV HIGHLIGHT
--------------------------------------------------------- */
function initScrollSpy() {
  const navAnchors = document.querySelectorAll('.nav-links a');
  if (!navAnchors.length) return;

  const map = {};
  navAnchors.forEach((a) => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      map[href.slice(1)] = a;
    }
  });

  const ids = Object.keys(map).filter((id) => document.getElementById(id));
  if (!ids.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = map[entry.target.id];
        if (!link || !entry.isIntersecting) return;
        navAnchors.forEach((a) => {
          a.style.color = '';
          a.style.opacity = '';
        });
        link.style.color = '#D9992E';
        link.style.opacity = '1';
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );

  ids.forEach((id) => observer.observe(document.getElementById(id)));
}

/* ---------------------------------------------------------
   6. BACK TO TOP BUTTON
--------------------------------------------------------- */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.setAttribute('aria-label', 'Back to top');
  btn.textContent = '↑';
  btn.style.cssText = `
    position:fixed;bottom:30px;right:30px;width:46px;height:46px;
    border-radius:50%;background:#D9992E;color:#1B1310;border:none;
    font-size:18px;cursor:pointer;opacity:0;pointer-events:none;
    transition:opacity .3s ease, transform .2s ease;
    box-shadow:0 8px 20px rgba(0,0,0,.2);z-index:999;
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    const visible = window.scrollY > 500;
    btn.style.opacity = visible ? '1' : '0';
    btn.style.pointerEvents = visible ? 'auto' : 'none';
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btn.addEventListener('mouseenter', () => (btn.style.transform = 'scale(1.08)'));
  btn.addEventListener('mouseleave', () => (btn.style.transform = 'scale(1)'));
}

/* ---------------------------------------------------------
   7. TOAST (small confirmation messages)
--------------------------------------------------------- */
function showToast(message) {
  let toast = document.querySelector('.site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'site-toast';
    toast.style.cssText = `
      position:fixed;bottom:30px;left:50%;
      transform:translateX(-50%) translateY(20px);
      background:#1B1310;color:#F8DCC0;padding:14px 24px;
      border-radius:30px;font-family:'Work Sans',sans-serif;
      font-size:14px;opacity:0;transition:opacity .3s ease, transform .3s ease;
      z-index:1000;max-width:90%;text-align:center;
      box-shadow:0 10px 30px rgba(0,0,0,.25);
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 3000);
}

/* ---------------------------------------------------------
   8. MODAL SYSTEM (reused by cart, club, franchise, app)
--------------------------------------------------------- */
function createModal(contentHTML) {
  const overlay = document.createElement('div');
  overlay.className = 'bq-modal-overlay';
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(27,19,16,.6);
    display:flex;align-items:center;justify-content:center;z-index:2000;
    opacity:0;transition:opacity .25s ease;padding:20px;
  `;

  const box = document.createElement('div');
  box.className = 'bq-modal';
  box.style.cssText = `
    background:#FBEADA;border-radius:18px;max-width:460px;width:100%;
    max-height:88vh;overflow-y:auto;padding:32px;position:relative;
    transform:translateY(20px);transition:transform .25s ease;
    font-family:'Work Sans',sans-serif;color:#241512;
    box-shadow:0 30px 60px rgba(0,0,0,.3);
  `;
  box.innerHTML = contentHTML;

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.style.cssText = `
    position:absolute;top:16px;right:16px;background:none;border:none;
    font-size:26px;line-height:1;cursor:pointer;color:#5A1E24;
  `;
  box.appendChild(closeBtn);

  overlay.appendChild(box);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    box.style.transform = 'translateY(0)';
  });

  function close() {
    overlay.style.opacity = '0';
    box.style.transform = 'translateY(20px)';
    document.body.style.overflow = '';
    setTimeout(() => overlay.remove(), 250);
  }

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') {
      close();
      document.removeEventListener('keydown', esc);
    }
  });

  return { box, close };
}

function addModalCloseButton(modal) {
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.style.cssText = `
    position:absolute;top:16px;right:16px;background:none;border:none;
    font-size:26px;line-height:1;cursor:pointer;color:#5A1E24;
  `;
  closeBtn.addEventListener('click', modal.close);
  modal.box.appendChild(closeBtn);
}

/* ---------------------------------------------------------
   9. CART (Order Now)
--------------------------------------------------------- */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('bq_cart')) || [];
  } catch (e) {
    return [];
  }
}
function setCart(cart) {
  localStorage.setItem('bq_cart', JSON.stringify(cart));
  updateCartBadge();
}
function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}
function cartSubtotal() {
  return getCart().reduce((sum, i) => {
    const p = PRODUCTS.find((p) => p.id === i.id);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);
}
function cartTax() {
  return cartSubtotal() * TAX_RATE;
}
function cartTotal() {
  return cartSubtotal() + cartTax();
}
function addToCart(id) {
  const cart = getCart();
  const existing = cart.find((i) => i.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });
  setCart(cart);

  const product = PRODUCTS.find((p) => p.id === id);
  showToast(`Added ${product.name} to your order.`);
  bumpBadge();
}
function changeQty(id, delta) {
  let cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
  setCart(cart);
}

function initProductOrdering() {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card, idx) => {
    const product = PRODUCTS[idx];
    if (!product) return;
    card.dataset.productId = product.id;
    card.style.position = card.style.position || 'relative';

    const addBtn = document.createElement('button');
    addBtn.textContent = `+ Add · $${product.price.toFixed(2)}`;
    addBtn.title = `Add ${product.name} to your order`;
    addBtn.style.cssText = `
      position:absolute;top:14px;right:14px;background:rgba(27,19,16,.85);
      color:#F8DCC0;border:none;border-radius:30px;padding:8px 14px;
      font-size:12.5px;font-weight:600;cursor:pointer;
      font-family:'Work Sans',sans-serif;transition:background .2s ease;
    `;
    addBtn.addEventListener('mouseenter', () => (addBtn.style.background = '#D9992E'));
    addBtn.addEventListener('mouseleave', () => (addBtn.style.background = 'rgba(27,19,16,.85)'));
    addBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(product.id);
    });
    card.appendChild(addBtn);
  });

  initCartUI();
}

function initCartUI() {
  const navCta = document.querySelector('.nav-cta');
  if (navCta) {
    navCta.style.position = 'relative';

    const badge = document.createElement('span');
    badge.className = 'bq-cart-badge';
    badge.style.cssText = `
      position:absolute;top:-8px;right:-8px;background:#5A1E24;color:#F8DCC0;
      font-size:11px;font-weight:700;min-width:18px;height:18px;border-radius:50%;
      display:flex;align-items:center;justify-content:center;padding:0 4px;
      transition:transform .2s ease;
    `;
    navCta.appendChild(badge);

    navCta.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  }
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.querySelector('.bq-cart-badge');
  if (!badge) return;
  const count = cartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function bumpBadge() {
  const badge = document.querySelector('.bq-cart-badge');
  if (!badge) return;
  badge.style.transform = 'scale(1.4)';
  setTimeout(() => (badge.style.transform = 'scale(1)'), 200);
}

function openCart() {
  const cart = getCart();
  const member = getMember();

  const itemsHTML = cart.length
    ? cart
        .map((item) => {
          const p = PRODUCTS.find((p) => p.id === item.id);
          if (!p) return '';
          return `
            <div class="bq-cart-row" data-id="${p.id}" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid rgba(90,30,36,.12);">
              <div>
                <div style="font-weight:600;font-size:14.5px;">${p.name}</div>
                <div style="font-size:13px;color:#6b4b41;">$${p.price.toFixed(2)} each</div>
              </div>
              <div style="display:flex;align-items:center;gap:10px;">
                <button class="bq-qty-minus" style="width:26px;height:26px;border-radius:50%;border:1.5px solid #5A1E24;background:none;color:#5A1E24;cursor:pointer;">−</button>
                <span style="min-width:16px;text-align:center;font-weight:600;">${item.qty}</span>
                <button class="bq-qty-plus" style="width:26px;height:26px;border-radius:50%;border:1.5px solid #5A1E24;background:none;color:#5A1E24;cursor:pointer;">+</button>
              </div>
            </div>
          `;
        })
        .join('')
    : `<p style="text-align:center;color:#6b4b41;padding:20px 0;">Your order is empty. Add a few burgers from the menu below!</p>`;

  const subtotal = cartSubtotal();
  const tax = cartTax();
  const total = cartTotal();

  const content = `
    <h3 style="font-family:'Fraunces',serif;font-size:24px;color:#5A1E24;margin-bottom:18px;">Your Order</h3>
    <div class="bq-cart-items">${itemsHTML}</div>
    ${
      cart.length
        ? `
      <div style="padding:18px 0 0;font-size:14px;color:#241512;">
        <div style="display:flex;justify-content:space-between;padding:3px 0;color:#6b4b41;"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
        <div style="display:flex;justify-content:space-between;padding:3px 0;color:#6b4b41;"><span>Tax (${(TAX_RATE * 100).toFixed(0)}%)</span><span>$${tax.toFixed(2)}</span></div>
        <div style="display:flex;justify-content:space-between;padding-top:8px;margin-top:6px;border-top:1px solid rgba(90,30,36,.15);font-weight:700;font-size:16px;"><span>Total</span><span>$${total.toFixed(2)}</span></div>
      </div>
      <button class="bq-place-order" style="margin-top:20px;width:100%;background:#D9992E;color:#1B1310;border:none;padding:14px;border-radius:30px;font-weight:700;font-size:15px;cursor:pointer;">Place Order</button>
    `
        : `
      <button class="bq-browse-menu" style="margin-top:10px;width:100%;background:#5A1E24;color:#F8DCC0;border:none;padding:14px;border-radius:30px;font-weight:700;font-size:15px;cursor:pointer;">Browse Menu</button>
    `
    }
    ${member ? `<p style="margin-top:14px;font-size:12.5px;color:#6b4b41;text-align:center;">Ordering as ${member.name} · ${member.points} crowns</p>` : ''}
  `;

  const modal = createModal(content);
  const box = modal.box;

  box.querySelectorAll('.bq-qty-plus').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.closest('.bq-cart-row').dataset.id;
      changeQty(id, 1);
      modal.close();
      openCart();
    });
  });
  box.querySelectorAll('.bq-qty-minus').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.closest('.bq-cart-row').dataset.id;
      changeQty(id, -1);
      modal.close();
      openCart();
    });
  });

  const placeBtn = box.querySelector('.bq-place-order');
  if (placeBtn) placeBtn.addEventListener('click', () => placeOrder(modal));

  const browseBtn = box.querySelector('.bq-browse-menu');
  if (browseBtn) {
    browseBtn.addEventListener('click', () => {
      modal.close();
      document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

function placeOrder(modal) {
  const cart = getCart();
  if (!cart.length) return;

  const orderNumber = 'BQ-' + Math.floor(1000 + Math.random() * 9000);
  const timestamp = new Date();
  const lineItems = cart.map((item) => {
    const p = PRODUCTS.find((p) => p.id === item.id);
    return { name: p.name, qty: item.qty, price: p.price, lineTotal: p.price * item.qty };
  });
  const subtotal = cartSubtotal();
  const tax = cartTax();
  const total = cartTotal();

  let member = getMember();
  if (member) {
    member.points = (member.points || 0) + 10;
    saveMember(member);
  }

  setCart([]);

  renderReceipt(modal, { orderNumber, timestamp, lineItems, subtotal, tax, total, member });
}

/* ---------------------------------------------------------
   RECEIPT — itemized, printable / saveable as PDF
--------------------------------------------------------- */
function renderReceipt(modal, order) {
  const dateStr = order.timestamp.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const timeStr = order.timestamp.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });

  const itemRows = order.lineItems
    .map(
      (li) => `
      <div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;">
        <span>${li.qty} × ${li.name}</span>
        <span>$${li.lineTotal.toFixed(2)}</span>
      </div>
    `
    )
    .join('');

  modal.box.innerHTML = `
    <div id="bq-print-area" style="font-family:'Courier New',monospace;color:#241512;">

      <div style="text-align:center;margin-bottom:14px;">
        <div style="font-size:28px;">👑</div>
        <div style="font-family:'Fraunces',serif;font-weight:700;font-size:20px;color:#5A1E24;margin-top:4px;">Burger Queen</div>
        <div style="font-size:11.5px;color:#6b4b41;">Long Live The Burger</div>
      </div>

      <div style="border-top:1px dashed #5A1E24;border-bottom:1px dashed #5A1E24;padding:10px 0;margin-bottom:12px;font-size:12px;">
        <div style="display:flex;justify-content:space-between;"><span>Order #</span><span>${order.orderNumber}</span></div>
        <div style="display:flex;justify-content:space-between;"><span>Date</span><span>${dateStr}</span></div>
        <div style="display:flex;justify-content:space-between;"><span>Time</span><span>${timeStr}</span></div>
        ${order.member ? `<div style="display:flex;justify-content:space-between;"><span>Member</span><span>${order.member.name}</span></div>` : ''}
      </div>

      <div style="margin-bottom:12px;">
        ${itemRows}
      </div>

      <div style="border-top:1px dashed #5A1E24;padding-top:10px;font-size:13px;">
        <div style="display:flex;justify-content:space-between;"><span>Subtotal</span><span>$${order.subtotal.toFixed(2)}</span></div>
        <div style="display:flex;justify-content:space-between;"><span>Tax</span><span>$${order.tax.toFixed(2)}</span></div>
        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:15px;margin-top:6px;"><span>TOTAL</span><span>$${order.total.toFixed(2)}</span></div>
      </div>

      ${
        order.member
          ? `<div style="text-align:center;margin-top:14px;font-size:12px;color:#B87F24;font-weight:700;">+10 crowns earned — ${order.member.points} total</div>`
          : `<div style="text-align:center;margin-top:14px;font-size:11.5px;color:#6b4b41;">Join the Royal Club to start earning crowns on orders like this.</div>`
      }

      <div style="text-align:center;margin-top:18px;font-size:11.5px;color:#6b4b41;border-top:1px dashed #5A1E24;padding-top:12px;">
        Ready for pickup in ~15–20 minutes.<br>
        Thank you for choosing Burger Queen — long live the burger. 👑
      </div>
    </div>

    <div style="display:flex;gap:10px;margin-top:22px;">
      <button class="bq-print-receipt" style="flex:1;background:#5A1E24;color:#F8DCC0;border:none;padding:12px;border-radius:30px;font-weight:600;font-size:14px;cursor:pointer;font-family:'Work Sans',sans-serif;">Print / Save PDF</button>
      <button class="bq-close-receipt" style="flex:1;background:none;border:1.5px solid #5A1E24;color:#5A1E24;padding:12px;border-radius:30px;font-weight:600;font-size:14px;cursor:pointer;font-family:'Work Sans',sans-serif;">Done</button>
    </div>
  `;

  modal.box.querySelector('.bq-print-receipt').addEventListener('click', () => window.print());
  modal.box.querySelector('.bq-close-receipt').addEventListener('click', modal.close);
}

/* ---------------------------------------------------------
   Print-only styles: when printing, hide everything on the
   page except the receipt itself (#bq-print-area), so the
   printed page (or "Save as PDF") shows just the receipt.
--------------------------------------------------------- */
function initReceiptPrintStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @media print {
      body * { visibility: hidden; }
      #bq-print-area, #bq-print-area * { visibility: visible; }
      #bq-print-area {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 24px;
      }
    }
  `;
  document.head.appendChild(style);
}

/* ---------------------------------------------------------
   10. ROYAL CLUB (membership + points)
--------------------------------------------------------- */
function getMember() {
  try {
    return JSON.parse(localStorage.getItem('bq_member'));
  } catch (e) {
    return null;
  }
}
function saveMember(member) {
  localStorage.setItem('bq_member', JSON.stringify(member));
  refreshClubButtons();
}
function signOutMember() {
  localStorage.removeItem('bq_member');
  refreshClubButtons();
}

function initRoyalClub() {
  document.querySelectorAll('.club-trigger').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openClubModal();
    });
  });
  refreshClubButtons();
}

function refreshClubButtons() {
  const member = getMember();
  document.querySelectorAll('.club-trigger').forEach((btn) => {
    if (!btn.dataset.defaultLabel) btn.dataset.defaultLabel = btn.textContent.trim();
    btn.textContent = member ? `👑 ${member.points} Crowns` : btn.dataset.defaultLabel;
  });
}

function openClubModal() {
  const member = getMember();

  if (member) {
    const content = `
      <h3 style="font-family:'Fraunces',serif;font-size:24px;color:#5A1E24;margin-bottom:6px;">Welcome back, ${member.name.split(' ')[0]} 👑</h3>
      <p style="color:#6b4b41;font-size:14.5px;margin-bottom:20px;">${member.points} crowns earned so far.</p>
      <p style="font-size:13.5px;color:#6b4b41;margin-bottom:20px;">Earn 10 crowns every time you place an order. Redeem 100 crowns for a free Crown Classic.</p>
      <button class="bq-signout" style="width:100%;background:none;border:1.5px solid #5A1E24;color:#5A1E24;padding:12px;border-radius:30px;font-weight:600;cursor:pointer;">Sign Out</button>
    `;
    const modal = createModal(content);
    modal.box.querySelector('.bq-signout').addEventListener('click', () => {
      signOutMember();
      modal.close();
      showToast('Signed out of the Royal Club.');
    });
    return;
  }

  const content = `
    <h3 style="font-family:'Fraunces',serif;font-size:24px;color:#5A1E24;margin-bottom:6px;">Join The Royal Club</h3>
    <p style="color:#6b4b41;font-size:14.5px;margin-bottom:20px;">Earn crowns on every order, unlock secret menu items, and get early access to new drops.</p>
    <form class="bq-club-form">
      <input required name="name" type="text" placeholder="Full name" style="width:100%;padding:12px 14px;border-radius:10px;border:1.5px solid rgba(90,30,36,.25);margin-bottom:12px;font-family:'Work Sans',sans-serif;font-size:14px;">
      <input required name="email" type="email" placeholder="Email address" style="width:100%;padding:12px 14px;border-radius:10px;border:1.5px solid rgba(90,30,36,.25);margin-bottom:18px;font-family:'Work Sans',sans-serif;font-size:14px;">
      <button type="submit" style="width:100%;background:#D9992E;color:#1B1310;border:none;padding:14px;border-radius:30px;font-weight:700;font-size:15px;cursor:pointer;">Join Now — Get 100 Crowns</button>
    </form>
  `;
  const modal = createModal(content);
  modal.box.querySelector('.bq-club-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const member = { name: data.get('name'), email: data.get('email'), points: 100 };
    saveMember(member);

    modal.box.innerHTML = `
      <div style="text-align:center;padding:10px 0;">
        <div style="font-size:40px;">👑</div>
        <h3 style="font-family:'Fraunces',serif;font-size:22px;color:#5A1E24;margin:14px 0 6px;">Welcome to the Royal Club, ${member.name.split(' ')[0]}!</h3>
        <p style="color:#6b4b41;font-size:14.5px;">You've been credited 100 crowns to start.</p>
      </div>
    `;
    addModalCloseButton(modal);
  });
}

/* ---------------------------------------------------------
   11. FRANCHISE INQUIRY
--------------------------------------------------------- */
function initFranchise() {
  document.querySelectorAll('.franchise-trigger').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openFranchiseModal();
    });
  });
}

function openFranchiseModal() {
  const content = `
    <h3 style="font-family:'Fraunces',serif;font-size:24px;color:#5A1E24;margin-bottom:6px;">Open A Franchise</h3>
    <p style="color:#6b4b41;font-size:14.5px;margin-bottom:20px;">Tell us about yourself and where you'd like to bring Burger Queen, and our team will follow up.</p>
    <form class="bq-franchise-form">
      <input required name="name" type="text" placeholder="Full name" style="width:100%;padding:12px 14px;border-radius:10px;border:1.5px solid rgba(90,30,36,.25);margin-bottom:12px;font-family:'Work Sans',sans-serif;font-size:14px;">
      <input required name="email" type="email" placeholder="Email address" style="width:100%;padding:12px 14px;border-radius:10px;border:1.5px solid rgba(90,30,36,.25);margin-bottom:12px;font-family:'Work Sans',sans-serif;font-size:14px;">
      <input required name="city" type="text" placeholder="City / region of interest" style="width:100%;padding:12px 14px;border-radius:10px;border:1.5px solid rgba(90,30,36,.25);margin-bottom:18px;font-family:'Work Sans',sans-serif;font-size:14px;">
      <button type="submit" style="width:100%;background:#D9992E;color:#1B1310;border:none;padding:14px;border-radius:30px;font-weight:700;font-size:15px;cursor:pointer;">Submit Inquiry</button>
    </form>
  `;
  const modal = createModal(content);
  modal.box.querySelector('.bq-franchise-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const lead = {
      name: data.get('name'),
      email: data.get('email'),
      city: data.get('city'),
      date: new Date().toISOString()
    };
    const leads = JSON.parse(localStorage.getItem('bq_franchise_leads') || '[]');
    leads.push(lead);
    localStorage.setItem('bq_franchise_leads', JSON.stringify(leads));

    modal.box.innerHTML = `
      <div style="text-align:center;padding:10px 0;">
        <div style="font-size:40px;">🏪</div>
        <h3 style="font-family:'Fraunces',serif;font-size:22px;color:#5A1E24;margin:14px 0 6px;">Thanks, ${lead.name.split(' ')[0]}!</h3>
        <p style="color:#6b4b41;font-size:14.5px;">Our franchise team will reach out to ${lead.email} about ${lead.city} shortly.</p>
      </div>
    `;
    addModalCloseButton(modal);
  });
}

/* ---------------------------------------------------------
   12. APP NOTIFY SIGNUP
--------------------------------------------------------- */
function initAppNotify() {
  document.querySelectorAll('.app-trigger').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openAppModal();
    });
  });
}

function openAppModal() {
  const content = `
    <h3 style="font-family:'Fraunces',serif;font-size:24px;color:#5A1E24;margin-bottom:6px;">Get The App</h3>
    <p style="color:#6b4b41;font-size:14.5px;margin-bottom:20px;">The Burger Queen app is almost ready. Leave your email and we'll let you know the moment it's live.</p>
    <form class="bq-app-form">
      <input required name="email" type="email" placeholder="Email address" style="width:100%;padding:12px 14px;border-radius:10px;border:1.5px solid rgba(90,30,36,.25);margin-bottom:18px;font-family:'Work Sans',sans-serif;font-size:14px;">
      <button type="submit" style="width:100%;background:#D9992E;color:#1B1310;border:none;padding:14px;border-radius:30px;font-weight:700;font-size:15px;cursor:pointer;">Notify Me</button>
    </form>
  `;
  const modal = createModal(content);
  modal.box.querySelector('.bq-app-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const list = JSON.parse(localStorage.getItem('bq_app_notify') || '[]');
    list.push(email);
    localStorage.setItem('bq_app_notify', JSON.stringify(list));

    modal.box.innerHTML = `
      <div style="text-align:center;padding:10px 0;">
        <div style="font-size:40px;">📱</div>
        <h3 style="font-family:'Fraunces',serif;font-size:22px;color:#5A1E24;margin:14px 0 6px;">You're on the list!</h3>
        <p style="color:#6b4b41;font-size:14.5px;">We'll email ${email} as soon as the app launches.</p>
      </div>
    `;
    addModalCloseButton(modal);
  });
}

/* ---------------------------------------------------------
   13. CLASSIFY BUTTONS
   Scans every .btn and footer link on the page and tags it
   as a club/franchise/app trigger based on its visible text
   — so none of this requires editing your HTML by hand.
--------------------------------------------------------- */
function classifyButtons() {
  document.querySelectorAll('a.btn, .footer-col a').forEach((el) => {
    const text = el.textContent.trim().toLowerCase();
    if (text.includes('join club') || text.includes('earn crowns') || text.includes('vip rewards')) {
      el.classList.add('club-trigger');
    } else if (text.includes('buy a franchise')) {
      el.classList.add('franchise-trigger');
    } else if (text.includes('get the app')) {
      el.classList.add('app-trigger');
    }
  });
}