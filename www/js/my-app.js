
$( document ).on( "mobileinit", function() {
    $.mobile.loader.prototype.options.disabled = true;
});

$(document).ready(function() {

    $.mobile.loading( "hide" );
    $.mobile.loading().hide();
    // Bind an event to window.onhashchange that, when the hash changes, gets the
    // hash and adds the class "selected" to any matching nav link.
    $( window ).hashchange(function() {
        var hash = location.hash.replace( /^#/, "" );

        // Set the page title based on the hash.
        //document.title = "The hash is " + ( hash.replace( /^#/, "" ) || "blank" ) + ".";

        if(hash != ''){
            var tabIndex = $(".menu-container ul li").eq(hash);
            var whatTab = tabIndex.index();

            $(".myslider").css({
                //left: howFar + "px"
                transition: "all 0.3s",
                width: tabIndex.width() + "px" ,
                left: tabIndex.position().left + "px"
            });

            $('.menu-container').stop().animate({
                scrollLeft: tabIndex.position().left - 50
            }, 300);

            go_to_main(whatTab);
        }

    });
    // Since the event is only triggered when the hash changes, we need to trigger
    // the event now, to handle the hash the page may have loaded with.
    //$( window ).hashchange();

});


// Sidebar toggle
//
// -------------------
$(document).ready(function() {


    var overlay = $('.sidebar-overlay');

    $('.sidebar-toggle').on('click', function() {
        var sidebar = $('#sidebar');
        sidebar.toggleClass('open');
        if ((sidebar.hasClass('sidebar-fixed-left') || sidebar.hasClass('sidebar-fixed-right')) && sidebar.hasClass('open')) {
            overlay.addClass('active');
        } else {
            overlay.removeClass('active');
        }
    });

    overlay.on('click', function() {
        $(this).removeClass('active');
        $('#sidebar').removeClass('open');
    });
});

// Sidebar constructor
//
// -------------------
$(document).ready(function() {

    var sidebar = $('#sidebar');
    var sidebarHeader = $('#sidebar .sidebar-header');
    var sidebarImg = sidebarHeader.css('background-image');
    var toggleButtons = $('.sidebar-toggle');

    // Hide toggle buttons on default position
    toggleButtons.css('display', 'none');
    $('body').css('display', 'table');


    // Sidebar position
    $('#sidebar-position').change(function() {
        var value = $( this ).val();
        sidebar.removeClass('sidebar-fixed-left sidebar-fixed-right sidebar-stacked').addClass(value).addClass('open');
        if (value == 'sidebar-fixed-left' || value == 'sidebar-fixed-right') {
            $('.sidebar-overlay').addClass('active');
        }
        // Show toggle buttons
        if (value != '') {
            toggleButtons.css('display', 'initial');
            $('body').css('display', 'initial');
        } else {
            // Hide toggle buttons
            toggleButtons.css('display', 'none');
            $('body').css('display', 'table');
        }
    });

    // Sidebar theme
    $('#sidebar-theme').change(function() {
        var value = $( this ).val();
        sidebar.removeClass('sidebar-default sidebar-inverse sidebar-colored sidebar-colored-inverse').addClass(value)
    });

    // Header cover
    $('#sidebar-header').change(function() {
        var value = $(this).val();

        $('.sidebar-header').removeClass('header-cover').addClass(value);

        if (value == 'header-cover') {
            sidebarHeader.css('background-image', sidebarImg)
        } else {
            sidebarHeader.css('background-image', '')
        }
    });
});

/**
 * Created by Kupletsky Sergey on 08.09.14.
 *
 * Add JQuery animation to bootstrap dropdown elements.
 */

(function($) {
    var dropdown = $('.dropdown');

    // Add slidedown animation to dropdown
    dropdown.on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideup animation to dropdown
    dropdown.on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
})(jQuery);


(function(removeClass) {

    jQuery.fn.removeClass = function( value ) {
        if ( value && typeof value.test === "function" ) {
            for ( var i = 0, l = this.length; i < l; i++ ) {
                var elem = this[i];
                if ( elem.nodeType === 1 && elem.className ) {
                    var classNames = elem.className.split( /\s+/ );

                    for ( var n = classNames.length; n--; ) {
                        if ( value.test(classNames[n]) ) {
                            classNames.splice(n, 1);
                        }
                    }
                    elem.className = jQuery.trim( classNames.join(" ") );
                }
            }
        } else {
            removeClass.call(this, value);
        }
        return this;
    }
})(jQuery.fn.removeClass);



$(document).ready(function() {


    $(".menu-container ul li").click(function(e) {

        // make sure we cannot click the slider
        if ($(this).hasClass('myslider')) {
            return;
        }

        /* Add the slider movement */

        // what tab was pressed
        var whatTab = $(this).index();

        // Work out how far the slider needs to go
        //var howFar = 160 * whatTab;

        /*$(".myslider").css({
            //left: howFar + "px"
            transition: "all 0.3s",
            width: $(this).width() + "px" ,
            left: $(this).position().left + "px"
        });
        $('.menu-container').stop().animate({
            scrollLeft: $(this).position().left - 50
        }, 300);
        go_to_main(whatTab);*/
    });


    /*
     $('.tab').click(function () {
     $('.tabopen').removeClass('tabopen');
     $(this).addClass('tabopen');
     });

     $("#tab1").hover(
     function () {
     $('#tab1').animate({
     'background-color': '#d81f16'
     },200);   $('#tab1').animate({
     'background-color': '#e62117'
     },200);
     },
     function () {
     $('#tab1').animate({
     'background-color': '#e62117'
     },500);
     }
     );

     $("#tab2").hover(
     function () {
     $('#tab2').animate({
     'background-color': '#d81f16'
     },200);   $('#tab2').animate({
     'background-color': '#e62117'
     },200);
     },
     function () {
     $('#tab2').animate({
     'background-color': '#e62117'
     },500);
     }
     );

     $("#tab3").hover(function () {
     $('#tab3').animate({
     'background-color': '#d81f16'
     },200);   $('#tab3').animate({
     'background-color': '#e62117'
     },200);
     },
     function () {
     $('#tab3').animate({
     'background-color': '#e62117'
     },500);
     });

     $("#tab4").hover(function () {
     $('#tab4').animate({
     'background-color': '#d81f16'
     },200);   $('#tab4').animate({
     'background-color': '#e62117'
     },200);
     },
     function () {
     $('#tab4').animate({
     'background-color': '#e62117'
     },500);
     });


     $("#settings1").hover(function () {
     $('#settings1').stop(true).animate({
     'background-color': '#dddddd'
     });
     },
     function () {
     $('#settings1').stop(true).animate({
     'background-color': '#FFFFFF'
     });
     });
     */
});


var rtime;
var timeout = false;
var delta = 200;
$(window).resize(function() {

    //to initialize main swiper
    swiper5.slideTo(0);
    $(".myslider").css({
        transition: "all 0.3s",
        width: $(".menu-container ul li").eq(swiper2.activeIndex).width() + "px" ,
        left: $(".menu-container ul li").eq(swiper2.activeIndex).position().left + "px"
    });

    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});

//function to perform after resize window
function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        //to reinitialize main swiper
        swiper5.slideTo(1);
    }
}

// Initialize your app
var myApp = new Framework7({
    material: true,
    materialRipple: true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    //dynamicNavbar: true,
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

var offset = 0;
var offset_current = 0;
var scroller = 0;
var soffset = 0;
var clone_set = 0;
var state = '1';
var slide_main_state = '0';
var slide_main_state_new ='0';
var st_active = 0;


// Hide Header on on scroll down
var didScroll;
var upscroll;
var lastUpscroll;
var lastScrollTop = 0;
var delta2 = 0;
var temp_menu_top = 0;
var menuTop = 0;
var del2 = 0;
menuTop = $(".slide_main_wrapper .swiper-slide").eq(2).scrollTop();
//var navbarHeight = $('header').outerHeight();


//MAIN DISPLAY SWIPER
var swiper2 = myApp.swiper('.s2', { /* Options here */
    slideDuplicateClass : 'my-slide-duplicate',
    watchSlidesProgress : false,
    speed: 300,
    initialSlide: 0,
    noSwipingClass: 'stop-swiping2',
    resistanceRatio: .00000000000001,
    onProgress: function(swiper2, progress){

        //$("#tracker").html(swiper.slides[2].progress);
        /*if(swiper2.slides[0].progress < 0){
         state = '1';
         swiper2.params.followFinger = false;
         swiper2.params.watchSlidesProgress = false;
         slide_to_main(0);
         }

         if(swiper2.slides[4].progress > 0){
         state = '1';
         swiper2.params.followFinger = false;
         swiper2.params.watchSlidesProgress = false;
         slide_to_main(4);
         }*/


        //var cur_width = $(".menu-container ul li").eq(slide_main_state).width();
        $(".menu-container ul li span.active").removeClass("active");
        $(".menu-container ul li.button span").eq(swiper2.activeIndex).addClass("active");

        var cur_width = $(".myslider").width();
        if(slide_main_state > 0){
            var prev_width = $(".menu-container ul li").eq(slide_main_state-1).width();
            var prev_pos = $(".menu-container ul li").eq(slide_main_state-1).position().left ;
        }
        else{
            var prev_width = 0;
        }

        if(slide_main_state < (tabs_count-1)){
            var next_width = $(".menu-container ul li").eq(slide_main_state+1).width();
            var next_pos = $(".menu-container ul li").eq(slide_main_state+1).position().left ;
        }
        else{
            var next_width = 0;
        }


        if(swiper2.slides[slide_main_state].progress < 0 && swiper2.slides[slide_main_state].progress != 1){
            if(prev_width != 0){
                var temp_offset = prev_width - cur_width;
                $(".myslider").css({
                    //left: howFar + "px"
                    transition: "all 0s",
                    width: cur_width + temp_offset*Math.abs(swiper2.slides[slide_main_state].progress) + "px",
                    left: prev_pos + prev_width*(1-Math.abs(swiper2.slides[slide_main_state].progress)) + "px"
                });

                $('.menu-container').stop().animate({
                    scrollLeft: prev_pos + prev_width*(1-Math.abs(swiper2.slides[slide_main_state].progress)) - 50
                }, 0);


            }
        }
        else{
            if(next_width != 0  && swiper2.slides[slide_main_state].progress != 1  && swiper2.slides[slide_main_state].progress != 0){
                var temp_offset = next_width - cur_width;
                $(".myslider").css({
                    //left: howFar + "px"
                    transition: "all 0s",
                    width: cur_width + temp_offset*Math.abs(swiper2.slides[slide_main_state].progress) + "px",
                    left: next_pos - next_width*(1-Math.abs(swiper2.slides[slide_main_state].progress)) + "px"
                });

                $('.menu-container').stop().animate({
                    scrollLeft: next_pos - next_width*(1-Math.abs(swiper2.slides[slide_main_state].progress)) - 50
                }, 0);

            }
        }


    }//end onProgress
});

/*
 setInterval(function() {
 if (didScroll) {
 hasScrolled();
 didScroll = false;
 }
 }, 50);
 */

function hasScrolled() {

    var st = $(".slide_main_wrapper .swiper-slide-active").scrollTop();
    temp_menu_top = $(".s8 .swiper-wrapper .swiper-slide").eq(0).offset().top;
    var del = lastScrollTop - st;
    var sum = temp_menu_top + del;
    if(sum > 0){ sum=0;}
    if(sum< - 51){sum=-51;}
    //var st = $(this).scrollTop();
    // Make sure they scroll more than delta

    if(Math.abs(lastScrollTop - st) <= delta2)
     return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.

    if(temp_menu_top <= 0 && temp_menu_top >= -51){
        swiper8.setWrapperTranslate(sum);
    }
    /*
     if(temp_menu_top < -51){
     swiper8.setWrapperTranslate(-51);
     }
     if(temp_menu_top > 0){
     swiper8.setWrapperTranslate(0);
     }
     */

    if (st > lastScrollTop){
        // Scroll Down
        upscroll = 0;
        if(temp_menu_top >= -51)
        {
            /*$(".s2").removeClass("stop-swiping3");*/
        }
        else{
            //swiper8.slideTo(1);
        }
        //alert("down scroll");
    }
    else {
        // Scroll Up
        upscroll = 1;
        if(upscroll == lastUpscroll && temp_menu_top < 0)
        {
        }
        else
        {
            /*$(".s2").removeClass("stop-swiping3");*/
        }
        //alert("up scroll");
    }

    lastScrollTop = st;
    lastUpscroll = upscroll;
}

function hasScrolled_frame(del2) {

    temp_menu_top = $(".s8 .swiper-wrapper .swiper-slide").eq(0).offset().top;
    var sum = temp_menu_top + del2/5;
    if(sum > 0){ sum=0;}
    if(sum< - 51){sum=-51;}
    //var st = $(this).scrollTop();
    // Make sure they scroll more than delta

    if(Math.abs(del2) <= delta2)
     return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.

    if(temp_menu_top <= 0 && temp_menu_top >= -51){
        swiper8.setWrapperTranslate(sum);
    }

}

window.addEventListener('message',function(event) {
    //alert(event.data);
    hasScrolled_frame(event.data);
},false);

$(".slide_main_wrapper .swiper-slide").scroll(function(event){
    didScroll = true;
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
    //alert("scrolling");
});


//TOP MENU EXTRA
var swiper8 = myApp.swiper('.s8', { /* Options here */
    initialSlide: 0,
    direction: 'vertical',
    slidesPerView: 'auto',
    noSwipingClass: 'stop-swiping3',
    resistanceRatio: .00000000000001,
    watchSlidesProgress : true,
    followFinger: true,
    onProgress: function(swiper8, progress){
        $("#prog").html(swiper8.slides[0].progress);
        $("#prog2").html(swiper8.slides[1].progress);
        if(swiper8.slides[0].progress < 0){
            var wh = $(window).height();
            var hwrapper = $(".slide_main_wrapper .swiper-slide").eq(swiper2.activeIndex).prop("scrollHeight");
            if(hwrapper > wh){
                //swiper8.params.followFinger = false;
                //swiper8.params.watchSlidesProgress = false;
                $(".s2").addClass("stop-swiping3");
            }
        }

        if(swiper8.slides[1].progress > 0){
            var wh = $(window).height();
            var hwrapper = $(".slide_main_wrapper .swiper-slide").eq(swiper2.activeIndex).prop("scrollHeight");
            if(hwrapper > wh){
                //swiper8.params.followFinger = false;
                //swiper8.params.watchSlidesProgress = false;
                $(".s2").addClass("stop-swiping3");
            }
        }
    }//end onProgress
});

var swiper7 = myApp.swiper('.s7', { /* Options here */
    initialSlide: 0,
    direction: 'vertical',
    slidesPerView: 'auto',
    noSwipingClass: 'stop-swiping7',
    resistanceRatio: .00000000000001,
    watchSlidesProgress : true,
    followFinger: true,
    onProgress: function(swiper7, progress){

    }//end onProgress
});

var swiper5 = myApp.swiper('.s5', { /* Options here */
    initialSlide: 0,
    slidesPerView: 'auto',
    noSwipingClass: 'stop-swiping5',
    watchSlidesProgress : true,
    speed: 300,
    onProgress: function(swiper5, progress){

        var menu_icon = document.getElementById('menu_icon');
        //$("#tracker").html(swiper.slides[2].progress);
        if(swiper5.slides[0].progress < 0){
            state = '0';
            swiper5.params.followFinger = false;
            swiper5.params.watchSlidesProgress = false;
            slide_to_menu(0);
        }

        if(swiper5.slides[1].progress > 0){
            state = '1';
            swiper5.params.followFinger = false;
            swiper5.params.watchSlidesProgress = false;
            slide_to_menu(1);
        }

        if(state == '0'){
            /*for (var i = 0; i < swiper2.slides.length; i++){
             swiper2.slides[i].style.opacity = 0.25+0.75*swiper.slides[0].progress;
             }
             swiper3.slides[0].style.opacity = 0.25+0.75*swiper.slides[0].progress;*/
            //var opa = 0.25+0.75*swiper.slides[0].progress;
                        /********* ROTATE MENU ************/
            es = menu_icon.style;
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'rotate('+180*swiper5.slides[0].progress+'deg)';
            $(".overlay").show();
            var opa = 0.5-0.5*swiper5.slides[0].progress;
            $(".overlay").css('opacity', opa);

            /*if(clone_set < 1){
                var clone_text = $(".slide_main_wrapper .swiper-slide-active").html();
                var clone_menu = $(".menu-container").html();
                var clone_tab = $(".top_tab-wrapper").html();
                $(".clone-slide").html(clone_text);
                $(".menu-clone").html(clone_menu);
                $(".clone-top-tab").html(clone_tab);
                var s = $(".slide_main_wrapper .swiper-slide-active").scrollTop();
                $(".clone-wrapper").show();
                $(".clone-slide").scrollTop(s);

                var clone_offset = $(".top_tab").offset().top + 51;

                $(".clone-wrapper").css({
                    top: clone_offset + "px"
                });
                $(".menu-clone").css({
                    top: clone_offset + "px"
                });
                clone_set=1;
            }*/

            //$(".slide_main_wrapper").css('opacity', '0');
            //$(".slide_main_wrapper2").css('opacity', '0');
        }
        if(state == '1'){
            /*for (var j = 0; j < swiper2.slides.length; j++){
             swiper2.slides[j].style.opacity = 0.25+0.75*swiper.slides[0].progress;
             }
             swiper3.slides[0].style.opacity = 0.25+0.75*swiper.slides[0].progress;*/
            //var opa = 0.25+0.75*swiper.slides[0].progress;
                        /********* ROTATE MENU ************/
            es = menu_icon.style;
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'rotate('+180*swiper5.slides[0].progress+'deg)';
            $(".overlay").show();
            var opa = 0.5-0.5*swiper5.slides[0].progress;
            $(".overlay").css('opacity', opa);

            /*if(clone_set < 1){
                var clone_text = $(".slide_main_wrapper .swiper-slide-active").html();
                var clone_menu = $(".menu-container").html();
                var clone_tab = $(".top_tab-wrapper").html();
                $(".clone-slide").html(clone_text);
                $(".menu-clone").html(clone_menu);
                $(".clone-top-tab").html(clone_tab);
                var s = $(".slide_main_wrapper .swiper-slide-active").scrollTop();
                $(".clone-wrapper").show();
                $(".clone-slide").scrollTop(s);

                var clone_offset = $(".top_tab").offset().top + 51;

                $(".clone-wrapper").css({
                    top: clone_offset + "px"
                });
                $(".menu-clone").css({
                    top: clone_offset + "px"
                });

                clone_set=1;
            }*/

            //$(".slide_main_wrapper").css('opacity', '0');
            //$(".slide_main_wrapper2").css('opacity', '0');
            //$(".tabs").css('z-index', '0');
            //$(".menu-container").css('z-index', '1');
        }
    }
});


$('#btn1').click(function(){
    //swiper8.setWrapperTranslate(-500);
    //alert($(".s8 .swiper-wrapper .swiper-slide").eq(0).offset().top);
});

//swiper6.params.control = {swiper5,swipe7};

var swiper4 = myApp.swiper('.s4', { /* Options here */
    initialSlide: 0
});

//MAIN DISPLAY SWIPER CLONE
var swiper3 = myApp.swiper('.s3', { /* Options here */
    initialSlide: 0,
    direction: 'vertical',
});

var tabs_count = 3; //put number of tabs here

var swiper6 = myApp.swiper('.s6', { /* Options here */
    watchSlidesProgress : false,
    speed: 300,
    initialSlide: 0,
    noSwipingClass: 'stop-swiping6',
    resistanceRatio: .00000000000001
});

//MAIN DISPLAY SWIPER CONTAINER
var swiper = myApp.swiper('.s1',{
    speed: 150,
    initialSlide: 0,
    noSwipingClass: 'stop-swiping',
    resistanceRatio: .00000000000001
});

swiper8.on('onTransitionEnd', function () {

    swiper8.params.followFinger = true;
    swiper8.params.watchSlidesProgress = true;
    var wh = $(window).height();
    var hwrapper = $(".slide_main_wrapper .swiper-slide").eq(swiper2.activeIndex).prop("scrollHeight");
    if(hwrapper > wh){
        $(".s2").addClass("stop-swiping3");
    }
    swiper2.reInit();
    swiper8.reInit();
});

swiper2.on('onTouchStart', function () {

    swiper2.params.followFinger = true;
    swiper2.params.watchSlidesProgress = true;
});


swiper2.on('onTouchEnd', function () {

    if($(".s8 .swiper-wrapper .swiper-slide").eq(0).offset().top >= -25){
        swiper8.slideTo(0);
    }
    else{
        swiper8.slideTo(1);
    }

    if(slide_main_state == "0"){
        $(".myslider").css({
            //left: howFar + "px"
            transition: "all 0.3s",
            left: "0px"
        });

    }
    if(slide_main_state == "4"){
        $(".myslider").css({
            //left: howFar + "px"
            transition: "all 0.3s",
            left: $(".menu-container ul li").eq(4).position().left
        });
    }

    //swiper2.params.followFinger = false;
    //swiper2.params.watchSlidesProgress = false;   
});

swiper8.on('onTouchMove', function () {
    //menuTop = $(".s8 .swiper-wrapper .swiper-slide").eq(0).offset().top;
});

swiper2.on('onTransitionStart', function (){

    location.href='#'+swiper2.activeIndex;

    /*$(".myslider").css({
        //left: howFar + "px"
        transition: "all 0.3s",
        width: $(".menu-container ul li").eq(swiper2.activeIndex).width() + "px" ,
        left: $(".menu-container ul li").eq(swiper2.activeIndex).position().left + "px"
    });
    $('.menu-container').stop().animate({
        scrollLeft: $(".menu-container ul li").eq(swiper2.activeIndex).position().left - 50
    }, 300);*/
    $(".s2").removeClass("stop-swiping3");
    swiper2.params.followFinger = false;
    swiper2.params.watchSlidesProgress = false;

    $(".menu-container ul li span.active").removeClass("active");
    $(".menu-container ul li.button span").eq(swiper2.activeIndex).addClass("active");

});

swiper7.on('onTransitionEnd', function () {
    var playerindex = swiper7.activeIndex;
    if(playerindex == "1"){
        $(".s6").removeClass("playerActive");
    }
    else{
        $(".s6").addClass("playerActive");
    }

});

swiper7.on('onTouchStart', function () {
    var playerindex = swiper7.activeIndex;
    if(playerindex == "1"){
    }
    else{
        $(".s6").removeClass("playerActive");
    }
});

swiper7.on('onTouchEnd', function () {
    var playerOffset = $("#mediaOffset").offset().top;
    if(playerOffset > -1){
        //$(".s6").addClass("playerActive");
        swiper7.slideTo(1);
    }
    //alert(playerOffset);
});

swiper2.on('onTransitionEnd', function () {

    $(".s2").removeClass("stop-swiping3");
    swiper5.params.followFinger = true;
    swiper5.params.watchSlidesProgress = true;
    swiper2.params.followFinger = true;
    swiper2.params.watchSlidesProgress = true;
    slide_main_state = swiper2.activeIndex;

    //$(".menu-container ul li").eq(swiper2.activeIndex).click();
    //$('.tabopen').removeClass('tabopen');
    //$("#tab"+slide_main_state).addClass('tabopen');
});

swiper5.on('onTouchStart', function () {
    //disableNext();
    $(".s7-wrapper").css('z-index', '6');
});

swiper5.on('onTouchEnd', function () {
    //alert(swiper5.activeIndex);
    //swiper5.params.followFinger = true;
    //swiper5.params.watchSlidesProgress = true;
    if(swiper5.activeIndex == '0'){
        //swiper5.slideTo(0);
    }
    else{
        //swiper5.slideTo(1);
        //$(".slide_main_wrapper").css('opacity', '1');
        //$(".slide_main_wrapper2").css('opacity', '1');
    }
});

swiper5.on('onTransitionEnd', function () {
    //alert(swiper5.activeIndex);
    clone_set=0;
    swiper5.params.followFinger = true;
    swiper5.params.watchSlidesProgress = true;

    if(swiper5.activeIndex == '0'){
        state = "0";
        $(".s7-wrapper").css('z-index', '6');
        $(".slide_main_wrapper").removeClass("stop-swiping5");
        $(".slide_main_wrapper").addClass("stop-swiping2");
        //$(".tabs").css('z-index', '0');
        //$(".menu-container").css('z-index', '1');
        enableNext();

    }
    else{
        state = '1';
        $(".s7-wrapper").css('z-index', '0');
        //$(".clone-wrapper").hide();
        $(".overlay").hide();
        $(".slide_main_wrapper").css('opacity', '1');
        $(".slide_main_wrapper2").css('opacity', '1');
        $(".slide_main_wrapper").removeClass("stop-swiping2");
        $(".slide_main_wrapper").addClass("stop-swiping5");
        $(".slide_main_wrapper").addClass("stop-swiping");
        //$(".tabs").css('z-index', '9');
        $(".menu-container").css('z-index', '9');
        disableNext();
    }
    var wh = $(window).height();
    var hwrapper = $(".slide_main_wrapper .swiper-slide").eq(swiper2.activeIndex).prop("scrollHeight");
    if(hwrapper > wh){
        $(".s2").addClass("stop-swiping3");
    }
    swiper2.reInit();
    swiper8.reInit();
});

function change_state(){
    slide_main_state = swiper2.activeIndex;
}

function disableNext(){
    //setTimeout(function(){

    if(swiper5.activeIndex == '1'){
        //swiper5.params.allowSwipeToNext = false;
        //swiper5.params.allowSwipeToPrev = true;
        swiper5.params.followFinger = true;
        swiper5.params.watchSlidesProgress = true;
        //And reinit
        swiper5.reInit();
    }
    if(swiper5.activeIndex == '2'){
        swiper5.slideTo(1);
        //swiper5.params.allowSwipeToNext = false;
        //swiper5.params.allowSwipeToPrev = true;
        swiper5.params.followFinger = true;
        swiper5.params.watchSlidesProgress = true;
        //And reinit
        swiper5.reInit();
    }
    if(swiper5.activeIndex == '3'){
        swiper5.slideTo(1);
        //swiper5.params.allowSwipeToNext = false;
        //swiper5.params.allowSwipeToPrev = true;
        swiper5.params.followFinger = true;
        swiper5.params.watchSlidesProgress = true;
        //And reinit
        swiper5.reInit();
    }

    //}, 20);
}

function enableNext(){

    //setTimeout(function(){
    //swiper5.params.allowSwipeToNext = true;
    //swiper5.params.allowSwipeToPrev = false;
    swiper5.params.followFinger = true;
    swiper5.params.watchSlidesProgress = true;
    //And reinit
    swiper5.reInit();
    //}, 20);
}

function slide_to_menu(slide_num){
    swiper5.params.followFinger = true;
    swiper5.params.watchSlidesProgress = true;
    swiper5.reInit();

    /*setTimeout(function(){
     swiper.slideTo(slide);
     }, 350);*/
    swiper5.slideTo(slide);
}

function slide_to_main(slide_num){
    swiper2.params.followFinger = true;
    swiper2.params.watchSlidesProgress = true;
    swiper2.reInit();

    /*setTimeout(function(){
     swiper.slideTo(slide);
     }, 350);*/
    swiper2.slideTo(slide);
}

function go_to_main(num){
    swiper2.slideTo(num);
}
