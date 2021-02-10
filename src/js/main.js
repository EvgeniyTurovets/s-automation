$(function() {
    $('.burger').on('click', function() {
        $(this).toggleClass('active')
        $('.header').toggleClass('active')

    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.header').addClass('scroll')
        } else {
            $('.header').removeClass('scroll')
        }
    });

    $('.sec1__cloud button').on('click', function() {
        if (!$(this).hasClass('active')) {
            $('.sec1__cloud button').removeClass('active')
            $(this).addClass('active')
            $('.sec1__cloud .sec1__cloud__text').hide()
            $('.sec1__cloud .sec1__cloud__text').eq($(this).index()).fadeIn()
        }
    })
})