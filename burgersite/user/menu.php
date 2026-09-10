<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
        content="width=device-width, initial-scale=1.0">

    <title>Menu | Burger Queen</title>

    <!-- Google Fonts (same as Home) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;0,900;1,600&family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="menu.css">

</head>

<body>


    <!-- ================= HEADER (copied from Home) ================= -->

    <header>
        <nav class="nav">

            <!-- LOGO -->
            <a href="home.php" class="logo-link">
                <img src="burger_logo.png" alt="Burger Queen Logo" class="nav-logo">
            </a>

            <!-- MOBILE MENU TOGGLE -->
            <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <!-- NAVIGATION -->
            <ul class="nav-links" id="navLinks">
                 <li><a href="home.php">Home</a></li>
                <li><a href="royal-club.php">Royal Club</a></li>
                <li><a href="menu.php" class="active">Menu</a></li>
                <li><a href="our-story.php">Our Story</a></li>
                <li><a href="join-team.php">Join Our Team</a></li>
                <li><a href="contact.php">Contact</a></li>
            </ul>

            <!-- ORDER + CART -->
            <div class="nav-actions">

                <a href="#" class="nav-cta">Order Now</a>

                <div class="cart">
                    🛒 <span id="cartCount">0</span>
                </div>

            </div>

        </nav>
    </header>


    <!-- ================= PAGE HERO (same treatment as Home's hero) ================= -->

    <section class="page-hero">

        <div class="page-hero-inner">

            <span class="eyebrow">THE ROYAL MENU</span>

            <h1>
                Something For<br>
                Every Appetite.
            </h1>

            <p>
                From flame-grilled classics to limited-edition
                royals — every item is made to order, the same
                way it is at every Burger Queen counter.
            </p>

        </div>


        <!-- WAVE (matches Home's hero divider) -->
        <div class="wave-divider">

            <svg viewBox="0 0 1200 80" preserveAspectRatio="none">

                <path
                    d="M0,40 C150,90 300,0 450,40 C600,80 750,0 900,40 C1050,80 1150,20 1200,40 L1200,80 L0,80 Z"
                    fill="#F8DCC0">
                </path>

            </svg>

        </div>

    </section>


    <!-- ================= MENU GRID (same pattern as Home's Bestsellers) ================= -->

    <section class="bestsellers">

        <div class="container">

            <div class="section-head">

                <span class="eyebrow">
                    WHAT'S REIGNING
                </span>

                <h2>
                    Full Menu
                </h2>

                <p>
                    Tap a category to filter, or browse
                    everything below.
                </p>

            </div>


            <!-- FILTER BUTTONS -->

            <div class="filter-pills">

                <button class="active" data-filter="all">
                    All
                </button>
                <button data-filter="burgers">
                    Burgers
                </button>
                <button data-filter="sides">
                    Sides
                </button>
                <button data-filter="shakes">
                    Shakes
                </button>
                <button data-filter="featured">
                    Featured
                </button>

            </div>


            <!-- PRODUCT GRID -->

            <div class="product-grid">

                <!-- BURGER 1 -->
                <div class="product-card" data-category="burgers featured">
                    <div class="product-media">
                        <img src="burger_1.png" alt="Crown Classic">
                        <span class="tag">Crown Classic</span>
                    </div>
                    <div class="product-footer">
                        <p class="product-desc">Hand-pressed patty, lettuce, tomato, cheese, royal sauce.</p>
                        <div class="product-order">
                            <span class="price">₱149</span>
                            <button class="btn-add">Add</button>
                        </div>
                    </div>
                </div>

                <!-- BURGER 2 -->
                <div class="product-card" data-category="burgers">
                    <div class="product-media">
                        <img src="burger_2.png" alt="Queen's Double Stack">
                        <span class="tag">Queen's Double Stack</span>
                    </div>
                    <div class="product-footer">
                        <p class="product-desc">Two flame-grilled patties, double cheese, signature sauce.</p>
                        <div class="product-order">
                            <span class="price">₱199</span>
                            <button class="btn-add">Add</button>
                        </div>
                    </div>
                </div>

                <!-- BURGER 3 -->
                <div class="product-card" data-category="burgers featured">
                    <div class="product-media">
                        <img src="burger_4.png" alt="Spicy Sovereign">
                        <span class="tag">Spicy Sovereign</span>
                    </div>
                    <div class="product-footer">
                        <p class="product-desc">Spicy sauce, jalapeños, cheese and fresh vegetables.</p>
                        <div class="product-order">
                            <span class="price">₱179</span>
                            <button class="btn-add">Add</button>
                        </div>
                    </div>
                </div>

                <!-- BURGER 4 -->
                <div class="product-card" data-category="burgers">
                    <div class="product-media">
                        <img src="burger_5.png" alt="Gold BBQ Melt">
                        <span class="tag">Gold BBQ Melt</span>
                    </div>
                    <div class="product-footer">
                        <p class="product-desc">Melted cheese, bacon and BBQ sauce.</p>
                        <div class="product-order">
                            <span class="price">₱189</span>
                            <button class="btn-add">Add</button>
                        </div>
                    </div>
                </div>

                <!-- SIDE 1 -->
                <div class="product-card" data-category="sides">
                    <div class="product-media">
                        <img src="royalfries.jpg" alt="Royal Crown Fries">
                        <span class="tag">Royal Crown Fries</span>
                    </div>
                    <div class="product-footer">
                        <p class="product-desc">Crispy golden fries seasoned with royal spices.</p>
                        <div class="product-order">
                            <span class="price">₱80</span>
                            <button class="btn-add">Add</button>
                        </div>
                    </div>
                </div>

                <!-- SIDE 2 -->
                <div class="product-card" data-category="sides">
                    <div class="product-media">
                        <img src="cheese.jpg" alt="Cheese Throne Bites">
                        <span class="tag">Cheese Throne Bites</span>
                    </div>
                    <div class="product-footer">
                        <p class="product-desc">Crispy fries topped with creamy cheese sauce.</p>
                        <div class="product-order">
                            <span class="price">₱100</span>
                            <button class="btn-add">Add</button>
                        </div>
                    </div>
                </div>

                <!-- SIDE 3 -->
                <div class="product-card" data-category="sides">
                    <div class="product-media">
                        <img src="onion.jpg" alt="Golden Onion Rings">
                        <span class="tag">Golden Onion Rings</span>
                    </div>
                    <div class="product-footer">
                        <p class="product-desc">Crispy golden onion rings with a crunchy, savory coating.</p>
                        <div class="product-order">
                            <span class="price">₱99</span>
                            <button class="btn-add">Add</button>
                        </div>
                    </div>
                </div>

                <!-- SHAKE 1 -->
                <div class="product-card" data-category="shakes">
                    <div class="product-media">
                        <img src="chocolate.jpg" alt="Crown Chocolate Shake">
                        <span class="tag">Crown Chocolate Shake</span>
                    </div>
                    <div class="product-footer">
                        <p class="product-desc">Creamy chocolate shake topped with whipped cream.</p>
                        <div class="product-order">
                            <span class="price">₱120</span>
                            <button class="btn-add">Add</button>
                        </div>
                    </div>
                </div>

                <!-- SHAKE 2 -->
                <div class="product-card" data-category="shakes">
                    <div class="product-media">
                        <img src="berry.jpg" alt="Berry Sovereign Shake">
                        <span class="tag">Berry Sovereign Shake</span>
                    </div>
                    <div class="product-footer">
                        <p class="product-desc">Sweet and creamy strawberry milkshake, made fresh.</p>
                        <div class="product-order">
                            <span class="price">₱99</span>
                            <button class="btn-add">Add</button>
                        </div>
                    </div>
                </div>

                <!-- SHAKE 3 -->
                <div class="product-card" data-category="shakes">
                    <div class="product-media">
                        <img src="vanilla.jpg" alt="Royal Vanilla Shake">
                        <span class="tag">Royal Vanilla Shake</span>
                    </div>
                    <div class="product-footer">
                        <p class="product-desc">Sweet and creamy vanilla milkshake, made fresh.</p>
                        <div class="product-order">
                            <span class="price">₱110</span>
                            <button class="btn-add">Add</button>
                        </div>
                    </div>
                </div>

                <!-- FEATURED MEAL -->
                <div class="product-card" data-category="featured">
                    <div class="product-media">
                        <img src="burger_8.png" alt="Royal Meal">
                        <span class="tag">Royal Meal</span>
                    </div>
                    <div class="product-footer">
                        <p class="product-desc">Crown Classic, Royal Fries and your choice of shake.</p>
                        <div class="product-order">
                            <span class="price">₱249</span>
                            <button class="btn-add">Add</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </section>


    <!-- ================= FOOTER (copied from Home) ================= -->

    <footer>

        <div class="container">

            <div class="footer-grid">


                <!-- FOOTER BRAND -->

                <div class="footer-brand">

                    <div class="footer-logo">

                        <img
                            src="burger_logo.png"
                            alt="Burger Queen Logo">

                    </div>

                    <p>
                        hello@burgerqueen.co
                    </p>

                    <p>
                        +1 122 QUEEN BQ
                    </p>

                </div>


                <!-- MENU -->

                <div class="footer-col">

                    <h5>
                        MENU
                    </h5>

                    <ul>

                        <li>
                            <a href="menu.php#burgers">
                                Burgers
                            </a>
                        </li>

                        <li>
                            <a href="menu.php#sides">
                                Sides
                            </a>
                        </li>

                        <li>
                            <a href="menu.php#shakes">
                                Shakes
                            </a>
                        </li>

                        <li>
                            <a href="menu.php#featured">
                                Featured Meals
                            </a>
                        </li>

                    </ul>

                </div>


                <!-- QUICK LINKS -->

                <div class="footer-col">

                    <h5>
                        QUICK LINKS
                    </h5>

                    <ul>

                        <li>
                            <a href="our-story.php">
                                About Us
                            </a>
                        </li>

                        <li>
                            <a href="our-story.php">
                                Our Story
                            </a>
                        </li>

                        <li>
                            <a href="contact.php">
                                Contact
                            </a>
                        </li>

                        <li>
                            <a href="join-team.php">
                                Join Our Team
                            </a>
                        </li>

                    </ul>

                </div>


                <!-- ROYAL CLUB -->

                <div class="footer-col">

                    <h5>
                        ROYAL CLUB
                    </h5>

                    <ul>

                        <li>
                            <a href="royal-club.php">
                                Get The App
                            </a>
                        </li>

                        <li>
                            <a href="royal-club.php">
                                Earn Crowns
                            </a>
                        </li>

                        <li>
                            <a href="royal-club.php">
                                VIP Rewards
                            </a>
                        </li>

                        <li>
                            <a href="royal-club.php">
                                Buy A Franchise
                            </a>
                        </li>

                    </ul>

                </div>

            </div>


            <!-- FOOTER BOTTOM -->

            <div class="footer-bottom">

                <span>
                    © 2024 Burger Queen. All rights reserved.
                </span>

                <div class="links">

                    <a href="#">
                        Privacy Policy
                    </a>

                    <a href="#">
                        Terms of Service
                    </a>

                </div>

            </div>

        </div>

    </footer>


    <script src="menu.js"></script>

</body>

</html>