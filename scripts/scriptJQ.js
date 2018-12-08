$('#about-Nina').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.main-content__section').position().top
    }, 800)
})

$('#our-story').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.story__section').position().top
    }, 800)
})

$('#payment').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.payment__section').position().top
    }, 800)
})


$('.menu__section a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('id') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).position().top
    })
})

// $(document).on('click', 'a', function(event){
//     event.preventDefault();
//     $('body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 800);
// });

$(".menu__burger").on("click", function () {
    $(".active").toggleClass("show");
})