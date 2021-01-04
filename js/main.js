$(document).ready(function(){
// Скрипт для плавного перехода для якорных ссылок по сайту
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});

//Burger menu
    $('.menu-btn').click(function(){
        $('.menu__list').slideToggle('500');
    });
});