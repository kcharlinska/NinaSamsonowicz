$('.menu__section a, .arrow').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('id') + "]";
    console.log($(goToSection).offset().top);
    console.log($('.menu__logo').outerHeight(true));
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - $('.menu__logo').outerHeight(true)
    }, 800)
})

$(".menu__burger").on("click", function () {
    $(".active").toggleClass("show");
    $(window).one('scroll', function () {
        $(".active").toggleClass("show");
    });
})