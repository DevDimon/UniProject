document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000;

    function stopSlideShow() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }

    function startSlideShow() {
        stopSlideShow();
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        showSlide(nextIndex);
    }

    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) prevIndex = slides.length - 1;
        showSlide(prevIndex);
    }

    nextBtn.addEventListener('click', function () {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    prevBtn.addEventListener('click', function () {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            stopSlideShow();
            let slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
            startSlideShow();
        });
    });

    document.querySelector('.slider-container').addEventListener('mouseenter', stopSlideShow);
    document.querySelector('.slider-container').addEventListener('mouseleave', startSlideShow);

    startSlideShow();
});