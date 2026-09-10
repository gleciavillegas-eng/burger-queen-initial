<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Royale Club | Account</title>

    <!-- CSS -->
    <link rel="stylesheet" href="account.css">

    <!-- GOOGLE FONTS -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap"
          rel="stylesheet">

</head>


<body>


<!-- =========================================
     NAVIGATION BAR
========================================= -->

<header class="navbar">


    <!-- LOGO -->

    <a href="index.html" class="logo">

        <div class="logo-burger">

            <span></span>
            <span></span>
            <span></span>

        </div>

        <div class="logo-text">

            <strong>
                BURGER
            </strong>

            <strong>
                QUEEN
            </strong>

        </div>

    </a>



    <!-- NAVIGATION -->

    <nav class="nav-menu" id="navMenu">

        <a href="index.html">
            HOME
        </a>

        <a href="menu.html">
            MENU
        </a>

        <a href="our-story.html">
            OUR STORY
        </a>

        <a href="join-team.html">
            JOIN OUR TEAM
        </a>

        <a href="royal-club.html">
            ROYAL CLUB
        </a>

        <a href="contact.html">
            CONTACT
        </a>


        <!-- ORDER NOW -->

        <a href="order-now.html"
           class="order-button">

            ORDER NOW

        </a>



        <!-- =================================
             ACCOUNT PROFILE
        ================================== -->

        <div class="account-container">


            <!-- PROFILE BUTTON -->

            <button class="account-button"
                    id="accountButton"
                    type="button">


                <div class="profile-picture">

                    <span>
                        👤
                    </span>

                </div>


                <span class="account-text">
                    ACCOUNT
                </span>


                <span class="arrow"
                      id="arrow">

                    ▼

                </span>


            </button>



            <!-- =================================
                 ACCOUNT DROPDOWN
            ================================== -->

            <div class="account-dropdown"
                 id="accountDropdown">


                <!-- PROFILE INFORMATION -->

                <div class="profile-header">


                    <div class="profile-large">

                        👤

                    </div>


                    <div class="profile-information">

                        <h3 id="userName">
                            Shakirah
                        </h3>

                        <p id="userEmail">
                            shakirah@email.com
                        </p>

                    </div>


                </div>



                <!-- DIVIDER -->

                <div class="divider"></div>



                <!-- MY ACCOUNT -->

                <a href="#"
                   class="dropdown-link">

                    <div class="dropdown-icon">
                        👤
                    </div>

                    <div class="dropdown-content">

                        <strong>
                            My Account
                        </strong>

                        <small>
                            Manage your profile
                        </small>

                    </div>

                </a>



                <!-- MY ORDERS -->

                <a href="order-now.html"
                   class="dropdown-link">

                    <div class="dropdown-icon">
                        🛍️
                    </div>

                    <div class="dropdown-content">

                        <strong>
                            My Orders
                        </strong>

                        <small>
                            View your orders
                        </small>

                    </div>

                </a>



                <!-- ROYAL CLUB -->

                <a href="royal-club.html"
                   class="dropdown-link">

                    <div class="dropdown-icon">
                        👑
                    </div>

                    <div class="dropdown-content">

                        <strong>
                            Royal Club
                        </strong>

                        <small>
                            Your rewards & crowns
                        </small>

                    </div>

                </a>



                <!-- DIVIDER -->

                <div class="divider"></div>



                <!-- LOG OUT -->

                <button class="logout-button"
                        id="logoutButton"
                        type="button">

                    <span>
                        ↪
                    </span>

                    LOG OUT

                </button>


            </div>


        </div>


    </nav>



    <!-- MOBILE MENU BUTTON -->

    <button class="mobile-button"
            id="mobileButton">

        ☰

    </button>


</header>



<!-- =========================================
     PAGE CONTENT
========================================= -->

<main>


    <section class="account-page">


        <div class="page-content">


            <p class="subtitle">
                WELCOME TO THE
            </p>


            <h1>

                ROYAL<br>

                <span>CLUB.</span>

            </h1>


            <p class="description">

                Manage your account, view your orders,
                and enjoy exclusive Royal Club rewards.

            </p>


            <button class="view-account"
                    id="viewAccount">

                VIEW MY ACCOUNT

            </button>


        </div>


        <div class="crown">

            ♛

        </div>


    </section>



    <!-- ACCOUNT CARD -->

    <section class="account-card-section">


        <div class="account-card">


            <div class="card-profile">

                <div class="card-profile-picture">

                    👤

                </div>


                <div>

                    <h2 id="cardName">
                        Shakirah
                    </h2>

                    <p id="cardEmail">
                        shakirah@email.com
                    </p>

                </div>

            </div>



            <div class="card-line"></div>



            <div class="account-details">


                <div class="detail">

                    <span>
                        👑
                    </span>

                    <div>

                        <small>
                            ROYAL STATUS
                        </small>

                        <strong>
                            Royal Member
                        </strong>

                    </div>

                </div>



                <div class="detail">

                    <span>
                        ⭐
                    </span>

                    <div>

                        <small>
                            CROWNS
                        </small>

                        <strong>
                            250 Crowns
                        </strong>

                    </div>

                </div>



                <div class="detail">

                    <span>
                        🛍️
                    </span>

                    <div>

                        <small>
                            ORDERS
                        </small>

                        <strong>
                            12 Orders
                        </strong>

                    </div>

                </div>


            </div>


        </div>


    </section>


</main>



<!-- =========================================
     LOGOUT MESSAGE
========================================= -->

<div class="logout-message"
     id="logoutMessage">

    <span>
        👑
    </span>

    You have successfully logged out.

</div>



<!-- JAVASCRIPT -->

<script src="account.js"></script>


</body>

</html>