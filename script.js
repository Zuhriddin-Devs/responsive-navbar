// MOBILE NAV FUNCTION

const mobileNav = () => {
    const elMobileNav = document.querySelector('#js-mobile-nav');
    const elBurgerBtn = document.querySelector('#js-burger-btn');
    const elCloseBtn = document.querySelector('#js-close-btn');

    elBurgerBtn.addEventListener('click', () => {
        elMobileNav.classList.remove('hidden');
    });

    elCloseBtn.addEventListener('click', () => {
        elMobileNav.classList.add('hidden');
    });
};

mobileNav();