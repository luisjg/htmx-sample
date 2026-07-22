const nav = document.getElementById('main-nav');
const mobileMenuButton = document.querySelector('.mobile-menu-btn');

function toggleMobileMenu() {
    if (!nav || !mobileMenuButton) return;

    nav.classList.toggle('mobile-visible');
    mobileMenuButton.setAttribute(
        'aria-expanded',
        nav.classList.contains('mobile-visible').toString()
    );
}

function closeMobileMenu() {
    if (!nav || !mobileMenuButton) return;

    nav.classList.remove('mobile-visible');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
}

if (nav && mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    nav.addEventListener('click', (event) => {
        if (event.target.closest('a')) closeMobileMenu();
    });
}
