document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    const showPassword = document.getElementById("showPassword");

    const forgotPassword =
        document.getElementById("forgotPassword");


    /* =========================
       SHOW / HIDE PASSWORD
    ========================= */

    showPassword.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";

            showPassword.textContent = "🙈";

        } else {

            password.type = "password";

            showPassword.textContent = "👁";

        }

    });


    /* =========================
       USERNAME VALIDATION
    ========================= */

    username.addEventListener("input", function () {

        const value = username.value.trim();

        if (value.length === 0) {

            usernameError.textContent =
                "Username is required.";

        } else if (value.length < 4) {

            usernameError.textContent =
                "Username must be at least 4 characters.";

        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {

            usernameError.textContent =
                "Invalid username format.";

        } else {

            usernameError.textContent = "";

        }

    });


    /* =========================
       PASSWORD VALIDATION
    ========================= */

    password.addEventListener("input", function () {

        if (password.value.length === 0) {

            passwordError.textContent =
                "Password is required.";

        } else {

            passwordError.textContent = "";

        }

    });


    /* =========================
       FORM SUBMISSION
    ========================= */

    form.addEventListener("submit", function (event) {

        let valid = true;


        /* USERNAME */

        if (username.value.trim() === "") {

            usernameError.textContent =
                "Please enter your username.";

            valid = false;

        }


        /* PASSWORD */

        if (password.value === "") {

            passwordError.textContent =
                "Please enter your password.";

            valid = false;

        }


        /* STOP SUBMISSION */

        if (!valid) {

            event.preventDefault();

        }

    });


    /* =========================
       FORGOT PASSWORD
    ========================= */

    forgotPassword.addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "Password recovery will be available soon."
        );

    });

});