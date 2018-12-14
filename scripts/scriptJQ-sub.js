$(".menu__burger").on("click", function () {
    toggleShowClass()
})

$('#about_hlhs--link, #lang_ver--link').on('click', function () {
    toggleShowClass();
})

if ($(".menu__burger .fa-angle-up").hasClass("show")) {
    $(window).one('scroll', function () {
        toggleShowClass()
    })
}

function toggleShowClass() {
    $(".switch").toggleClass("show")
}
// The Double Tap Issue on iOS Devices

$(document).ready(function () {
    $("a").on("click touchend", function () {
        var el = $(this);
        var link = el.attr("href");
        window.location = link;
    });
});