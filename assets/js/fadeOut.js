// Function to handle fading out the content before navigation
function fadeOutContent(event) {
    event.preventDefault(); // Prevent immediate navigation

    // Apply the fade-out class to the body or specific container
    document.body.classList.add("fade-out");

    // Wait for the animation to finish before navigating
    setTimeout(() => {
        window.location.href = event.target.href; // Navigate to the projects page
    }, 800); // Match the timing of the fade-out effect
}

// Attach event listener to the projects link when DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const projectsLink = document.getElementById("fade-out-link");
    if (projectsLink) {
        projectsLink.addEventListener("click", fadeOutContent);
    }
});

