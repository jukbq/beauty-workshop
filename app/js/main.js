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