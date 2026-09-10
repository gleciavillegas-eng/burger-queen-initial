// =========================================
// MOBILE NAV TOGGLE (same pattern as Home)
// =========================================

const navToggle =
    document.getElementById("navToggle");

const navLinks =
    document.getElementById("navLinks");


if (navToggle && navLinks) {

    navToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

    });


    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

        });

    });

}


// =========================================
// CATEGORY FILTER
// =========================================

const filterButtons =
    document.querySelectorAll(".filter-pills button");

const productCards =
    document.querySelectorAll(".product-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filter =
            button.getAttribute("data-filter");


        // toggle active pill

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        // show/hide matching cards

        productCards.forEach(function (card) {

            const categories =
                card.getAttribute("data-category") || "";


            if (
                filter === "all" ||
                categories.split(" ").includes(filter)
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// =========================================
// CART / ADD TO ORDER
// =========================================

let cartCount = 0;

const cartCountEl =
    document.getElementById("cartCount");

const addButtons =
    document.querySelectorAll(".btn-add");


addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;


        if (cartCountEl) {

            cartCountEl.textContent = cartCount;

        }


        const card =
            button.closest(".product-card");

        const name =
            card ?
                card.querySelector(".tag").textContent :
                "Item";


        alert(name + " added to your order! 👑🍔");

    });

});


// =========================================
// SCROLL REVEAL (same approach as Home)
// =========================================

const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


productCards.forEach(function (card) {

    revealObserver.observe(card);

});