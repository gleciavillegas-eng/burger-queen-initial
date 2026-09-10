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
// CROWN COUNTER
// =========================================

let crowns = 0;

const crownCount =
    document.getElementById("crownCount");


function addCrowns(amount) {

    crowns += amount;

    if (crownCount) {

        crownCount.textContent = crowns;

    }

}


// =========================================
// NOTIFICATION TOAST
// =========================================

const notification =
    document.getElementById("notification");


function showNotification(message) {

    if (!notification) {
        return;
    }

    notification.textContent = message;

    notification.classList.add("show");


    setTimeout(function () {

        notification.classList.remove("show");

    }, 3000);

}


// =========================================
// JOIN BUTTONS
// =========================================

const joinButton =
    document.getElementById("joinButton");

const finalJoin =
    document.getElementById("finalJoin");


if (joinButton) {

    joinButton.addEventListener("click", function () {

        showNotification("👑 Welcome to the Royal Club!");

        addCrowns(50);

    });

}


if (finalJoin) {

    finalJoin.addEventListener("click", function () {

        showNotification("👑 You are now part of the Royal Club!");

        addCrowns(50);

    });

}


// =========================================
// REDEEM REWARDS
// =========================================

const redeemButtons =
    document.querySelectorAll(".redeem-btn");


redeemButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const cost =
            Number(button.getAttribute("data-cost"));


        if (crowns >= cost) {

            crowns -= cost;

            if (crownCount) {

                crownCount.textContent = crowns;

            }

            showNotification("👑 Reward redeemed successfully!");

        } else {

            showNotification("You need more crowns to redeem this reward.");

        }

    });

});


// =========================================
// SCROLL REVEAL (same approach as Home)
// =========================================

const revealTargets =
    document.querySelectorAll(".reason-item, .reward-card");


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


revealTargets.forEach(function (target) {

    revealObserver.observe(target);

});