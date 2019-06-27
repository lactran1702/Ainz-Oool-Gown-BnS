var pHome = {

  isSlide: false,

  init: function(){

  TweenMax.to($('h2'), 0.3, {
    opacity: 0,
    ease: Quart.easeInOut,
    onComplete: function() {
      $('h2').addClass('reveal-text');
      TweenMax.to($('h2'), 0.3, {
        opacity: 1,
        ease: Quart.easeInOut
      })
    }
  });


  pHome.galleryInit();
  pHome.eventInit();

  $(window).on('resize', pHome.galleryInit);
  $(window).on('resize', pHome.eventInit);

  },

  galleryInit: function(){

    $('.gallery-wrap .item-wrap').slick({
      dots: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      easing: 'linear',
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ] 
    });

    $('.gallery-wrap .item-wrap').on('beforeChange', function() {
      pHome.isSlide = true;
    });

    $('.gallery-wrap .item-wrap').on('afterChange', function() {
      pHome.isSlide = false;
    });

    $('.gallery-wrap .item').on('click', function(event) {
      event.preventDefault();

      var imgURL = $(this).find('img').attr('src');

      if (!pHome.isSlide) {
        TweenMax.to($('.item-banner'), 0.3, {
          autoAlpha: 0,
          ease: Quart.easeInOut,
          onComplete: function() {
            $('.item-banner img').attr('src', imgURL);
            TweenMax.to($('.item-banner'), 0.3, {
              autoAlpha: 1,
              ease: Quart.easeIn
            })
          }
        });
      }
      
      // TweenMax.to($('.item-banner'), 0.3, {
      //   autoAlpha: 0,
      //   ease: Quart.easeInOut,
      //   onComplete: function() {
      //     $('.item-banner img').attr('src', imgURL);
      //     TweenMax.to($('.item-banner'), 0.3, {
      //       autoAlpha: 1,
      //       ease: Quart.easeInOut
      //     })
      //   }
      // });

    });
  },

  eventInit: function(){
    $(".nano").nanoScroller();
    $('.closePopup').click(function() {
      $('#popup').fadeOut('slow');
    });
  },

}

