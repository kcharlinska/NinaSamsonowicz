$(".menu__burger").on("click", function () {
    toggleShowClass()
})

$('#about_hlhs--link').on('click', function () {
    toggleShowClass();
})

if ($(".menu__burger .fa-angle-up").hasClass("show")) {
    $(window).one('scroll', function () {
        toggleShowClass()
    })
}

function toggleShowClass() {
    $(".active").toggleClass("show")
}