// Define an immediately invoked function expression (IIFE) to encapsulate the code
(function () {
    // Event listener for DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', async function () {
        try {
            // Load common components asynchronously
            const [headerResponse, footerResponse] = await Promise.all([
                getCachedComponent('assets/common/header.html'),
                getCachedComponent('assets/common/footer.html')
            ]);

            // Insert components into their respective containers
            document.getElementById('header-container').innerHTML = headerResponse;
            document.getElementById('footer-container').innerHTML = footerResponse;

            // Add scroll event listener for parallax effect
            document.addEventListener("scroll", handleScroll);

            // Initial background position setup to start at the top of the page
            document.body.style.backgroundPosition = 'center 0px';
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

    // Function to update background position based on scroll for parallax effect
    function updateBackgroundPosition() {
        var scrollTop = window.scrollY;
        var scrollSpeed = 0.2; // Adjust this value to change the scrolling speed
        var backgroundPosition = 'center ' + (-scrollTop * scrollSpeed) + 'px';
        document.body.style.backgroundPosition = backgroundPosition;
    }

    // Function to handle scroll event for parallax effect
    function handleScroll() {
        requestAnimationFrame(updateBackgroundPosition);
    }
})();
