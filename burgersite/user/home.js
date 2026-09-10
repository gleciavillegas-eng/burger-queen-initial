// =========================================
// ACCOUNT DROPDOWN
// =========================================

const accountBtn =
    document.getElementById("accountBtn");

const accountDropdown =
    document.getElementById("accountDropdown");

const logoutBtn =
    document.getElementById("logoutBtn");


// =========================================
// OPEN ACCOUNT DROPDOWN
// =========================================

if (accountBtn && accountDropdown) {

    accountBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        accountDropdown.classList.toggle("show");

        accountBtn.classList.toggle("active");

    });

}


// =========================================
// CLOSE DROPDOWN WHEN CLICKING OUTSIDE
// =========================================

document.addEventListener("click", function (event) {

    if (
        accountDropdown &&
        accountBtn &&
        !accountDropdown.contains(event.target) &&
        !accountBtn.contains(event.target)
    ) {

        accountDropdown.classList.remove("show");

        accountBtn.classList.remove("active");

    }

});


// =========================================
// LOG OUT
// =========================================

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        const confirmLogout =
            confirm(
                "Are you sure you want to log out?"
            );


        if (!confirmLogout) {
            return;
        }


        // Clear account information

        localStorage.removeItem("royalClubUser");

        localStorage.removeItem("isLoggedIn");


        // Change account information

        const profileName =
            document.getElementById("profileName");

        const profileEmail =
            document.getElementById("profileEmail");

        const accountName =
            document.querySelector(".account-name");


        if (profileName) {

            profileName.textContent = "Guest";

        }


        if (profileEmail) {

            profileEmail.textContent =
                "Not logged in";

        }


        if (accountName) {

            accountName.textContent =
                "Sign In";

        }


        // Close dropdown

        accountDropdown.classList.remove("show");

        accountBtn.classList.remove("active");


        // Show message

        const message =
            document.getElementById("logoutMessage");


        if (message) {

            message.classList.add("show");


            setTimeout(function () {

                message.classList.remove("show");

            }, 3000);

        }

    });

}


// =========================================
// MOBILE NAVIGATION
// =========================================

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("open");


        if (navMenu.classList.contains("open")) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }

    });


    // Close mobile menu after clicking a link

    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("open");

            menuBtn.textContent = "☰";

        });

    });

}


// =========================================
// LOAD SAVED ACCOUNT
// =========================================

function loadAccount() {

    const savedUser =
        localStorage.getItem("royalClubUser");

    const isLoggedIn =
        localStorage.getItem("isLoggedIn");


    if (
        savedUser &&
        isLoggedIn === "true"
    ) {

        try {

            const user =
                JSON.parse(savedUser);


            const profileName =
                document.getElementById("profileName");

            const profileEmail =
                document.getElementById("profileEmail");

            const accountName =
                document.querySelector(".account-name");


            if (profileName) {

                profileName.textContent =
                    user.name || "Royal Member";

            }


            if (profileEmail) {

                profileEmail.textContent =
                    user.email || "";

            }


            if (accountName) {

                accountName.textContent =
                    user.name || "My Account";

            }

        }

        catch (error) {

            console.log(
                "Unable to load account."
            );

        }

    }

}


// Run account loading

loadAccount();


// =========================================
// HERO IMAGE FALLBACK
// =========================================

const burgerImage =
    document.querySelector(".hero-image img");


if (burgerImage) {

    burgerImage.addEventListener(
        "error",
        function () {

            this.style.display = "none";

            this.parentElement.innerHTML =
                '<div class="burger-fallback">🍔</div>';

        }
    );

}


// =========================================
// SCROLL REVEAL
// =========================================

const cards =
    document.querySelectorAll(
        ".feature-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(card);

});