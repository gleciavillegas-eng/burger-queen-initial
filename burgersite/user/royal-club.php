<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Royal Club | Burger Queen</title>

    <!-- Google Fonts (same as Home) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;0,900;1,600&family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="royal-club.css">

</head>


<body>


    <!-- ================= HEADER (copied from Home) ================= -->

    <header>
        <nav class="nav">

            <a href="home.php" class="logo-link">
                <img src="burger_logo.png" alt="Burger Queen Logo" class="nav-logo">
            </a>

            <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul class="nav-links" id="navLinks">
                <li><a href="home.php">Home</a></li>
                <li><a href="royal-club.php" class="active">Royal Club</a></li>
                <li><a href="menu.php">Menu</a></li>
                <li><a href="our-story.php">Our Story</a></li>
                <li><a href="join-team.php">Join Our Team</a></li>
                <li><a href="contact.php">Contact</a></li>
            </ul>

            <div class="nav-actions">

                <a href="#" class="nav-cta">Order Now</a>

            </div>

        </nav>
    </header>


    <!-- ================= ROYAL CLUB HERO (same treatment as Home's hero) ================= -->

    <section class="page-hero page-hero-lg">

        <div class="page-hero-inner">

            <span class="eyebrow">WELCOME TO THE ROYAL COURT</span>

            <h1>
                Join The<br>
                Royal Club.
            </h1>

            <p>
                Earn crowns on every order, unlock exclusive
                deals, and get early access to new menu drops.
                Royalty has its privileges.
            </p>

            <a href="#rewards" class="btn btn-gold">
                Join The Club
            </a>

        </div>


        <div class="wave-divider">

            <svg viewBox="0 0 1200 80" preserveAspectRatio="none">

                <path
                    d="M0,40 C150,90 300,0 450,40 C600,80 750,0 900,40 C1050,80 1150,20 1200,40 L1200,80 L0,80 Z"
                    fill="#F8DCC0">
                </path>

            </svg>

        </div>

    </section>


    <!-- ================= CROWN COUNTER (same 2-col layout as Home's About) ================= -->

    <section class="about" id="counter">

        <div class="container about-container">

            <div class="about-copy">

                <span class="eyebrow">ROYALTY HAS ITS PRIVILEGES</span>

                <h2>
                    Get More Rewards
                </h2>

                <p style="font-size:1.05rem;">
                    The Royal Club is our way of saying thank you.
                    Every order brings you closer to exclusive
                    rewards, special offers, and royal treatment.
                </p>

            </div>


            <div class="crown-card">

                <div class="crown-icon">
                    👑
                </div>

                <p class="crown-label">
                    YOUR CROWNS
                </p>

                <div class="counter" id="crownCount">
                    0
                </div>

                <small>
                    CROWNS EARNED
                </small>

            </div>

        </div>

    </section>


    <!-- ================= BENEFITS (same pattern as Home's Reasons) ================= -->

    <section class="reasons">

        <div class="container">

            <div class="section-head">

                <span class="eyebrow">
                    ROYAL CLUB BENEFITS
                </span>

                <h2>
                    Your Membership Has Perks
                </h2>

            </div>


            <div class="reasons-grid benefits-grid">

                <div class="reason-item">

                    <div class="reason-icon">
                        👑
                    </div>

                    <div>
                        <h4>
                            Earn Crowns
                        </h4>

                        <p>
                            Earn crowns every time you order your
                            favorite burgers, sides, and shakes.
                        </p>
                    </div>

                </div>


                <div class="reason-item">

                    <div class="reason-icon">
                        ⭐
                    </div>

                    <div>
                        <h4>
                            Exclusive Deals
                        </h4>

                        <p>
                            Unlock special promotions and offers
                            available only to Royal Club members.
                        </p>
                    </div>

                </div>


                <div class="reason-item">

                    <div class="reason-icon">
                        ⚡
                    </div>

                    <div>
                        <h4>
                            Early Access
                        </h4>

                        <p>
                            Be the first to discover new menu
                            drops and limited-edition royals.
                        </p>
                    </div>

                </div>


                <div class="reason-item">

                    <div class="reason-icon">
                        💛
                    </div>

                    <div>
                        <h4>
                            VIP Rewards
                        </h4>

                        <p>
                            Enjoy rewards and special perks as
                            you rise through the royal ranks.
                        </p>
                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- ================= HOW IT WORKS (same 2-col layout as Home's About) ================= -->

    <section class="about how-section">

        <div class="container about-container">

            <div class="about-copy">

                <span class="eyebrow">YOUR ROYAL JOURNEY</span>

                <h2>
                    How It Works
                </h2>

                <div class="steps">

                    <div class="step">
                        <div class="step-number">01</div>
                        <div>
                            <h4>Join</h4>
                            <p>Become a member of the Royal Club.</p>
                        </div>
                    </div>

                    <div class="step">
                        <div class="step-number">02</div>
                        <div>
                            <h4>Earn</h4>
                            <p>Collect crowns every time you order.</p>
                        </div>
                    </div>

                    <div class="step">
                        <div class="step-number">03</div>
                        <div>
                            <h4>Redeem</h4>
                            <p>Use your crowns to unlock rewards.</p>
                        </div>
                    </div>

                    <div class="step">
                        <div class="step-number">04</div>
                        <div>
                            <h4>Reign</h4>
                            <p>Enjoy your royal privileges.</p>
                        </div>
                    </div>

                </div>

                <button class="btn btn-gold" id="joinButton">
                    Become Royal
                </button>

            </div>


            <div class="royal-highlight-card">

                <div class="card-crown">👑</div>

                <p class="royal-eyebrow">BURGER QUEEN</p>

                <h3>
                    Royal<br>Club
                </h3>

                <div class="card-line"></div>

                <span class="royal-tagline">
                    EARN &middot; REDEEM &middot; REIGN
                </span>

            </div>

        </div>

    </section>


    <!-- ================= REWARDS (same product-grid pattern as Menu) ================= -->

    <section class="bestsellers" id="rewards">

        <div class="container">

            <div class="section-head">

                <span class="eyebrow">
                    ROYAL REWARDS
                </span>

                <h2>
                    Spend Your Crowns
                </h2>

            </div>


            <div class="product-grid reward-grid">

                <div class="reward-card">

                    <div class="reward-media">
                        <span class="reward-icon">🍟</span>
                        <span class="tag">100 crowns</span>
                    </div>

                    <div class="product-footer">
                        <h3>Free Side</h3>
                        <p class="product-desc">Treat yourself to a royal side.</p>
                        <button class="btn-add redeem-btn" data-cost="100">
                            Redeem
                        </button>
                    </div>

                </div>


                <div class="reward-card">

                    <div class="reward-media">
                        <span class="reward-icon">🥤</span>
                        <span class="tag">200 crowns</span>
                    </div>

                    <div class="product-footer">
                        <h3>Free Shake</h3>
                        <p class="product-desc">Enjoy a delicious royal shake.</p>
                        <button class="btn-add redeem-btn" data-cost="200">
                            Redeem
                        </button>
                    </div>

                </div>


                <div class="reward-card featured">

                    <div class="reward-media">
                        <span class="reward-icon">🍔</span>
                        <span class="tag">300 crowns</span>
                    </div>

                    <div class="product-footer">
                        <h3>Free Burger</h3>
                        <p class="product-desc">Claim your royal burger reward.</p>
                        <button class="btn-add redeem-btn" data-cost="300">
                            Redeem
                        </button>
                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- ================= FINAL CTA (same banner style as Home's Royal Club banner) ================= -->

    <div class="club-banner-wrap">

        <div class="club-banner">

            <div class="club-banner-copy">

                <span class="eyebrow">READY TO REIGN?</span>

                <h3>
                    The Crown Awaits You
                </h3>

                <p>
                    Join the Royal Club today and start earning
                    crowns on every order.
                </p>

                <button class="btn btn-gold" id="finalJoin">
                    Join The Royal Club
                </button>

            </div>

        </div>

    </div>


    <!-- ================= FOOTER (copied from Home) ================= -->

    <footer>

        <div class="container">

            <div class="footer-grid">

                <div class="footer-brand">

                    <div class="footer-logo">
                        <img src="burger_logo.png" alt="Burger Queen Logo">
                    </div>

                    <p>hello@burgerqueen.co</p>
                    <p>+1 122 QUEEN BQ</p>

                </div>


                <div class="footer-col">

                    <h5>MENU</h5>

                    <ul>
                        <li><a href="menu.php#burgers">Burgers</a></li>
                        <li><a href="menu.php#sides">Sides</a></li>
                        <li><a href="menu.php#shakes">Shakes</a></li>
                        <li><a href="menu.php#featured">Featured Meals</a></li>
                    </ul>

                </div>


                <div class="footer-col">

                    <h5>QUICK LINKS</h5>

                    <ul>
                        <li><a href="our-story.php">About Us</a></li>
                        <li><a href="our-story.php">Our Story</a></li>
                        <li><a href="contact.php">Contact</a></li>
                        <li><a href="join-team.php">Join Our Team</a></li>
                    </ul>

                </div>


                <div class="footer-col">

                    <h5>ROYAL CLUB</h5>

                    <ul>
                        <li><a href="royal-club.php">Get The App</a></li>
                        <li><a href="royal-club.php#rewards">Earn Crowns</a></li>
                        <li><a href="royal-club.php#rewards">VIP Rewards</a></li>
                        <li><a href="royal-club.php">Buy A Franchise</a></li>
                    </ul>

                </div>

            </div>


            <div class="footer-bottom">

                <span>© 2024 Burger Queen. All rights reserved.</span>

                <div class="links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>

            </div>

        </div>

    </footer>


    <!-- ================= NOTIFICATION ================= -->

    <div class="notification" id="notification">
        👑 Welcome to the Royal Club!
    </div>


    <script src="royal-club.js"></script>

</body>

</html>