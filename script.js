const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");

let clickCount = 0;

noButton.addEventListener("click", () => {
    clickCount++;

    // Make "Yes" button bigger
    yesButton.style.transform = `scale(${2 + clickCount * 0.4})`;

    // Move "No" button further away
    noButton.style.marginLeft = `${clickCount * 20}px`;

    // Disappear "No" button when screen is filled
    if (clickCount >= 5) {
        noButton.style.display = "none";
    }
});

yesButton.addEventListener("click", () => {
    window.location.href = "accepted.html"; // Redirect immediately if "Yes" is clicked
});
