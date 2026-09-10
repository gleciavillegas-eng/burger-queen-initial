// ======================================
// MOBILE NAVIGATION
// ======================================

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");


    if (navMenu.classList.contains("open")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


// Close menu when link is clicked

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});



// ======================================
// CONTACT FORM
// ======================================

const contactForm =
    document.getElementById("contactForm");

const notification =
    document.getElementById("notification");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const subject =
        document.getElementById("subject").value;


    if (name === "" || subject === "") {

        showNotification(
            "Please complete all required fields."
        );

        return;

    }


    showNotification(
        "👑 Thank you, " +
        name +
        "! Your message has been received."
    );


    contactForm.reset();

});



// ======================================
// NOTIFICATION
// ======================================

function showNotification(message) {

    notification.textContent = message;

    notification.classList.add("show");


    setTimeout(function () {

        notification.classList.remove("show");

    }, 3500);

}



// ======================================
// FAQ ACCORDION
// ======================================

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(function (item) {

    const question =
        item.querySelector(".faq-question");


    question.addEventListener("click", function () {

        const isOpen =
            item.classList.contains("open");


        // Close other questions

        faqItems.forEach(function (otherItem) {

            otherItem.classList.remove("open");

        });


        // Open selected question

        if (!isOpen) {

            item.classList.add("open");

        }

    });

});



// ======================================
// SCROLL ANIMATION
// ======================================

const infoItems =
    document.querySelectorAll(
        ".info-item, .faq-item"
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


infoItems.forEach(function (item) {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(25px)";

    item.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(item);

});



// ======================================
// ACTIVE CONTACT PAGE
// ======================================

window.addEventListener("scroll", function () {

    const contactSection =
        document.querySelector(".contact-section");


    if (
        window.scrollY >
        contactSection.offsetTop - 250
    ) {

        console.log(
            "Contact section active"
        );

    }

});