$('.menu__section a, .arrow').not('#about_hlhs--link').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('id') + "]";
    // console.log($(goToSection).offset().top);
    // console.log($('.menu__logo').outerHeight(true));
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - $('.menu__logo').outerHeight(true)
    }, 800)
    toggleShowClass()
})

$('#about_hlhs--link, #lang_ver--link').on('click', function () {
    toggleShowClass()
})

// $(".menu__lang-menu a").one("mouseover", function () {
//     $(".lang__select--desk").addClass('permahover');
// });

// $(".menu__container").mouseleave(function () {
//     $(".lang__select--desk").remove('permahover');
// });



$(".menu__burger").on("click", function () {
    toggleShowClass()
})

if ($(".menu__burger .fa-angle-up").hasClass("show")) {
    $(window).one('scroll', function () {
        toggleShowClass()
    })
}

function toggleShowClass() {
    $(".active").toggleClass("show")
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