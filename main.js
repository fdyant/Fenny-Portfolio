const menuToggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
});

const scroll = new SmoothScroll('.menu a[href*="#"]', {
        speed: 800
});


