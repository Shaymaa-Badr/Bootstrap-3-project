$(function () {
    'use strict';
    $('.carousel').carousel({
        interval:6000
    });
    
    // show color option when click on cog icon
    $('.cog-check').click(function () {
        $('.option-box').animate({left: '0px'},1000)
       
    });

    // Change colors of option box
    var colorLI = $('.colors-options ul li'),
         // Caching scroll top 
         scrollButton = $('#scroll-top');

    colorLI
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#909").end()
    .eq(2).css("backgroundColor","#0895d1").end()
    .eq(3).css("backgroundColor","rgb(44, 102, 47)");

     colorLI.click(function () {
         $("link[href*='theme']").attr("href",$(this).attr("data-value"));
     });

         $(window).scroll(function (){
             $(this).scrollTop() >= 700 ? scrollButton.show():scrollButton.hide();
         });
        // click button to top 
        scrollButton.click(function (){
            $('html, body').animate({scrollTop : 0},1000)
        });
    });
     // loading window
$(window).on('load', function () {
    'use strict';
    $('.loading-overlay .spinner').fadeOut(2000, function () {
        $('body').css('overflow', 'auto');
        $(this).parent().fadeOut(1000, function (){
            $(this).remove();
        });
    });
             // short code for loading
             //$('.loading-overlay, .loading-overlay.spinner').fadeOut(2000);
});
