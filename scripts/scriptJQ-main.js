$('.menu__section a, .arrow').not('#about_hlhs--link').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('id') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - $('.menu__logo').outerHeight(true)
    }, 800)
    toggleShowClass()
})

// function changeText() {
//     const scrollHeight = $(document).scrollTop();
//     if (scrollHeight < $('#about_Nina').height()) {
//         $('#about_Nina--link').addClass("active")
//     } else if (scrollHeight < $('#payment').height() + $('#payment').offset().top) {
//         $('#payment--link').addClass("active")
//     }
// }
// $(document).on('scroll', changeText)


$('#about_hlhs--link, .lang_ver--link').on('click', function () {
    toggleShowClass()
})


$(".menu__burger").on("click", function () {
    toggleShowClass()
})

if ($(".menu__burger .fa-angle-up").hasClass("show")) {
    $(window).one('scroll', function () {
        toggleShowClass()
    })
}

function toggleShowClass() {
    $(".switch").toggleClass("show")
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