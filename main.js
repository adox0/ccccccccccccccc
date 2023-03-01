(function($){"use strict";function preloader(){$('#preloader').delay(0).fadeOut()};$(window).on('load',function(){preloader();mainSlider();wowAnimation();menu_navigation()});function scrollToBottom(sect){$('html,body').animate({scrollTop:$("#"+sect).offset().top},'slow')}
if($('.menu-area li.menu-item-has-children ul').length){$('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>')}
if($('.mobile-menu').length){var mobileMenuContent=$('.menu-area .main-menu').html();$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click',function(){$(this).toggleClass('open');$(this).prev('ul').slideToggle(500)});$('.mobile-nav-toggler').on('click',function(){$('body').addClass('mobile-menu-visible')});$('.menu-backdrop, .mobile-menu .close-btn').on('click',function(){$('body').removeClass('mobile-menu-visible')})}
$("[data-background]").each(function(){$(this).css("background-image","url("+$(this).attr("data-background")+")")})
$(window).on('scroll',function(){var scroll=$(window).scrollTop();if(scroll<245){$("#sticky-header").removeClass("sticky-menu");$('.scroll-to-target').removeClass('open');$("#header-top-fixed").removeClass("header-fixed-position")}else{$("#sticky-header").addClass("sticky-menu");$('.scroll-to-target').addClass('open');$("#header-top-fixed").addClass("header-fixed-position")}});if($('.scroll-to-target').length){$(".scroll-to-target").on('click',function(){var target=$(this).attr('data-target');$('html, body').animate({scrollTop:$(target).offset().top},1000)})}
function menu_navigation(){$(".scroll-to-section").on('click',function(){var target=$(this).attr('data-target');$('html, body').animate({scrollTop:$('#'+target).offset().top},1000)})}
function mainSlider(){var BasicSlider=$('.slider-active');BasicSlider.on('init',function(e,slick){var $firstAnimatingElements=$('.single-slider:first-child').find('[data-animation]');doAnimations($firstAnimatingElements)});BasicSlider.on('beforeChange',function(e,slick,currentSlide,nextSlide){var $animatingElements=$('.single-slider[data-slick-index="'+nextSlide+'"]').find('[data-animation]');doAnimations($animatingElements)});BasicSlider.slick({autoplay:!0,autoplaySpeed:10000,dots:!1,fade:!0,arrows:!1,responsive:[{breakpoint:767,settings:{dots:!1,arrows:!1}}]});function doAnimations(elements){var animationEndEvents='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';elements.each(function(){var $this=$(this);var $animationDelay=$this.data('delay');var $animationType='animated '+$this.data('animation');$this.css({'animation-delay':$animationDelay,'-webkit-animation-delay':$animationDelay});$this.addClass($animationType).one(animationEndEvents,function(){$this.removeClass($animationType)})})}}
$('.streaming-two-active').owlCarousel({loop:!0,margin:30,items:3,autoplay:!1,autoplayTimeout:5000,autoplaySpeed:1000,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],nav:!1,dots:!1,responsive:{0:{items:1,center:!1,nav:!1,},575:{items:2,center:!1,nav:!1,},768:{items:3,center:!1,},992:{items:3,center:!1,},1200:{items:3,},}});$('.testimonials-style-1').owlCarousel({loop:!0,margin:30,items:3,autoplay:!1,autoplayTimeout:5000,autoplaySpeed:1000,nav:!1,dots:!0,responsive:{0:{items:1,center:!1,nav:!1,},575:{items:2,center:!1,nav:!1,},768:{items:3,center:!1,},992:{items:3,center:!1,},1200:{items:3,},}})
$('.brand-active').slick({dots:!1,infinite:!0,speed:1000,autoplay:!0,arrows:!1,slidesToShow:7,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:1,infinite:!0,}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:1,arrows:!1,}},{breakpoint:575,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1,}},]});$('.rel-products-active').slick({dots:!1,infinite:!0,speed:1000,autoplay:!0,arrows:!1,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,}},]});$("#streaming-active").flipster({itemContainer:'ul',itemSelector:'li',style:'coverflow',loop:!0,scrollwheel:!1,spacing:-0.5,});$('.jarallax').jarallax({speed:0.2,});$('.progress-item').appear(function(e){$(".progress--bar").each(function(){$(this).find(".progress-fill").animate({width:$(this).attr("data-percentage"),},2000);$(this).find(".progress-number").animate({left:$(this).attr("data-percentage")},{duration:2000,step:function(now,fx){var data=Math.round(now);$(this).find(".percent").html(data+"%")},})})});$("#slider-range").slider({range:!0,min:40,max:600,values:[120,480],slide:function(event,ui){$("#amount").val("$"+ui.values[0]+" - $"+ui.values[1])}});$("#amount").val("$"+$("#slider-range").slider("values",0)+" - $"+$("#slider-range").slider("values",1));$('.qtybutton-box span').on("click",function(){var $input=$(this).parents('.quantity-form').find('input');if($(this).hasClass('minus')){var count=parseFloat($input.val())-1;count=count<1?1:count;if(count<2){$(this).addClass('dis')}else{$(this).removeClass('dis')}
$input.val(count)}else{var count=parseFloat($input.val())+1
$input.val(count);if(count>1){$(this).parents('.quantity-form').find(('.minus')).removeClass('dis')}}
$input.change();return!1});$('.odometer').appear(function(e){var odo=$(".odometer");odo.each(function(){var countNumber=$(this).attr("data-count");$(this).html(countNumber)})});$('.popup-image').magnificPopup({type:'image',gallery:{enabled:!0}});$('.popup-video').magnificPopup({type:'iframe'});function wowAnimation(){var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:!1,live:!0});wow.init()}})(jQuery)


$(".search-channel").keyup(function () {
        (channel = this.value),
            (channel = channel.toUpperCase()),
            $(".allchannels > .col-md-4").hide(),
            $(".allchannels > .col-md-4 > a")
                .filter(":contains(" + channel + ")")
                .parents(".col-md-4")
                .show(),
            (channel = this.value),
            (channel = channel.toUpperCase()),
            $(".channel-country").hide(),
            $(".allchannels > .col-md-4 > a")
                .filter(":contains(" + channel + ")")
                .parents(".allchannels")
                .prev()
                .show();
    });
    $(".categories-box > ul > li").click(function () {
        var continent= $(this).attr("data-continent");
        $(".categories-box > ul > li > a").removeClass("selected");
        $(this).find('a').toggleClass("selected");
        $(".filter-countries-box > .country").addClass("d-none");
        $('.filter-countries-box > .country[data-country='+continent+']').removeClass("d-none");
        $("#active-country").html(continent);
        if ($(window).width() < 606) {
           $(".filter-countries-box").slideToggle();
        }

    });

    $(".filter-countries-box > .country").click(function () {
        $(".filter-countries-box > .country").removeClass("selected");
          $(this).addClass("selected");

        var continent= $(this).attr("data-country");
        var country= $(this).text().toLowerCase();
        $("#active-country").html($(this).text());
        $.getJSON("channels/" + continent + "/" + country + ".json", function (a) {
                for (var n in ($(".chaineShow").empty(), a))
                    (channelist = ""),
                        $(".chaineShow").append('<div class="col col-md-12 col-xs-12 channel-country"><a class="sign">' + n + "</a></div>"),
                        a[n].forEach(function (a) {
                            channelist += '<div class="col col-md-4 col-xs-12"><a href="#">' + a.name + "</a></div>";
                        }),
                        $(".chaineShow").append('<div class="row allchannels">'+channelist+'</div>');
            });
       
        if ($(window).width() < 606) {
           $(".filter-countries-box").slideToggle();
        }
    });
    $(".toggle-countries").click(function () {
        $(".filter-countries-box").slideToggle();

    });