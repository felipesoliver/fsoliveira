// SLIDER

$(document).ready(function(){
    $('.slider').slick({
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        speed: 3000,
        cssEase: 'ease',
        dots: false,
        fade: true,
        infinite: true,
        mobileFirst: true,
        pauseOnHover: false,
    });
});