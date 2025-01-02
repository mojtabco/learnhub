// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Find the element by its ID
    const authenticationTab = document.getElementById("authentication-tab");

    // Simulate a click event
    if (authenticationTab) {
        authenticationTab.click();
    }
});
