$(document).ready(function() {
    $('.btn_price').each(function(i) {
        $(this).on('click', function() {
            $('#order-form .order-form__title').text($('.services__category').eq(i).text());
        });
    });

    $(".hamburger").click(function() {
        $(".hamburger").toggleClass("hamburger_active");
        $(".menu").toggleClass("menu_active");
        $("body").toggleClass("lock-scroll");
    });
    $(".menu__item").click(function() {
        $(".hamburger").toggleClass("hamburger_active");
        $(".menu").toggleClass("menu_active");
        $("body").toggleClass("lock-scroll");
    });

    $('.carousel-feedback').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        accessibility: false,
        focusOnSelect: false,
        appendDots: '.carousel-nav',
        dotsClass: 'dot',
    });

    $('.order-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/booking.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.order-form').trigger('reset');
            $('.thanks').fadeIn('slow');
            parent.$.fancybox.close();
            setTimeout(function() {
                $('.thanks').fadeOut('slow');
            }, 2500);
        });
        return false;
    });
});