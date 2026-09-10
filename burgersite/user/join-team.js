document.addEventListener("DOMContentLoaded", function () {


    // =====================================
    // MOBILE NAVIGATION
    // =====================================

    const menuBtn =
        document.getElementById("menuBtn");

    const navMenu =
        document.getElementById("navMenu");


    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("open");

            const isOpen =
                navMenu.classList.contains("open");


            if (isOpen) {

                menuBtn.textContent = "✕";

                menuBtn.setAttribute(
                    "aria-expanded",
                    "true"
                );

            } else {

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        // Close menu after clicking a link

        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("open");

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    // =====================================
    // NOTIFICATION
    // =====================================

    const notification =
        document.getElementById("notification");


    function showNotification(message) {

        if (!notification) {
            return;
        }


        notification.textContent =
            message;

        notification.classList.add("show");


        setTimeout(function () {

            notification.classList.remove("show");

        }, 3000);

    }


    // =====================================
    // JOB APPLICATION BUTTONS
    // =====================================

    const applyButtons =
        document.querySelectorAll(".apply-btn");


    applyButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const job =
                button.getAttribute("data-job");


            showNotification(
                "👑 Application started for "
                + job
                + "!"
            );

        });

    });


    // =====================================
    // GENERAL APPLICATION BUTTON
    // =====================================

    const generalApply =
        document.getElementById("applyGeneral");


    if (generalApply) {

        generalApply.addEventListener(
            "click",
            function () {

                showNotification(
                    "👑 Thank you! Your application journey begins here."
                );

            }
        );

    }


    // =====================================
    // SCROLL ANIMATION
    // =====================================

    const cards =
        document.querySelectorAll(
            ".benefit-card, .job-card"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "reveal"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        cards.forEach(function (card) {

            card.classList.add(
                "animate-card"
            );

            observer.observe(card);

        });

    } else {

        cards.forEach(function (card) {

            card.classList.add(
                "reveal"
            );

        });

    }


    // =====================================
    // ACTIVE JOB SECTION
    // =====================================

    const jobsSection =
        document.getElementById("jobs");


    window.addEventListener(
        "scroll",
        function () {

            if (!jobsSection) {
                return;
            }


            const scrollPosition =
                window.scrollY;


            const jobsPosition =
                jobsSection.offsetTop - 200;


            if (
                scrollPosition >=
                jobsPosition
            ) {

                console.log(
                    "Viewing career opportunities"
                );

            }

        }
    );

});