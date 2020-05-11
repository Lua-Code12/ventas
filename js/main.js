/**Primer slider**/
$(".slider-one")
    .not(".slick-intialized")
    .slick({
    autoplay:true,
    autoplaySpeed: 3000,
    dots:true,
    preArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
});


/**Segundo slider**/

$(".slider-two")
    .not(".slick-intialized")
    .slick({
    preArrow: ".site-slider-two .prev",
    nextArrow: ".site-slider-two .next",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000
});


/**tercer slider**/

$(".slider-three")
    .not(".slick-intialized")
    .slick({
    preArrow: ".site-slider-three .prev",
    nextArrow: ".site-slider-three .next",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    infinite: false
});
