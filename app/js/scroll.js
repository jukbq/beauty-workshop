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


    // Applying class '_active' to visible element with a class 'p2'
    function ani_repeat(el) {
        $(el).each(function() {
            if (is_shown($(this)) === true) {
                $(this).addClass('_active')
            }
            //On reaching the top of the screen, it removes the _active class
            if ($(document).scrollTop() === 0) {
                $(this).removeClass('_active')
            };
        });


    }


    //Function of applying parlax 
    //to elements with classes 'p_load', 'p1'
    let top = $(document).scrollTop()
    let speed, yPos;

    function scrool_el(el) {
        speed = $(el).attr('data-scrool');
        let yPos = (top * speed / 1000);
        $(el).attr('style', 'transition: all 0s ease 0s; transform: translateY(' + yPos + 'in)');
    }


    //Finding elements with classes 'p_load', 'p1'
    $('.p_load, .p1', ).each(function(i, el) {
        scrool_el(el)
    })


    //Finding elements with a class 'p2'
    $('.p2').each(function(i, el) {
        ani_repeat(el)
    })

});