var pRaid = {
  init: function(){
    this.slickTab();
  },

  slickTab: function() {

    var _this = $('.tab-wrap');
    var slickFilter = $('.tab-nav');

    _this.slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: slickFilter
    });

    slickFilter.slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: _this,
      dots: false,
      focusOnSelect: true,
      responsive: [{
        breakpoint: 767,
        settings: {
          arrows: true,
          slidesToScroll: 1,
          focusOnSelect: true,
          slidesToShow: 1
        }
      }]
    });


  },
}

