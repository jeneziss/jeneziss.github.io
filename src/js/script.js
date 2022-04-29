window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header'),
    menuItem = document.querySelectorAll('.header__menu'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('header__active');
        })
    })
})