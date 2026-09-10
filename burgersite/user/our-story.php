<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Our Story | Burger Queen</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>

    <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;0,900;1,600&family=Work+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet">

    <!-- Our Story CSS -->
    <link rel="stylesheet" href="our-story.css">
</head>

<body>

    <!-- =========================================
         HEADER / NAVIGATION
    ========================================== -->

    <header>

        <nav class="nav">

            <!-- Logo -->
            <a href="home.php" class="logo-link">
                <img
                    src="burgerlogo.png"
                    alt="Burger Queen Logo"
                    class="nav-logo"
                >
            </a>

            <!-- Mobile Menu Button -->
            <button
                type="button"
                class="nav-toggle"
                id="navToggle"
                aria-label="Open navigation menu"
                aria-expanded="false"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <!-- Navigation Links -->
            <ul class="nav-links" id="navLinks">

                <li>
                    <a href="home.php">Home</a>
                </li>

                <li>
                    <a href="royal-club.php">Royal Club</a>
                </li>

                <li>
                    <a href="menu.php">Menu</a>
                </li>

                <li>
                    <a href="our-story.php" class="active">
                        Our Story
                    </a>
                </li>

                <li>
                    <a href="join-team.php">
                        Join Our Team
                    </a>
                </li>

                <li>
                    <a href="contact.php">
                        Contact
                    </a>
                </li>

            </ul>

            <!-- Order Button -->
            <div class="nav-actions">

                <a href="#" class="nav-cta">
                    Order Now
                </a>

            </div>

        </nav>

    </header>


    <!-- =========================================
         HERO
    ========================================== -->

    <section class="page-hero page-hero-lg">

        <div class="page-hero-inner">

            <span class="eyebrow">
                OUR STORY
            </span>

            <h1>
                The Crown<br>
                Belongs To You.
            </h1>

            <p>
                From a small pop-up to a growing burger kingdom,
                Burger Queen has always believed that great burgers
                should be made for everyone.
            </p>

        </div>


        <!-- Wave -->
        <div class="wave-divider">

            <svg
                viewBox="0 0 1200 80"
                preserveAspectRatio="none"
                aria-hidden="true"
            >

                <path
                    d="M0,40 C150,90 300,0 450,40
                       C600,80 750,0 900,40
                       C1050,80 1150,20 1200,40
                       L1200,80 L0,80 Z"
                    fill="#F8DCC0"
                >
                </path>

            </svg>

        </div>

    </section>


    <!-- =========================================
         ABOUT / OUR STORY
    ========================================== -->

    <section class="about">

        <div class="container about-container">

            <!-- Burger Queen Emblem -->
            <div class="emblem-box">

                <span class="emblem-crown">
                    👑
                </span>

                <span class="emblem-text">
                    Burger<br>
                    Queen
                </span>

            </div>


            <!-- Story Text -->
            <div class="about-copy">

                <span class="eyebrow">
                    ABOUT BURGER QUEEN
                </span>

                <h2>
                    Our Story
                </h2>

                <p>
                    Founded in 2019 out of a deep frustration with
                    mediocre burgers, Burger Queen was built on a
                    single promise: every bite should feel like
                    a moment.
                </p>

                <p>
                    We source the best beef, bake our own buns,
                    and obsess over every ingredient.
                </p>

                <p>
                    What started as a single pop-up in the market
                    has grown into three locations and we're just
                    getting started.
                </p>

                <p>
                    The crown belongs to our customers, and we
                    intend to earn it every single day.
                </p>

                <button
                    type="button"
                    class="btn btn-gold"
                    id="storyBtn"
                >
                    More About Us
                </button>

            </div>

        </div>

    </section>


    <!-- =========================================
         WHY BURGER QUEEN
    ========================================== -->

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

                <!-- Reason 1 -->
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


                <!-- Reason 2 -->
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


                <!-- Reason 3 -->
                <div class="reason-item">

                    <div class="reason-icon">
                        🍞
                    </div>

                    <div>

                        <h4>
                            Brioche Baked Daily
                        </h4>

                        <p>
                            Soft buttery brioche buns baked
                            fresh in-house every single
                            morning — never frozen.
                        </p>

                    </div>

                </div>


                <!-- Reason 4 -->
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
                            tomatoes, lettuce and pickles
                            picked at peak freshness.
                        </p>

                    </div>

                </div>


                <!-- Reason 5 -->
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


                <!-- Reason 6 -->
                <div class="reason-item">

                    <div class="reason-icon">
                        💛
                    </div>

                    <div>

                        <h4>
                            Royalty Good Value
                        </h4>

                        <p>
                            Premium quality without the
                            premium price, because great
                            burgers should be for everyone.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- =========================================
         TESTIMONIAL
    ========================================== -->

    <section class="testimonial">

        <span class="eyebrow">
            HAPPY ROYALS
        </span>

        <h2>
            Our Loyal Customers
        </h2>

        <p class="testimonial-text">
            "The Crown Classic is hands down the best burger
            I've ever had. The brioche, the sauce, the char —
            everything is perfect."
        </p>

        <h4>
            Mark V.
        </h4>

    </section>


    <!-- =========================================
         FOOTER
    ========================================== -->

    <footer>

        <div class="container">

            <div class="footer-grid">

                <!-- Brand -->
                <div class="footer-brand">

                    <div class="footer-logo">

                        <img
                            src="burgerlogo.png"
                            alt="Burger Queen Logo"
                        >

                    </div>

                    <p>
                        hello@burgerqueen.co
                    </p>

                    <p>
                        +1 122 QUEEN BQ
                    </p>

                </div>


                <!-- Menu -->
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


                <!-- Quick Links -->
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


                <!-- Royal Club -->
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
                            <a href="royal-club.php#rewards">
                                Earn Crowns
                            </a>
                        </li>

                        <li>
                            <a href="royal-club.php#rewards">
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


            <!-- Footer Bottom -->
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


    <!-- =========================================
         NOTIFICATION
    ========================================== -->

    <div
        class="notification"
        id="notification"
        role="status"
        aria-live="polite"
    >
        👑 Thank you for visiting Burger Queen!
    </div>


    <!-- JavaScript -->
    <script src="our-story.js"></script>

</body>
</html>
```
