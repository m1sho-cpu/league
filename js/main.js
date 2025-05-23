// Toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('show');
    this.querySelector('.hamburger').classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 600) {
            document.getElementById('main-nav').classList.remove('show');
            document.querySelector('.hamburger').classList.remove('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});