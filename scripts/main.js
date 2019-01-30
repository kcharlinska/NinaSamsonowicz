// Smooth scroll to section after nav click
$('.page__header a, .arrow a').not('.about_hlhs--link').on('click', function () {
    const goToSection = $(this).attr("href");
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - $('.menu__logo').outerHeight(true)
    }, 800)
    toggleShowClass()
})


//  Change Nav Item after scroll to section
const changeMenu = () => {
    const sectionList = document.querySelectorAll('section[id]');
    const navHeight = document.querySelector('.page__header').offsetHeight;
    const scrollPosition = window.scrollY + navHeight;
    sectionList.forEach(item => {
        const navItem = document.querySelector(`.${item.id}--link`);
        if (scrollPosition >= item.offsetTop && scrollPosition < item.offsetTop + item.offsetHeight) navItem.classList.add('active');
        else navItem.classList.remove('active');
    })
}
window.addEventListener('scroll', changeMenu)


//  Show/hide menu on mobile
$(".menu__burger").on("click", function () {
    toggleShowClass()
});
$('.about_hlhs--link, .lang_ver--link').on('click', function () {
    toggleShowClass()
})

//  Menu hides after scroll
$(window).on('scroll', function () {
    if ($(".fa-angle-up").hasClass("show")) {
        toggleShowClass()
    }
})

//  Show/hide function
function toggleShowClass() {
    $(".switch").toggleClass("show")
}

//  Select language on mobile
$('.lang__select--mobi').change(function () {
    window.location = $(this).val()
})

//  Double Tap Issue on iOS Devices
$(document).ready(function () {
    $("a").on("click touchend", function () {
        var el = $(this);
        var link = el.attr("href");
        window.location = link;
    });
});