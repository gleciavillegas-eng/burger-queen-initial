// ======================================
// MOBILE NAVIGATION
// ======================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


// ======================================
// CART
// ======================================

let cart = [];

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const subtotalElement =
    document.getElementById("subtotal");

const deliveryElement =
    document.getElementById("delivery");

const totalElement =
    document.getElementById("total");


// ======================================
// ADD TO CART
// ======================================

const addButtons =
    document.querySelectorAll(".add-btn");


addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const name =
            button.dataset.name;

        const price =
            Number(button.dataset.price);


        const existingProduct =
            cart.find(item => item.name === name);


        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({

                name: name,
                price: price,
                quantity: 1

            });

        }


        updateCart();

        showNotification(
            name + " added to your order!"
        );

    });

});


// ======================================
// UPDATE CART
// ======================================

function updateCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <p>Your cart is empty.</p>

                <small>
                    Add something delicious!
                </small>

            </div>

        `;

    }


    let subtotal = 0;

    let itemCount = 0;


    cart.forEach(function (item, index) {

        subtotal +=
            item.price * item.quantity;

        itemCount +=
            item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-top">

                <span class="cart-item-name">
                    ${item.name}
                </span>

                <span class="cart-item-price">
                    ₱${item.price * item.quantity}
                </span>

            </div>


            <div class="quantity-controls">

                <button
                    onclick="changeQuantity(${index}, -1)">
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    onclick="changeQuantity(${index}, 1)">
                    +
                </button>

                <button
                    class="remove-btn"
                    onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    const delivery =
        cart.length > 0 ? 49 : 0;


    const total =
        subtotal + delivery;


    cartCount.textContent =
        itemCount;

    subtotalElement.textContent =
        "₱" + subtotal;

    deliveryElement.textContent =
        "₱" + delivery;

    totalElement.textContent =
        "₱" + total;

}


// ======================================
// CHANGE QUANTITY
// ======================================

function changeQuantity(index, amount) {

    cart[index].quantity += amount;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    updateCart();

}


// ======================================
// REMOVE ITEM
// ======================================

function removeItem(index) {

    const itemName =
        cart[index].name;


    cart.splice(index, 1);

    updateCart();


    showNotification(
        itemName + " removed from your order."
    );

}


// ======================================
// CHECKOUT BUTTON
// ======================================

const checkoutBtn =
    document.getElementById("checkoutBtn");


checkoutBtn.addEventListener("click", function () {

    if (cart.length === 0) {

        showNotification(
            "Please add an item to your order first."
        );

        return;

    }


    document
        .getElementById("checkout")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// ======================================
// ORDER FORM
// ======================================

const orderForm =
    document.getElementById("orderForm");


orderForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        if (cart.length === 0) {

            showNotification(
                "Your cart is empty."
            );

            return;

        }


        const name =
            document.getElementById(
                "customerName"
            ).value;


        const payment =
            document.getElementById(
                "payment"
            ).value;


        showNotification(
            "👑 Thank you, " +
            name +
            "! Your order has been placed."
        );


        console.log(
            "Order:",
            cart
        );

        console.log(
            "Payment:",
            payment
        );


        cart = [];

        updateCart();

        orderForm.reset();

    }
);


// ======================================
// NOTIFICATION
// ======================================

function showNotification(message) {

    const notification =
        document.getElementById(
            "notification"
        );


    notification.textContent =
        message;


    notification.classList.add("show");


    setTimeout(function () {

        notification.classList.remove(
            "show"
        );

    }, 3000);

}


// ======================================
// INITIAL CART
// ======================================

updateCart();