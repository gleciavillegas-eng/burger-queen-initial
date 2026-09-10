<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Order Now | Burger Queen</title>

    <link rel="stylesheet" href="order-now.css">

    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>

<body>

<!-- =========================
     NAVIGATION
========================= -->

<header class="navbar">

    <div class="logo">
        BURGER <span>QUEEN</span>
    </div>

    <nav id="navMenu">

         <li><a href="home.php">Home</a></li>
        <li><a href="royal-club.php">Royal Club</a></li>
        <li><a href="menu.php">Menu</a></li>
        <li><a href="our-story.php">Our Story</a></li>
        <li><a href="join-team.php">Join Our Team</a></li>
        <li><a href="contact.php">Contact</a></li>
    </nav>

    <button class="menu-btn" id="menuBtn">
        ☰
    </button>

</header>


<!-- =========================
     HERO
========================= -->

<section class="order-hero">

    <div class="hero-content">

        <p class="small-title">
            BURGER QUEEN
        </p>

        <h1>
            ORDER<br>
            <span>NOW.</span>
        </h1>

        <p>
            Your favorite burgers, sides, and drinks
            are just a few clicks away.
        </p>

        <a href="#menu" class="primary-btn">
            START ORDERING
        </a>

    </div>

    <div class="hero-crown">
        ♛
    </div>

</section>


<!-- =========================
     MENU
========================= -->

<section class="menu-section" id="menu">

    <div class="section-heading">

        <p class="small-title">
            ROYAL MENU
        </p>

        <h2>
            CHOOSE YOUR<br>
            <span>FAVORITES.</span>
        </h2>

    </div>


    <div class="menu-layout">

        <!-- PRODUCTS -->

        <div class="products">


            <!-- BURGER -->

            <div class="product-card">

                <div class="product-image burger">
                    🍔
                </div>

                <div class="product-info">

                    <span class="category">
                        BURGERS
                    </span>

                    <h3>
                        ROYAL BURGER
                    </h3>

                    <p>
                        Juicy beef patty, fresh vegetables,
                        cheese, and our signature sauce.
                    </p>

                    <div class="product-bottom">

                        <strong>
                            ₱189
                        </strong>

                        <button
                            class="add-btn"
                            data-name="Royal Burger"
                            data-price="189">

                            ADD TO ORDER

                        </button>

                    </div>

                </div>

            </div>


            <!-- QUEEN BURGER -->

            <div class="product-card">

                <div class="product-image queen">
                    🍔
                </div>

                <div class="product-info">

                    <span class="category">
                        BURGERS
                    </span>

                    <h3>
                        QUEEN'S DELUXE
                    </h3>

                    <p>
                        A premium double patty burger
                        loaded with melted cheese.
                    </p>

                    <div class="product-bottom">

                        <strong>
                            ₱249
                        </strong>

                        <button
                            class="add-btn"
                            data-name="Queen's Deluxe"
                            data-price="249">

                            ADD TO ORDER

                        </button>

                    </div>

                </div>

            </div>


            <!-- FRIES -->

            <div class="product-card">

                <div class="product-image fries">
                    🍟
                </div>

                <div class="product-info">

                    <span class="category">
                        SIDES
                    </span>

                    <h3>
                        ROYAL FRIES
                    </h3>

                    <p>
                        Crispy golden fries seasoned
                        with our royal signature blend.
                    </p>

                    <div class="product-bottom">

                        <strong>
                            ₱89
                        </strong>

                        <button
                            class="add-btn"
                            data-name="Royal Fries"
                            data-price="89">

                            ADD TO ORDER

                        </button>

                    </div>

                </div>

            </div>


            <!-- SHAKE -->

            <div class="product-card">

                <div class="product-image shake">
                    🥤
                </div>

                <div class="product-info">

                    <span class="category">
                        DRINKS
                    </span>

                    <h3>
                        ROYAL SHAKE
                    </h3>

                    <p>
                        Creamy, cold, and delicious.
                        The perfect partner for your burger.
                    </p>

                    <div class="product-bottom">

                        <strong>
                            ₱119
                        </strong>

                        <button
                            class="add-btn"
                            data-name="Royal Shake"
                            data-price="119">

                            ADD TO ORDER

                        </button>

                    </div>

                </div>

            </div>


            <!-- CHICKEN -->

            <div class="product-card">

                <div class="product-image chicken">
                    🍗
                </div>

                <div class="product-info">

                    <span class="category">
                        SIDES
                    </span>

                    <h3>
                        ROYAL CHICKEN
                    </h3>

                    <p>
                        Crispy golden chicken with
                        our signature royal seasoning.
                    </p>

                    <div class="product-bottom">

                        <strong>
                            ₱159
                        </strong>

                        <button
                            class="add-btn"
                            data-name="Royal Chicken"
                            data-price="159">

                            ADD TO ORDER

                        </button>

                    </div>

                </div>

            </div>


            <!-- MEAL -->

            <div class="product-card">

                <div class="product-image meal">
                    🍔🍟🥤
                </div>

                <div class="product-info">

                    <span class="category">
                        MEALS
                    </span>

                    <h3>
                        ROYAL COMBO
                    </h3>

                    <p>
                        Burger, fries, and a refreshing
                        drink in one royal meal.
                    </p>

                    <div class="product-bottom">

                        <strong>
                            ₱299
                        </strong>

                        <button
                            class="add-btn"
                            data-name="Royal Combo"
                            data-price="299">

                            ADD TO ORDER

                        </button>

                    </div>

                </div>

            </div>

        </div>


        <!-- =========================
             CART
        ========================== -->

        <aside class="cart">

            <div class="cart-header">

                <div>

                    <p class="small-title">
                        YOUR ORDER
                    </p>

                    <h2>
                        ROYAL<br>
                        <span>CART.</span>
                    </h2>

                </div>

                <div class="cart-count" id="cartCount">
                    0
                </div>

            </div>


            <div class="cart-items" id="cartItems">

                <div class="empty-cart">

                    <div>
                        🛒
                    </div>

                    <p>
                        Your cart is empty.
                    </p>

                    <small>
                        Add something delicious!
                    </small>

                </div>

            </div>


            <div class="cart-summary">

                <div>
                    <span>
                        SUBTOTAL
                    </span>

                    <strong id="subtotal">
                        ₱0
                    </strong>
                </div>

                <div>
                    <span>
                        DELIVERY
                    </span>

                    <strong id="delivery">
                        ₱49
                    </strong>
                </div>

                <div class="total">

                    <span>
                        TOTAL
                    </span>

                    <strong id="total">
                        ₱0
                    </strong>

                </div>

            </div>


            <button
                class="checkout-btn"
                id="checkoutBtn">

                PROCEED TO CHECKOUT

            </button>

        </aside>

    </div>

</section>


<!-- =========================
     CHECKOUT
========================= -->

<section class="checkout-section" id="checkout">

    <div class="checkout-container">

        <div class="checkout-heading">

            <p class="small-title">
                ALMOST THERE
            </p>

            <h2>
                COMPLETE<br>
                <span>YOUR ORDER.</span>
            </h2>

            <p>
                Enter your details below and
                we'll prepare your royal feast.
            </p>

        </div>


        <form id="orderForm">

            <div class="form-row">

                <div class="form-group">

                    <label for="customerName">
                        FULL NAME
                    </label>

                    <input
                        type="text"
                        id="customerName"
                        placeholder="Enter your name"
                        required>

                </div>


                <div class="form-group">

                    <label for="phone">
                        PHONE NUMBER
                    </label>

                    <input
                        type="tel"
                        id="phone"
                        placeholder="09XXXXXXXXX"
                        required>

                </div>

            </div>


            <div class="form-group">

                <label for="address">
                    DELIVERY ADDRESS
                </label>

                <textarea
                    id="address"
                    rows="4"
                    placeholder="Enter your complete address"
                    required></textarea>

            </div>


            <div class="form-group">

                <label for="payment">
                    PAYMENT METHOD
                </label>

                <select id="payment" required>

                    <option value="">
                        Select payment method
                    </option>

                    <option value="Cash on Delivery">
                        Cash on Delivery
                    </option>

                    <option value="GCash">
                        GCash
                    </option>

                    <option value="Card">
                        Credit / Debit Card
                    </option>

                </select>

            </div>


            <button
                type="submit"
                class="primary-btn submit-order">

                PLACE ORDER

            </button>

        </form>

    </div>

</section>


<!-- =========================
     ROYAL CLUB PROMO
========================= -->

<section class="royal-promo">

    <div>

        <p class="small-title">
            ROYAL CLUB MEMBERS
        </p>

        <h2>
            EARN CROWNS<br>
            <span>WITH EVERY ORDER.</span>
        </h2>

        <p>
            Join the Royal Club and earn crowns
            every time you order your favorites.
        </p>

        <a href="royal-club.html" class="primary-btn">
            JOIN ROYAL CLUB
        </a>

    </div>

</section>


<!-- =========================
     FOOTER
========================= -->

<footer>

    <div class="footer-brand">

        <div class="logo">
            BURGER <span>QUEEN</span>
        </div>

        <p>
            Premium burgers for everyone.
        </p>

    </div>


    <div>

        <h4>
            MENU
        </h4>

        <a href="#menu">Burgers</a>
        <a href="#menu">Sides</a>
        <a href="#menu">Drinks</a>
        <a href="#menu">Meals</a>

    </div>


    <div>

        <h4>
            QUICK LINKS
        </h4>

        <a href="our-story.html">
            Our Story
        </a>

        <a href="join-team.html">
            Join Our Team
        </a>

        <a href="royal-club.html">
            Royal Club
        </a>

        <a href="contact.html">
            Contact
        </a>

    </div>


    <div>

        <h4>
            ORDER
        </h4>

        <a href="order-now.html">
            Order Now
        </a>

        <a href="royal-club.html">
            Rewards
        </a>

        <a href="#">
            Locations
        </a>

    </div>


    <div class="copyright">

        © 2024 Burger Queen.
        All rights reserved.

    </div>

</footer>


<!-- =========================
     NOTIFICATION
========================= -->

<div class="notification" id="notification">
    Order updated!
</div>


<script src="order-now.js"></script>

</body>
</html>