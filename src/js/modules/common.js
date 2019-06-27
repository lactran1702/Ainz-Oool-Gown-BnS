// console.log("I'm common JS! I'm ready now!");

PRELOADER.show();
// $('#popup').fadeIn(3200);
// POPUP.hide("aog_event"); 

setTimeout(function() {
PRELOADER.hide();
// POPUP.show("aog_event"); 
// $('#popup').fadeIn(600);
$('#popup').show();
$('header ,main').removeClass('loading-screen');
$(window).scrollTop(0);
}, 3000);


$('.js-toggleMenu').on('click', function(event) {
  event.preventDefault();

  
  /* Act on the event */
  if (!$(this).hasClass('checked')) {
    $(this).addClass('checked');
    TweenMax.to($('.menu-content'), 0.3, {
      autoAlpha: 1,
      top: 'auto',
      y: 0,
      height: 'auto',
      ease: Quart.easeOut
    });
    // $('header').css({
    //   zIndex: 4
    // });

  } else {
    
    $(this).removeClass('checked');
    TweenMax.to($('.menu-content'), 0.3, {
      autoAlpha: 0,
      top: 'auto',
      y: -300,
      height: 0,
      ease: Quart.easeOut
    });
    // $('header').css({
      // zIndex: 0
    // });
  }

});

$('.hasChild').on('click', function(event) {
  // event.preventDefault();
  /* Act on the event */

  if (!$(this).hasClass('rotate-bg')) {
    $(this).addClass('rotate-bg');
    $(this).find('> a').addClass('active');
    $('.deep-lvl').show('fast');
  } else {
    $(this).removeClass('rotate-bg');
    $(this).find('> a').removeClass('active');
    $('.deep-lvl').hide('fast');
  }
});

// $('#table01').contents().find('head link').remove();
// $('#table01').contents().find('style').remove();

