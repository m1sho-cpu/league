$(document).ready(function() {
    // Initialize lightGallery plugin
    $('#gallery-container').lightGallery({
        selector: '.gallery-item',
        download: false,
        share: false
    });

    // Reference: https://www.lightgalleryjs.com/
});

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    let interval;

    // Initialize the carousel
    function initCarousel() {
        updateCarousel();
        startAutoRotation();
        
        // Pause on hover
        const carousel = document.querySelector('.carousel-container');
        carousel.addEventListener('mouseenter', pauseAutoRotation);
        carousel.addEventListener('mouseleave', startAutoRotation);
    }

    // Update visible slide and indicators
    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        updateCarousel();
    }

    // Next slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // Previous slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // Auto-rotation
    function startAutoRotation() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 5000); // Change every 5 seconds
    }

    function pauseAutoRotation() {
        clearInterval(interval);
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        pauseAutoRotation();
        startAutoRotation(); // Reset timer after manual navigation
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        pauseAutoRotation();
        startAutoRotation();
    });

    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            goToSlide(slideIndex);
            pauseAutoRotation();
            startAutoRotation();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            pauseAutoRotation();
            startAutoRotation();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            pauseAutoRotation();
            startAutoRotation();
        }
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.querySelector('.carousel-container').addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    document.querySelector('.carousel-container').addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide(); // Swipe left
        } else if (touchEndX > touchStartX + 50) {
            prevSlide(); // Swipe right
        }
        pauseAutoRotation();
        startAutoRotation();
    }

    // Initialize
    initCarousel();
});