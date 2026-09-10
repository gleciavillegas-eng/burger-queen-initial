<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Burger Queen | Login</title>

    <link rel="stylesheet" href="login.css">

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
            <a href="index.html">Home</a>
            <a href="#">Menu</a>
            <a href="#">Our Story</a>
            <a href="#">Contact</a>
        </nav>

        <div class="nav-buttons">
            <a href="index.html" class="register-nav">
                Register
            </a>
        </div>

    </header>


    <!-- LOGIN PAGE -->
    <main class="login-page">

        <!-- LEFT FOOD SECTION -->
        <section class="food-section">

            <div class="food-content">

                <div class="small-crown">♛</div>

                <h1>
                    Good Food.<br>
                    Royal Taste.
                </h1>

                <p>
                    BURGERS • SIDES • SHAKES
                </p>

                <a href="#" class="menu-btn">
                    Explore Our Menu
                </a>

            </div>


            <!-- FOOD DECORATIONS -->
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


        <!-- LOGIN FORM -->
        <section class="form-section">

            <div class="login-card">

                <!-- LOGO -->
                <div class="card-logo">

                    <span>♛</span>

                    <h2>
                        BURGER QUEEN
                    </h2>

                </div>


                <h1>
                    Welcome Back!
                </h1>

                <p class="subtitle">
                    Log in to your account and enjoy
                    your favorite burgers, sides and shakes.
                </p>


                <!-- LOGIN FORM -->
                <form
                    id="loginForm"
                    action="login.php"
                    method="POST"
                >

                    <!-- USERNAME -->
                    <div class="form-group">

                        <label for="username">
                            Username
                        </label>

                        <div class="input-box">

                            <span class="input-icon">
                                👤
                            </span>

                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                autocomplete="username"
                                required
                            >

                        </div>

                        <small id="usernameError"></small>

                    </div>


                    <!-- PASSWORD -->
                    <div class="form-group">

                        <label for="password">
                            Password
                        </label>

                        <div class="input-box">

                            <span class="input-icon">
                                🔒
                            </span>

                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                autocomplete="current-password"
                                required
                            >

                            <button
                                type="button"
                                id="showPassword"
                                class="show-password"
                            >
                                👁
                            </button>

                        </div>

                        <small id="passwordError"></small>

                    </div>


                    <!-- REMEMBER + FORGOT -->
                    <div class="login-options">

                        <label class="remember">

                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                            >

                            <span>
                                Remember me
                            </span>

                        </label>

                        <a href="#" id="forgotPassword">
                            Forgot password?
                        </a>

                    </div>


                    <!-- LOGIN BUTTON -->
                    <button
                        type="submit"
                        class="login-submit"
                    >
                        Log In
                    </button>


                    <!-- DIVIDER -->
                    <div class="divider">

                        <span></span>

                        <p>OR</p>

                        <span></span>

                    </div>


                    <!-- REGISTER -->
                    <div class="register-link">

                        Don't have an account?

                        <a href="index.html">
                            Register
                        </a>

                    </div>

                </form>

            </div>

        </section>

    </main>


    <!-- FOOTER -->
    <footer>

        <p>
            © 2026 Burger Queen. All rights reserved.
        </p>

        <p>
            Burgers • Sides • Shakes
        </p>

    </footer>


    <script src="login.js"></script>

</body>
</html>
fonts.googleapis.com