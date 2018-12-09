$('.menu__section a, .arrow').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('id') + "]";
    console.log($(goToSection).offset().top);
    console.log($('.menu__logo').outerHeight(true));
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - $('.menu__logo').outerHeight(true)
    }, 800)
    $(".active").toggleClass("show")

})

$(".menu__burger").on("click", function () {
    $(".active").toggleClass("show");
})

if ($(".menu__burger .fa-angle-up").hasClass("show")) {
    $(window).one('scroll', function () {
        $(".active").toggleClass("show")
    })
}

// $(window).one('scroll', function () {
//     if ($(".active").hasClass("show")) {
//         $(".active").toggleClass("show")
//     }
// })

// The Double Tap Issue on iOS Devices

$(document).ready(function () {
    $("a").on("click touchend", function () {
        var el = $(this);
        var link = el.attr("href");
        window.location = link;
    });
});