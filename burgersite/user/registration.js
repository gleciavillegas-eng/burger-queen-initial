```javascript
document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // GET FORM ELEMENTS
    // =========================================

    const form = document.getElementById("registrationForm");

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");

    const showPassword = document.getElementById("showPassword");


    // =========================================
    // CHECK IF FORM ELEMENTS EXIST
    // =========================================

    if (
        !form ||
        !username ||
        !email ||
        !password ||
        !confirmPassword
    ) {
        console.error("Registration form elements are missing.");
        return;
    }


    // =========================================
    // SHOW / HIDE PASSWORD
    // =========================================

    if (showPassword) {

        showPassword.addEventListener("click", function () {

            if (password.type === "password") {

                password.type = "text";
                confirmPassword.type = "text";

                showPassword.textContent = "🙈";

            } else {

                password.type = "password";
                confirmPassword.type = "password";

                showPassword.textContent = "👁";

            }

        });

    }


    // =========================================
    // USERNAME VALIDATION
    // =========================================

    username.addEventListener("input", function () {

        const value = username.value.trim();

        if (value.length < 4) {

            if (usernameError) {
                usernameError.textContent =
                    "Username must be at least 4 characters.";
            }

        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {

            if (usernameError) {
                usernameError.textContent =
                    "Username can only contain letters, numbers and underscores.";
            }

        } else {

            if (usernameError) {
                usernameError.textContent = "";
            }

        }

    });


    // =========================================
    // EMAIL VALIDATION
    // =========================================

    email.addEventListener("input", function () {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            if (emailError) {
                emailError.textContent =
                    "Please enter a valid email address.";
            }

        } else {

            if (emailError) {
                emailError.textContent = "";
            }

        }

    });


    // =========================================
    // PASSWORD VALIDATION
    // =========================================

    password.addEventListener("input", function () {

        if (password.value.length < 8) {

            if (passwordError) {
                passwordError.textContent =
                    "Password must be at least 8 characters.";
            }

        } else {

            if (passwordError) {
                passwordError.textContent = "";
            }

        }


        // Also check confirm password
        if (confirmPassword.value !== "") {

            if (confirmPassword.value !== password.value) {

                if (confirmError) {
                    confirmError.textContent =
                        "Passwords do not match.";
                }

            } else {

                if (confirmError) {
                    confirmError.textContent = "";
                }

            }

        }

    });


    // =========================================
    // CONFIRM PASSWORD
    // =========================================

    confirmPassword.addEventListener("input", function () {

        if (confirmPassword.value !== password.value) {

            if (confirmError) {
                confirmError.textContent =
                    "Passwords do not match.";
            }

        } else {

            if (confirmError) {
                confirmError.textContent = "";
            }

        }

    });


    // =========================================
    // FORM SUBMISSION
    // =========================================

    form.addEventListener("submit", function (event) {

        let valid = true;


        // =========================================
        // USERNAME
        // =========================================

        const usernameValue =
            username.value.trim();

        if (
            usernameValue.length < 4 ||
            !/^[a-zA-Z0-9_]+$/.test(usernameValue)
        ) {

            if (usernameError) {
                usernameError.textContent =
                    "Please enter a valid username.";
            }

            valid = false;

        } else {

            if (usernameError) {
                usernameError.textContent = "";
            }

        }


        // =========================================
        // EMAIL
        // =========================================

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !emailPattern.test(
                email.value.trim()
            )
        ) {

            if (emailError) {
                emailError.textContent =
                    "Please enter a valid email address.";
            }

            valid = false;

        } else {

            if (emailError) {
                emailError.textContent = "";
            }

        }


        // =========================================
        // PASSWORD
        // =========================================

        if (password.value.length < 8) {

            if (passwordError) {
                passwordError.textContent =
                    "Password must be at least 8 characters.";
            }

            valid = false;

        } else {

            if (passwordError) {
                passwordError.textContent = "";
            }

        }


        // =========================================
        // CONFIRM PASSWORD
        // =========================================

        if (
            password.value !==
            confirmPassword.value
        ) {

            if (confirmError) {
                confirmError.textContent =
                    "Passwords do not match.";
            }

            valid = false;

        } else {

            if (confirmError) {
                confirmError.textContent = "";
            }

        }


        // =========================================
        // STOP FORM IF INVALID
        // =========================================

        if (!valid) {

            event.preventDefault();

            return;

        }


        // =========================================
        // SUCCESS MESSAGE
        // =========================================

        alert(
            "Registration successful! Welcome to Burger Queen 👑"
        );

    });

});
```