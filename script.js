document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here
    console.log('JavaScript loaded!');
    
    // Toggle navigation menu on burger menu click
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
