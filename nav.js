const nav = document.getElementById('main-nav');

function toggleMobileMenu() {
    nav.classList.toggle('mobile-visible');
}

function closeMobileMenu() {
    nav.classList.remove('mobile-visible');
}