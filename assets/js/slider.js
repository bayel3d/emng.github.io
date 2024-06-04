let slideIndex = 0;
let autoSlideInterval;

function changeSlide(n) {
    let slides = document.getElementsByClassName("slide");
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    let newTransform = -slideIndex * 100;
    document.querySelector(".slider").style.transform = `translateX(${newTransform}%)`;
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    let newTransform = -slideIndex * 100;
    document.querySelector(".slider").style.transform = `translateX(${newTransform}%)`;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
        changeSlide(1);
    }, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.addEventListener("DOMContentLoaded", function() {
    showSlide(slideIndex);
    startAutoSlide();

    let sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);
});
