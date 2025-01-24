// founder.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// AOS (Animate On Scroll) initialization
AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once - while scrolling down
});

// Optional: Add a scroll-to-top button functionality
const scrollTopBtn = document.createElement('div');
scrollTopBtn.classList.add('scroll-top');
scrollTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
