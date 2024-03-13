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
        })
        .catch(error => console.error('Error loading sidebar left:', error));

    // Load Sidebar Right
    const sidebarRightContainer = document.getElementById('sidebar-right-container');
    fetch('assets/common/sidebar-right.html')
        .then(response => response.text())
        .then(html => {
            sidebarRightContainer.innerHTML = html;
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
