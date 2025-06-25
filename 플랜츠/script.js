$(document).ready(function() { 
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.eq(index).css('left', '0').siblings().css('left', '100%');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // 첫 슬라이드 표시
    showSlide(currentIndex);

    // 3초마다 슬라이드 전환
    setInterval(nextSlide, 3000);
});