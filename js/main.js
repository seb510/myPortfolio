jQuery(document).ready(function($) {

    const scrollHeader = () => {
        $(window).scroll(function() {
            let sticky = $('.header'),
                scroll = $(window).scrollTop();

            if (scroll >= 100) sticky.addClass('scroll');
            else sticky.removeClass('scroll');
        });
    }

    scrollHeader();

    // Скрипт для плавного перехода для якорных ссылок по сайту
    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    //Burger menu
    $(document).on('click', '.menu-btn', () => {
        $('.menu__list').stop().slideToggle('500');
        $('body').toggleClass('hidden');
    })
});