/**first slider**/
$(".slider-one")
    .not(".slick-intialized")
    .slick({
    autoplay:true,
    autoplaySpeed: 3000,
    dots:true,
    preArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
});
