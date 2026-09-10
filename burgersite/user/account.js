// =========================================
// ACCOUNT PROFILE DROPDOWN
// =========================================

const accountButton =
    document.getElementById("accountButton");

const accountDropdown =
    document.getElementById("accountDropdown");

const arrow =
    document.getElementById("arrow");


// =========================================
// OPEN / CLOSE ACCOUNT DROPDOWN
// =========================================

accountButton.addEventListener("click", function (event) {

    event.stopPropagation();

    accountDropdown.classList.toggle("show");

    accountButton.classList.toggle("active");

});


// =========================================
// CLOSE DROPDOWN WHEN CLICKING OUTSIDE
// =========================================

document.addEventListener("click", function (event) {

    if (
        !accountDropdown.contains(event.target) &&
        !accountButton.contains(event.target)
    ) {

        accountDropdown.classList.remove("show");

        accountButton.classList.remove("active");

    }

});


// =========================================
// LOG OUT
// =========================================

const logoutButton =
    document.getElementById("logoutButton");


logoutButton.addEventListener("click", function () {

    const confirmLogout =
        confirm(
            "Are you sure you want to log out?"
        );


    if (!confirmLogout) {

        return;

    }


    // Remove saved login information

    localStorage.removeItem("royalClubUser");

    localStorage.removeItem("isLoggedIn");


    // Change profile information

    document.getElementById(
        "userName"
    ).textContent = "Guest";


    document.getElementById(
        "userEmail"
    ).textContent = "Not logged in";


    document.getElementById(
        "cardName"
    ).textContent = "Guest";


    document.getElementById(
        "cardEmail"
    ).textContent = "Not logged in";


    document.querySelector(
        ".account-text"
    ).textContent = "SIGN IN";


    // Close dropdown

    accountDropdown.classList.remove("show");

    accountButton.classList.remove("active");


    // Show notification

    showLogoutMessage();

});


// =========================================
// LOGOUT NOTIFICATION
// =========================================

function showLogoutMessage() {

    const message =
        document.getElementById(
            "logoutMessage"
        );


    message.classList.add("show");


    setTimeout(function () {

        message.classList.remove("show");

    }, 3000);

}


// =========================================
// MOBILE NAVIGATION
// =========================================

const mobileButton =
    document.getElementById("mobileButton");

const navMenu =
    document.getElementById("navMenu");


mobileButton.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle("show");


        if (
            navMenu.classList.contains("show")
        ) {

            mobileButton.textContent = "✕";

        } else {

            mobileButton.textContent = "☰";

        }

    }
);


// =========================================
// CLOSE MOBILE MENU WHEN LINK IS CLICKED
// =========================================

const navigationLinks =
    document.querySelectorAll(
        ".nav-menu > a"
    );


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navMenu.classList.remove("show");

            mobileButton.textContent = "☰";

        }
    );

});


// =========================================
// VIEW ACCOUNT BUTTON
// =========================================

const viewAccount =
    document.getElementById("viewAccount");


viewAccount.addEventListener(
    "click",
    function () {

        document
            .querySelector(".account-card-section")
            .scrollIntoView({

                behavior: "smooth"

            });

    }
);


// =========================================
// LOAD SAVED USER
// =========================================

function loadUser() {

    const savedUser =
        localStorage.getItem(
            "royalClubUser"
        );


    const loggedIn =
        localStorage.getItem(
            "isLoggedIn"
        );


    if (
        savedUser &&
        loggedIn === "true"
    ) {

        try {

            const user =
                JSON.parse(savedUser);


            const name =
                user.name || "Royal Member";


            const email =
                user.email || "Member";


            document.getElementById(
                "userName"
            ).textContent = name;


            document.getElementById(
                "userEmail"
            ).textContent = email;


            document.getElementById(
                "cardName"
            ).textContent = name;


            document.getElementById(
                "cardEmail"
            ).textContent = email;


            document.querySelector(
                ".account-text"
            ).textContent = name;

        }

        catch (error) {

            console.log(
                "Unable to load account."
            );

        }

    }

}


// =========================================
// START
// =========================================

loadUser();