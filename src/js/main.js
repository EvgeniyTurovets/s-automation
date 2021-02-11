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

    $('.sec4__item button').on('click', function() {
        $(this).closest('.sec4__item').toggleClass('active')
        $(this).closest('.sec4__item').find('.sec4__toggle').slideToggle()
    })

    $('.form__input input').on('focus', function() {
        $(this).closest('.form__input').addClass('active')
    })
    $('.form__input input').on('blur', function() {
        if ($(this).val().length == 0) {
            $(this).closest('.form__input').removeClass('active')
        }

    })
    $('.sec6__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var index = (currentSlide ? currentSlide : 0) + 1;
        $('.sec6__slider__index__text').text(index + ' / ' + slick.slideCount);
    });
    $('.sec6__slider').slick({
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                adaptiveHeight: true
            }
        }]
    })

    $('.sec6__slider__index .prev').on('click', function() {
        $('.sec6__slider').slick('slickPrev');
    })
    $('.sec6__slider__index .next').on('click', function() {
        $('.sec6__slider').slick('slickNext');
    })

})