$(document).ready(function() {
    "use strict"


    /*===============================
    //  Applying effects on page load.
    //  The _active class is added to 
    //  the p_load class and activates 
    //  the css code
    ===================================*/
    let p_load = $('.p_load')
    p_load.addClass('_active');


    /*=========================
     // Activating the animation 
     // of the "burger" button in
     // the header
     =============================*/
    let $button = $('#menu-btn');
    $button.on('click', function(e) {
        e.preventDefault();
        if ($button.hasClass('open')) {
            $button.removeClass('open');
            $button.addClass('close');
        } else {
            $button.removeClass('close');
            $button.addClass('open');
        }
    });


    /*======================================
    // Filling in contact data on other pages
    =========================================*/
    let phone = {}
    let mail = {}
    let adres = {}
    let time_work = {}

    // A function for collecting contacts from an 
    // index file, and filling them with localStorage.
    function contact_data() {
        $.each($('.phone  a'), function(i, value) {
            let href = $(value).attr('href');
            let html = $(value).html();
            phone[i] = { href: href, html: html }
            localStorage.setItem('phone', JSON.stringify(phone));
        });
        $.each($('.mail  a'), function(i, value) {
            let href = $(value).attr('href');
            let html = $(value).html();
            mail[i] = { href: href, html: html }
            localStorage.setItem('mail', JSON.stringify(mail));
        });
        $.each($('.adres  a'), function(i, value) {
            let href = $(value).attr('href');
            let html = $(value).html();
            adres[i] = { href: href, html: html }
            localStorage.setItem('adres', JSON.stringify(adres));
        });
        $.each($('.time_work  p'), function(i, value) {
            let html = $(value).html();
            time_work[i] = { html: html }
            localStorage.setItem('time_work', JSON.stringify(time_work));
        });
    }
    contact_data()

    // This function takes data from localStorage 
    //  and inserts it in other pages
    function isert_data() {
        phone = JSON.parse(localStorage.getItem('phone'))
        mail = JSON.parse(localStorage.getItem('mail'))
        adres = JSON.parse(localStorage.getItem('adres'))
        time_work = JSON.parse(localStorage.getItem('time_work'))

        let phoneLink = ''
        $.each(phone, function(i, value) {
            phoneLink += '<a href="' + value['href'] + '">'
            phoneLink += value['html']
            phoneLink += '</a>'
        })
        $('.phone_op').html(phoneLink)

        let mailLink = ''
        $.each(mail, function(i, value) {
            mailLink += '<a href="' + value['href'] + '">'
            mailLink += value['html']
            mailLink += '</a>'
        })
        $('.mail_op').html(mailLink)

        let adresLink = ''
        $.each(adres, function(i, value) {
            adresLink += '<a href="' + value['href'] + '">'
            adresLink += value['html']
            adresLink += '</a>'
        })
        $('.adres_op').html(adresLink)

        let time_workLink = ''
        $.each(time_work, function(i, value) {
            time_workLink += '<p href="' + value['href'] + '">'
            time_workLink += value['html']
            time_workLink += '</p>'
        })
        $('.time_work_op').html(time_workLink)

    }
    isert_data()
});
//
//
/*===============================
//Functions while scrolling a page
=================================*/
$(window).scroll(function() {


    // Applying a background to a header
    if ($(document).scrollTop() >= 200) {
        $("header").addClass("header_color")
        $(".dropdown-menu>li").addClass("dm_li")

    } else {
        $("header").removeClass("header_color")
        $(".dropdown-menu>li").removeClass("dm_li")
    }


    // Function for defining an element 
    // in the visible part of the screen
    function is_shown(target) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let eh = $(target).outerHeight();
        let et = $(target).offset().top;
        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            return true;
        } else {
            return false;
        }
    }


    // Applying class '_active' to visible element
    function ani_repeat(el) {
        $(el).each(function() {
            if (is_shown($(this)) === true) {
                $(this).addClass('_active')
            }
        });
    }


    //Function of applying parlax 
    //to elements with classes 'p_load', 'p1', 'p2'
    let top = $(document).scrollTop()
    let speed, yPos;

    function scrool_el(el) {
        speed = $(el).attr('data-scrool');
        let yPos = (top * speed / 1000);
        $(el).attr('style', 'transition: all 0s ease 0s; transform: translateY(' + yPos + 'in)');
    }
    $('.p_load, .p1 ').each(function(i, el) {
        scrool_el(el)
    })
    $('.p2 ').each(function(i, el) {
        ani_repeat(el)
    })
});
//
//
/*==================================
   Slick slider plugin settings
    Plugin's page:
    https://kenwheeler.github.io/slick/
======================================*/
$('.staff').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.skick_gallery').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 3000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


/* ======================================= 
  JQuery Mosaic Plugin Settings
  Plugin's page:
  https://github.com/tin-cat/jquery-mosaic
===========================================*/
$('#myMosaic2').Mosaic({
    maxRowHeight: 400,
    maxRowHeightPolicy: 'tail',
    refitOnResize: true,
    defaultAspectRatio: 1,
});

/* =============================== 
   JGLightbox plugin settings.
   Plugin's page:
   http://www.wordsmall.ru/demo/glightbox/index.html#examples
====================================*/
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    zoomable: true

});