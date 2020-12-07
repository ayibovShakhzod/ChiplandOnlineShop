$(document).ready(function () {
    $(".btn-dropdown").click(function () {
        if ($(this).siblings().hasClass("d-flex")) {
            $(this).siblings().removeClass("d-flex");
        } else {
            $(this).siblings().addClass("d-flex");
        }
    });
    $(".btn-dropdown").focusout(function () {
        $(this).siblings().removeClass("d-flex");
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 15,
            },
            550: {
                items: 2,
                margin: 30,
            },
            1025: {
                items: 3,
                margin: 30,
            },
        },
    });

    $(".main-link").click(function () {
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        $(this).siblings().children().children(".link").addClass("active");
    });
    $(".link").click(function () {
        $(this).parent().siblings().children(".link").removeClass("active");
        $(this).addClass("active");
    });


    $(".product-cart-button").click(function () {
        $(".cart-list-popup").addClass("right-0");
        $("body").css("overflow", "hidden")
    });
    $(".close-popup").click(function () {
        $(".cart-list-popup").removeClass("right-0");
        $("body").css("overflow", "inherit")
    });

    $(".decBtn").click(function () {
        var val = $(this).siblings().children(".qnt-input").val();
        val = parseInt(val);
        if (val > 1) {
            $(this).siblings().children(".qnt-input").val(val - 1);
        } else {
            $(this).parent().parent(".product-list").remove();
            $(this).parent(".cart-inputIncDec").addClass("d-none");
            $(this).parent().siblings(".cart-button").removeClass("d-none");
        }
    });
    $(".incBtn").click(function () {
        var val = $(this).siblings().children(".qnt-input").val();
        val = parseInt(val);
        $(this).siblings().children(".qnt-input").val(val + 1);
    });
    $(".remove-product").click(function () {
        $(this).parent().remove();
    });


    $(".cart-button").click(function () {
        var cartButton = $(this);
        $(this).siblings(".cart-inputIncDec").removeClass("d-none");
        $(this).addClass("d-none");
        $(this).parent().parent().siblings(".img-link").append("<div class='img-add-cart'><svg id=\"successAnimation\" class=\"animated\" xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"70\" viewBox=\"0 0 70 70\">\n" +
            "  <path id=\"successAnimationResult\" fill=\"#D8D8D8\" d=\"M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z\"/>\n" +
            "  <circle id=\"successAnimationCircle\" cx=\"35\" cy=\"35\" r=\"24\" stroke=\"#979797\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"transparent\"/>\n" +
            "  <polyline id=\"successAnimationCheck\" stroke=\"#979797\" stroke-width=\"2\" points=\"23 34 34 43 47 27\" fill=\"transparent\"/>\n" +
            "</svg></div>");
        setTimeout(function () {
            cartButton.parent().parent().siblings(".img-link").children(".img-add-cart").css("opacity", "0");
        }, 1500);
        setTimeout(function () {
            cartButton.parent().parent().siblings(".img-link").children(".img-add-cart").remove();
        }, 2000);

    });
    $('#scroll_down').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
    $(".show-hide-btn").click(function () {
        $(".category-list").toggleClass("category-list-show");
    });
    scrollTop(650);
    var mql = window.matchMedia('all and (max-width: 991px)');
    equalsMedia(mql);

    function equalsMedia(mql) {
        if (mql.matches) {
            scrollTop(50);
        } else {
            scrollTop(50);
        }
    }

    $(window).resize(function () {
        equalsMedia(mql);
    });

    function scrollTop(topPx) {
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > topPx) {
                $('.navbar-section').addClass('fixed');
            } else {
                $('.navbar-section').removeClass('fixed');
            }
        });
    }

    $(".search-btn-nav").click(function () {
        $(".search-modal").show(500);
        $("body").css("overflow", "hidden");
    });
    $(".modalOverlay").click(function () {
        $("body").css("overflow", "auto");
        $(this).parent().hide(500);
    });
    $(".btn-cancel").click(function () {
        $("body").css("overflow", "auto");
        $(this).parent().parent().hide(500);
    });
    $(".menu-btn").click(function () {
        $("body").css("overflow", "hidden");
        $(".overlay").show();
        $(".left-menu").addClass("left-0");
    });
    $(".overlay, .close-menu").click(function () {
        $("body").css("overflow", "auto");
        $(".overlay").hide();
        $(".left-menu").removeClass("left-0");
    });
    $(".img-collection").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        var src = $(this).children().attr("src");
        $(".main-img").attr("src", src);
    });
    $(".more").click(function () {
        $(this).toggleClass("bottom-8");
        $(this).parent().toggleClass("show-text");
    });
    $(".label").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
    $(".contact-edit-btn, .add-btn-contact").click(function () {
        $(".contact-modal").fadeIn(500);
        $("body").css("overflow", "hidden");
    });
    $(".delete-btn").click(function () {
        $(this).parent().parent().remove();
    });
    $(".overlay-modal, .close-modal").click(function () {
        $(this).parent().fadeOut(500);
        $("body").css("overflow", "auto");
    });
    $(".address-edit-btn, .add-btn-address").click(function () {
        $(".address-modal").fadeIn(500);
        $("body").css("overflow", "hidden");
    });
    $(".add-btn-card").click(function () {
        $(".card-modal").fadeIn(500);
        $("body").css("overflow", "hidden");
    });
    $(".show-list").click(function () {
        $(this).toggleClass("rotate-180");
        $(this).parent().siblings(".item-list").slideToggle(1000);
    });
    $(".category-link").hover(function () {
        $(this).parent().siblings().children().removeClass("active");
        $(this).addClass("active");
        var dataList = $(this).attr("data-link");
        $(".category-inner").removeClass("active");
        $("[data-list=" + dataList + "]").siblings().css("display", "none");
        $("[data-list=" + dataList + "]").fadeIn(500);
    });
    $(".all-category").on("mouseenter", function () {
        $(".menus-modal").slideDown(500);
        $(this).children(".nav-link").addClass("active");
    });
    $(".all-category").on("mouseleave", function () {
        $(".menus-modal").slideUp(500);
        $(this).children(".nav-link").removeClass("active");
    });

    var mqls = window.matchMedia('all and (min-width: 991px)');
    equalsMedia2(mqls);

    function equalsMedia2(mqls) {
        if (mqls.matches) {
            scroll(30);
        } else {
        }
    }

    $(window).resize(function () {
        equalsMedia2(mqls);
    });

    function scroll(topPx) {
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > topPx) {
                $('.content-sticky').addClass('fixed2');
            } else {
                $('.content-sticky').removeClass('fixed2');
            }
        });
    }

    $(".doYou").click(function () {
        $(this).siblings().addClass("d-flex");
        $(this).remove();
    });
    $(".order-select").on("click", function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        let orderList = $(this).attr("data-order-list");
        $("[data-order-detail=" + orderList + "]").siblings().removeClass("active");
        $("[data-order-detail=" + orderList + "]").addClass("active");
    });
});