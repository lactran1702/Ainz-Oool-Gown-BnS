var pRaid={init:function(){this.slickTab()},slickTab:function(){var s=$(".tab-wrap"),i=$(".tab-nav");s.slick({infinite:!1,slidesToShow:1,slidesToScroll:1,arrows:!1,asNavFor:i}),i.slick({infinite:!1,slidesToShow:4,slidesToScroll:1,asNavFor:s,dots:!1,focusOnSelect:!0,responsive:[{breakpoint:767,settings:{arrows:!0,slidesToScroll:1,focusOnSelect:!0,slidesToShow:1}}]})}};