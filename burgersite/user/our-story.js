```javascript
// =========================================
// OUR STORY PAGE JAVASCRIPT
// =========================================


// Wait until the HTML page is completely loaded
document.addEventListener("DOMContentLoaded", function () {


    // =========================================
    // MOBILE NAV TOGGLE
    // =========================================

    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");


    // Check that the navigation elements exist
    if (navToggle !== null && navLinks !== null) {

        navToggle.addEventListener("click", function () {

            navLinks.classList.toggle("open");


            // Update accessibility attribute
            const isOpen =
                navLinks.classList.contains("open");

            navToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        // Close menu after clicking a navigation link
        const menuLinks =
            navLinks.querySelectorAll("a");


        menuLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("open");

                navToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    // =========================================
    // MORE ABOUT US BUTTON
    // =========================================

    const storyBtn =
        document.getElementById("storyBtn");

    const notification =
        document.getElementById("notification");


    // Check that both elements exist
    if (
        storyBtn !== null &&
        notification !== null
    ) {

        storyBtn.addEventListener("click", function () {

            notification.classList.add("show");


            // Remove notification after 3 seconds
            setTimeout(function () {

                notification.classList.remove("show");

            }, 3000);

        });

    }


    // =========================================
    // SCROLL REVEAL
    // =========================================

    const revealTargets =
        document.querySelectorAll(".reason-item");


    // Make sure there are reason items
    if (revealTargets.length > 0) {


        // Check if browser supports IntersectionObserver
        if ("IntersectionObserver" in window) {

            const revealObserver =
                new IntersectionObserver(
                    function (entries) {

                        entries.forEach(function (entry) {

                            if (entry.isIntersecting) {

                                entry.target.classList.add(
                                    "reveal"
                                );


                                // Stop watching this item
                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        });

                    },
                    {
                        threshold: 0.15
                    }
                );


            revealTargets.forEach(function (target) {

                revealObserver.observe(target);

            });

        } else {

            // Fallback for older browsers
            revealTargets.forEach(function (target) {

                target.classList.add("reveal");

            });

        }

    }

});
```
