/*global $, document , window */

$(document).ready(function () {

// USE STRICT

'use strict';

// TRIGGER SLIDER 

$(".slider .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 4000

});

$(".account .slider-section .slider2 .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    autoplay: false,
    autoplayTimeout: 4000

});

// TRIGGER NICE SCROLL

$("html").niceScroll({

    cursorcolor: '#383F4C',
    cursorborderradius: 0,
    cursorwidth: 10,
    cursorborder: '1px solid #383F4C'

});

// SHOW MENU 


$('.nav-small i.fa-bars').click(function () {

    $('.nav-small .drop-small').toggleClass('is-visible');

    if ($('.nav-small .drop-small').hasClass('is-visible')) {

        $('.nav-small .drop-small').slideDown(800);

    } else {

        $('.nav-small .drop-small').slideUp(800);
    }
});


// CLASS ACTIVE 

$('.catogery .paginaion li , .profile .tab-content > .tab-pane li.page').click(function () {

    $(this).addClass('active').siblings().removeClass('active');
});

// SCROLL EVENT

$(window).scroll(function () {

    if ($(window).scrollTop() > 400) {

        $('.go-top').fadeIn();

    } else {

        $('.go-top').fadeOut();
    }
});

// CLICK EVENT

$('.go-top').on("click", function () {

    $('html, body').animate({
        scrollTop: '0'
    }, 800);
});

// YELLOW BACKGROUND 

$('.add-ad .panel').click(function () {

    $(this).addClass('yellow-panel').parent().siblings().find('.panel').removeClass('yellow-panel');
});

// CUSTOMIZE UPLOAD FILE 

$('.details .panel .file1').wrap('<div class="item-upload"><i class="fas fa-plus-circle"></i></div>');
$('.details .panel .file2').wrap('<div class="item-upload"><i class="fas fa-plus-circle"></i></div>');
$('.details .panel .file3').wrap('<div class="item-upload"><i class="fas fa-plus-circle"></i></div>');
$('.details .panel .file4').wrap('<div class="item-upload"><i class="fas fa-plus-circle"></i></div>');

// TRIGGER SWEET ALERT

$('.success').click(function () {

    swal({
        title: "Your ad has been posted",
        icon: 'success',
        className: "green-bg",
        buttons: {
            cancel: false,
            confirm: 'View Ad',
        },
    });
});


$('.success2').click(function () {

    swal({
        title: "Successful Registration",
        icon: 'success',
        className: "green-bg",
        buttons: {
            cancel: false,
            confirm: 'Ok',
        },
    });
});
    
$('.success3').click(function () {

    swal({
        title: "Congratulations",
        text: "Your password has been changed successfully.",
        icon: 'success',
        className: "green-bg",
        buttons: {
            cancel: false,
            confirm: 'Go to Homepage',
        },
    });
});

});