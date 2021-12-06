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
    arrows: false,
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