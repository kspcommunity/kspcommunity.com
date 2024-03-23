// Define an immediately invoked function expression (IIFE) to encapsulate the code
(function () {
    // Event listener for DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', async function () {
        try {
            // Load common components asynchronously
            const [headerResponse, sidebarLeftResponse, sidebarRightResponse, footerResponse] = await Promise.all([
                getCachedComponent('assets/common/header.html'),
                getCachedComponent('assets/common/sidebar-left.html'),
                getCachedComponent('assets/common/sidebar-right.html'),
                getCachedComponent('assets/common/footer.html')
            ]);

            // Insert components into their respective containers
            document.getElementById('header-container').innerHTML = headerResponse;
            document.getElementById('sidebar-left-container').innerHTML = sidebarLeftResponse;
            document.getElementById('sidebar-right-container').innerHTML = sidebarRightResponse;
            document.getElementById('footer-container').innerHTML = footerResponse;

            // Initialize hamburger icons and check device width after loading sidebars
            initializeHamburgerIconL();
            initializeHamburgerIconR();
            checkDeviceWidth();
        } catch (error) {
            console.error('Error loading components:', error);
        }
    });

    // Function to fetch and cache components
    function getCachedComponent(url) {
        return new Promise(async (resolve, reject) => {
            try {
                // Check if component is cached
                const cachedComponent = localStorage.getItem(url);
                if (cachedComponent) {
                    resolve(cachedComponent);
                } else {
                    // Fetch component if not cached
                    const response = await fetch(url);
                    const component = await response.text();
                    // Cache component in localStorage
                    localStorage.setItem(url, component);
                    resolve(component);
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    // Function to check device width and toggle sidebars if needed
    function checkDeviceWidth() {
        const deviceWidth = window.innerWidth;
        const sidebarLeft = document.getElementById('sidebar-left');
        const sidebarRight = document.getElementById('sidebar-right');
        if (deviceWidth >= 300 && deviceWidth <= 900) {
            sidebarLeft.classList.add('hidden');
            sidebarRight.classList.add('hidden');
        }
    }

    // Function to initialize hamburger icon for left sidebar
    function initializeHamburgerIconL() {
        const hamburgerIconsL = document.querySelectorAll('.hamburger-icon-L');
        const sidebarLeft = document.getElementById('sidebar-left');

        // Function to toggle sidebar visibility
        function toggleSidebarL() {
            sidebarLeft.classList.toggle('hidden');
        }

        // Add click event listeners to hamburger icons
        hamburgerIconsL.forEach(function (hamburgerIcon) {
            hamburgerIcon.addEventListener('click', toggleSidebarL);
        });
    }

    // Function to initialize hamburger icon for right sidebar
    function initializeHamburgerIconR() {
        const hamburgerIconsR = document.querySelectorAll('.hamburger-icon-R');
        const sidebarRight = document.getElementById('sidebar-right');

        // Function to toggle sidebar visibility
        function toggleSidebarR() {
            sidebarRight.classList.toggle('hidden');
        }

        // Add click event listeners to hamburger icons
        hamburgerIconsR.forEach(function (hamburgerIcon) {
            hamburgerIcon.addEventListener('click', toggleSidebarR);
        });
    }
})();