document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});
document.getElementById('menu_toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
})
const videoContainer = document.querySelector('.video-container');
const leftButton = document.querySelector('.slider-left');
const rightButton = document.querySelector('.slider-right');
const scrollAmount = 320;
leftButton.addEventListener('click', () => {
    videoContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

rightButton.addEventListener('click', () => {
    videoContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});