<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Burger Queen | Register</title>

    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>

<body>

    <!-- NAVIGATION -->
    <header class="navbar">

        <div class="logo">
            <span class="crown">♛</span>
            <span>BURGER QUEEN</span>
        </div>

        <nav>
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">Our Story</a>
            <a href="#">Contact</a>
        </nav>

        <div class="nav-buttons">
            <a href="login.html" class="login-btn">Login</a>
        </div>

    </header>


    <!-- MAIN CONTENT -->
    <main class="registration-page">

        <!-- LEFT SIDE -->
        <section class="food-section">

            <div class="food-content">

                <div class="small-crown">♛</div>

                <h1>Good Food.<br>Royal Taste.</h1>

                <p>Burgers • Sides • Shakes</p>

                <button class="menu-btn">
                    Explore Our Menu
                </button>

            </div>

            <div class="food-image">

                <div class="burger">
                    🍔
                </div>

                <div class="fries">
                    🍟
                </div>

                <div class="shake">
                    🥤
                </div>

            </div>

        </section>


        <!-- REGISTRATION FORM -->
        <section class="form-section">

            <div class="register-card">

                <div class="card-logo">
                    <span>♛</span>
                    <h2>BURGER QUEEN</h2>
                </div>

                <h1>Create Your Account</h1>

                <p class="subtitle">
                    Join Burger Queen and enjoy our best burgers,
                    sides and shakes!
                </p>


                <form id="registrationForm" action="register.php" method="POST">

                    <!-- USERNAME -->
                    <div class="form-group">

                        <label for="username">
                            Username
                        </label>

                        <div class="input-box">

                            <span class="input-icon">👤</span>

                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Choose a username"
                                required
                            >

                        </div>

                        <small id="usernameError"></small>

                    </div>


                    <!-- FULL NAME -->
                    <div class="form-group">

                        <label for="fullname">
                            Full Name
                        </label>

                        <div class="input-box">

                            <span class="input-icon">👤</span>

                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="Enter your full name"
                                required
                            >

                        </div>

                    </div>


                    <!-- EMAIL -->
                    <div class="form-group">

                        <label for="email">
                            Email Address
                        </label>

                        <div class="input-box">

                            <span class="input-icon">✉</span>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                            >

                        </div>

                        <small id="emailError"></small>

                    </div>


                    <!-- PHONE -->
                    <div class="form-group">

                        <label for="phone">
                            Phone Number
                        </label>

                        <div class="input-box">

                            <span class="input-icon">☎</span>

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                required
                            >

                        </div>

                    </div>


                    <!-- PASSWORD -->
                    <div class="form-group">

                        <label for="password">
                            Password
                        </label>

                        <div class="input-box">

                            <span class="input-icon">🔒</span>

                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Create a password"
                                required
                            >

                            <button
                                type="button"
                                class="show-password"
                                id="showPassword">
                                👁
                            </button>

                        </div>

                        <small id="passwordError"></small>

                    </div>


                    <!-- CONFIRM PASSWORD -->
                    <div class="form-group">

                        <label for="confirmPassword">
                            Confirm Password
                        </label>

                        <div class="input-box">

                            <span class="input-icon">🔒</span>

                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                required
                            >

                        </div>

                        <small id="confirmError"></small>

                    </div>


                    <!-- TERMS -->
                    <div class="terms">

                        <label>

                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                required
                            >

                            <span>
                                I agree to the
                                <a href="#">Terms & Conditions</a>
                            </span>

                        </label>

                    </div>


                    <!-- REGISTER BUTTON -->
                    <button
                        type="submit"
                        class="register-btn">

                        Create Account

                    </button>


                    <!-- LOGIN LINK -->
                    <div class="login-link">

                        Already have an account?

                        <a href="login.html">
                            Login
                        </a>

                    </div>

                </form>

            </div>

        </section>

    </main>


    <footer>

        <p>
            © 2026 Burger Queen. All rights reserved.
        </p>

        <p>
            Burgers • Sides • Shakes
        </p>

    </footer>


    <script src="script.js"></script>

</body>
</html>
fonts.googleapis.com
