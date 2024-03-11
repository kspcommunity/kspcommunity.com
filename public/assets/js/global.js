document.addEventListener('DOMContentLoaded', function () {
    // Load Header
    const headerContainer = document.getElementById('header-container');
    fetch('assets/common/header.html')
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    const footerContainer = document.getElementById('footer-container');
    fetch('assets/common/footer.html')
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));
});
