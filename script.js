// Function to toggle the visibility of the navigation menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}

// Function to animate the title letter by letter, switching between titles without affecting layout
function animateTitle(titles, index = 0) {
    const titleElement = document.getElementById("data-title");
    
    // Set a fixed width to prevent layout shifts
    const longestTitle = titles.reduce((a, b) => (a.length > b.length ? a : b));
    titleElement.style.minWidth = `${longestTitle.length}ch`;
    titleElement.style.display = 'inline-block';
    titleElement.style.textAlign = 'center';

    titleElement.textContent = ""; // Clear the current title

    const title = titles[index];
    let charIndex = 0;

    const interval = setInterval(() => {
        if (charIndex < title.length) {
            titleElement.textContent += title[charIndex];
            charIndex++;
        } else {
            clearInterval(interval);
            
            // Wait a bit, then switch to the next title
            setTimeout(() => {
                animateTitle(titles, (index + 1) % titles.length);
            }, 2000); // Pause for 2 seconds before changing the title
        }
    }, 100); // Adjust the speed of the animation (in milliseconds)
}

// Titles to animate
const titles = ["Data Scientist", "Data Engineer"];

// Start the animation when the page loads
window.onload = () => animateTitle(titles);
