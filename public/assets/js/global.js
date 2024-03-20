document.addEventListener('DOMContentLoaded', function () {
    // Load Header
    const headerContainer = document.getElementById('header-container');
    fetch('assets/common/header.html')
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Sidebar Left
    const sidebarLeftContainer = document.getElementById('sidebar-left-container');
    fetch('assets/common/sidebar-left.html')
        .then(response => response.text())
        .then(html => {
            sidebarLeftContainer.innerHTML = html;
            initializeHamburgerIconL();
        })
        .catch(error => console.error('Error loading sidebar left:', error));

    // Load Sidebar Right
    const sidebarRightContainer = document.getElementById('sidebar-right-container');
    fetch('assets/common/sidebar-right.html')
        .then(response => response.text())
        .then(html => {
            sidebarRightContainer.innerHTML = html;
            initializeHamburgerIconR();
        })
        .catch(error => console.error('Error loading sidebar right:', error));

    // Load Footer
    const footerContainer = document.getElementById('footer-container');
    fetch('assets/common/footer.html')
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));
});

// Function to update background position based on scroll
function updateBackgroundPosition() {
    var scrollTop = window.scrollY;
    var scrollSpeed = 0.3; // Adjust this value to change the scrolling speed
    var backgroundPosition = 'center ' + (-scrollTop * scrollSpeed) + 'px';
    document.body.style.backgroundPosition = backgroundPosition;
}

// Function to handle scroll event
function handleScroll() {
    requestAnimationFrame(updateBackgroundPosition);
}

// Initialize background position
updateBackgroundPosition();

// Add scroll event listener
document.addEventListener("scroll", handleScroll);

// Function to initialize hamburger icon
function initializeHamburgerIconL() {
    const hamburgerIconsL = document.querySelectorAll('.hamburger-icon-L');
    const sidebarLeft = document.getElementById('sidebar-left');

    // Function to toggle sidebar visibility and adjust width
    function toggleSidebarL() {
        sidebarLeft.classList.toggle('hidden');
    }

    // Add click event listeners to hamburger icons
    hamburgerIconsL.forEach(function (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', toggleSidebarL);
    });

}
function initializeHamburgerIconR() {
    const hamburgerIconsR = document.querySelectorAll('.hamburger-icon-R');
    const sidebarRight = document.getElementById('sidebar-right');

    // Function to toggle sidebar visibility and adjust width
    function toggleSidebarR() {
        sidebarRight.classList.toggle('hidden');
    }

    // Add click event listeners to hamburger icons
    hamburgerIconsR.forEach(function (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', toggleSidebarR);
    });

}
