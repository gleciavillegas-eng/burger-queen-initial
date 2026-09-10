<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Burger Queen | Long Live The Burger</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;0,900;1,600&family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- ================= HEADER ================= -->

    <header>
        <nav class="nav">

            <!-- LOGO -->
            <a href="#" class="logo-link">
                <img src="burger_logo.png" alt="Burger Queen Logo" class="nav-logo">
            </a>

            <!-- NAVIGATION -->
            <ul class="nav-links">
                <li><a href="home.php" class="active">Home</a></li>
                <li><a href="royal-club.php">Royal Club</a></li>
                <li><a href="menu.php">Menu</a></li>
                <li><a href="our-story.php">Our Story</a></li>
                <li><a href="join-team.php">Join Our Team</a></li>
                <li><a href="contact.php">Contact</a></li>
            </ul>

            <!-- ORDER BUTTON -->
            <a href="#" class="nav-cta">Order Now</a>

        </nav>
    </header>


    <!-- ================= HERO ================= -->

    <section class="hero">

        <div class="hero-inner">

            <div class="hero-copy">

                <span class="eyebrow" style="font-size: 1.3rem;">
                    THE CORONATION BURGER
                </span>

                <h1>
                    Long Live<br>
                    The Burger.
                </h1>

                <p>
                    Hand-pressed patties, flame-grilled to order,
                    stacked high on fresh-baked brioche. This is
                    burgers for royalty — and royalty is everyone.
                </p>

                <div class="hero-btns">

                    <a href="#menu" class="btn btn-gold">
                        View Menu
                    </a>

                    <a href="#story" class="btn btn-outline">
                        Our Story
                    </a>

                </div>

            </div>


            <div class="hero-image">

                <img src="hero-burger.png" alt="Burger">

            </div>

        </div>


        <!-- WAVE -->
        <div class="wave-divider">

            <svg viewBox="0 0 1200 80" preserveAspectRatio="none">

                <path
                    d="M0,40 C150,90 300,0 450,40 C600,80 750,0 900,40 C1050,80 1150,20 1200,40 L1200,80 L0,80 Z"
                    fill="#F8DCC0">
                </path>

            </svg>

        </div>

    </section>


    <!-- ================= ROYAL CLUB ================= -->

    <div class="club-banner-wrap" id="club">

        <div class="club-banner">

            <img
                src="royalclub.png"
                alt="Burger Queen restaurant interior">

            <div class="club-banner-copy">

                <span class="eyebrow">
                    <img src="burger_logo.png" alt="Burger Queen Logo"style="max-width: 77.5%; height: auto; margin:0 0 50px;">
                </span>

                <h3 style="font-size: 2.1rem; margin: -20px 0 0 30px;">
                    Join The Royal Club
                </h3>

                <p style="margin: 0 0 0 30px;">
                    Earn points on every order, unlock exclusive
                    deals, and get early access to new menu drops.
                    Royalty has its privileges.
                </p>

                <a href="#" class="btn btn-gold" style="margin: 20px 0 0 30px;">
                    Join Club
                </a>

            </div>

        </div>

    </div>


    <!-- ================= BESTSELLERS ================= -->

    <section class="bestsellers" id="menu">

        <div class="container">

            <div class="section-head">

                <span class="eyebrow">
                    WHAT'S REIGNING
                </span>

                <h2>
                    Check Our Bestsellers!
                </h2>

                <p>
                    From flame-grilled classics to limited-edition
                    royals — something for every appetite.
                </p>

            </div>


            <!-- FILTER BUTTONS -->

            <div class="filter-pills">

                <button class="active">
                    Burgers
                </button>   
                <button class="active">
                    Sides
                </button>
                <button class="active">
                    Shakes
                </button>

            </div>


            <!-- PRODUCT GRID -->

            <div class="product-grid">

                <div class="product-card" data-category="burgers">

                    <img
                        src="burger_1.png"
                        alt="The Crown Classic">

                    <span class="tag">
                        The Crown Classic
                    </span>

                </div>


                <div class="product-card" data-category="burgers">

                    <img
                        src="burger_2.png"
                        alt="Queen's Double Stack">

                    <span class="tag">
                        Queen's Double Stack
                    </span>

                </div>


                <div class="product-card" data-category="burgers">

                    <img
                        src="burger_3.png"
                        alt="Royal Smash">

                    <span class="tag">
                        Royal Smash
                    </span>

                </div>


                <div class="product-card" data-category="burgers">

                    <img
                        src="burger_4.png"
                        alt="Spicy Sovereign">

                    <span class="tag">
                        Spicy Sovereign
                    </span>

                </div>


                <div class="product-card" data-category="burgers">

                    <img
                        src="burger_5.png"
                        alt="Gold BBQ Melt">

                    <span class="tag">
                        Gold BBQ Melt
                    </span>

                </div>


                <div class="product-card" data-category="burgers">

                    <img
                        src="burger_6.png"
                        alt="Truffle Royale">

                    <span class="tag">
                        Truffle Royale
                    </span>

                </div>

            </div>

        </div>

    </section>

                    <!-- SIDES -->

                <div class="product-card" data-category="sides">

                    <img
                        src="side_1.png"
                        alt="Royal Crown Fries">

                    <span class="tag">
                        Royal Crown Fries
                    </span>

                </div>


                <div class="product-card" data-category="sides">

                    <img
                        src="side_2.png"
                        alt="Golden Onion Rings">

                    <span class="tag">
                        Golden Onion Rings
                    </span>

                </div>


                <div class="product-card" data-category="sides">

                    <img
                        src="side_3.png"
                        alt="Cheese Throne Bites">

                    <span class="tag">
                        Cheese Throne Bites
                    </span>

                </div>


                <div class="product-card" data-category="sides">

                    <img
                        src="side_4.png"
                        alt="Truffle Parmesan Fries">

                    <span class="tag">
                        Truffle Parmesan Fries
                    </span>

                </div>


                <!-- SHAKES -->

                <div class="product-card" data-category="shakes">

                    <img
                        src="shake_1.png"
                        alt="Royal Vanilla Shake">

                    <span class="tag">
                        Royal Vanilla Shake
                    </span>

                </div>


                <div class="product-card" data-category="shakes">

                    <img
                        src="shake_2.png"
                        alt="Crown Chocolate Shake">

                    <span class="tag">
                        Crown Chocolate Shake
                    </span>

                </div>


                <div class="product-card" data-category="shakes">

                    <img
                        src="shake_3.png"
                        alt="Gold Caramel Shake">

                    <span class="tag">
                        Gold Caramel Shake
                    </span>

                </div>


                <div class="product-card" data-category="shakes">

                    <img
                        src="shake_4.png"
                        alt="Berry Sovereign Shake">

                    <span class="tag">
                        Berry Sovereign Shake
                    </span>

                </div>


    <!-- ================= ABOUT ================= -->

    <section class="about" id="story">

        <div class="container about-container">

            <div class="about-copy">

                <span class="eyebrow" style="font-size: 1.4rem;">
                    OUR STORY
                </span>

                <h2>
                    About Burger Queen
                </h2>

                <p style="font-size:1.1rem;">
                    Founded in 2019 out of a deep frustration with
                    mediocre burgers, Burger Queen was built on a
                    single promise: every bite should feel like a
                    moment. We source the best beef, bake our own
                    buns, and obsess over every ingredient.
                </p>

                <p>
                    What started as a single pop-up in the market
                    has grown into three locations and we're just
                    getting started. The crown belongs to our
                    customers, and we intend to earn it every
                    single day.
                </p>

                <a href="#" class="btn btn-outline-dark">
                    More About Us
                </a>

            </div>


            <div class="about-img">

                <img
                    src="burger_8.png"
                    alt="Burger and fries">

            </div>

        </div>

    </section>


    <!-- ================= REASONS ================= -->

    <section class="reasons">

        <div class="container">

            <div class="section-head">

                <span class="eyebrow">
                    WHY ROYALS CHOOSE US
                </span>

                <h2>
                    Reasons Why Burger Queen Is The Best
                </h2>

            </div>


            <div class="reasons-grid">

                <div class="reason-item">

                    <div class="reason-icon">
                        👑
                    </div>

                    <div>
                        <h4>
                            Premium Ingredient
                        </h4>

                        <p>
                            Every patty is hand-pressed with
                            100% grass-fed beef, seasoned and
                            cooked to order.
                        </p>
                    </div>

                </div>


                <div class="reason-item">

                    <div class="reason-icon">
                        🔥
                    </div>

                    <div>
                        <h4>
                            Flame-grilled Perfection
                        </h4>

                        <p>
                            Our open-flame grill gives every
                            burger that unmistakable char that
                            keeps royalty coming back.
                        </p>
                    </div>

                </div>


                <div class="reason-item">

                    <div class="reason-icon">
                        🍞
                    </div>

                    <div>
                        <h4>
                            Brioche Baked Daily
                        </h4>

                        <p>
                            Soft buttery brioche buns baked fresh
                            in-house every single morning —
                            never frozen.
                        </p>
                    </div>

                </div>


                <div class="reason-item">

                    <div class="reason-icon">
                        🌿
                    </div>

                    <div>
                        <h4>
                            Locally Sourced Produce
                        </h4>

                        <p>
                            We partner with local farms for
                            tomatoes, lettuce and pickles picked
                            at peak freshness.
                        </p>
                    </div>

                </div>


                <div class="reason-item">

                    <div class="reason-icon">
                        🎯
                    </div>

                    <div>
                        <h4>
                            Consistent Every Time
                        </h4>

                        <p>
                            Whether it's your first visit or
                            fiftieth, your order will taste
                            exactly as it should.
                        </p>
                    </div>

                </div>


                <div class="reason-item">

                    <div class="reason-icon">
                        💛
                    </div>

                    <div>
                        <h4>
                            Royalty Good Value
                        </h4>

                        <p>
                            Premium quality without the premium
                            price, because great burgers should
                            be for everyone.
                        </p>
                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- ================= TESTIMONIALS ================= -->

    <section class="testimonials">

        <div class="container testimonials-container">

            <div class="testimonial-left">

                <span class="eyebrow">
                    HAPPY ROYALS
                </span>

                <h2>
                    Our Loyal Customers
                </h2>

                <p>
                    Don't take our word for it — here's what the
                    royal court has to say.
                </p>

                <div class="test-img">

                    <img
                        src="burger_7.png"
                        alt="Fries and dips">

                </div>

            </div>


            <div class="test-card">

                <p>
                    "The Crown Classic is hands down the best
                    burger I've ever had. The brioche, the sauce,
                    the char — everything is perfect."
                </p>


                <div class="test-author">

                    <div class="test-author-info">

                        <div class="avatar"></div>

                        <span>
                            Mark V.
                        </span>

                    </div>


                    <div class="test-nav">

                        <button aria-label="Previous">
                            ←
                        </button>

                        <button aria-label="Next">
                            →
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- ================= GALLERY ================= -->

    <div class="gallery">

        <img src="burger_6.png" alt="Burger">

        <img src="burger_8.png" alt="Burger">

        <img src="royalclub.png" alt="Burger">

        <img src="burger_5.png" alt="Burger">

        <img src="burger_3.png" alt="Burger">

    </div>


    <!-- ================= CTA ================= -->

    <section class="cta-split">

        <div class="cta-panel">

            <h3>
                Join The Royal Club
            </h3>

            <p>
                Earn crowns on every order, unlock secret menu
                items, and get rewarded like the royalty you are.
            </p>

            <a href="#" class="btn btn-gold" style=" margin: 0 0 0 130px;">
                Get The App
            </a>

        </div>


        <div class="cta-panel">

            <h3>
                Open A Franchise
            </h3>

            <p>
                Bring the crown to your city. We partner with
                passionate operators ready to rule their local
                market.
            </p>

            <a href="#" class="btn btn-outline" style=" margin: 0 0 0 130px;">
                Buy A Franchise
            </a>

        </div>

    </section>


    <!-- ================= FOOTER ================= -->

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
                            <a href="#">
                                Burgers
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Sides
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Shakes
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
                            <a href="#">
                                About Us
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Our Story
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Contact
                            </a>
                        </li>

                        <li>
                            <a href="#">
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
                            <a href="#">
                                Get The App
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Earn Crowns
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                VIP Rewards
                            </a>
                        </li>

                        <li>
                            <a href="#">
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

    <!-- JS -->
    <script src="script.js" defer></script>

</body>
</html>