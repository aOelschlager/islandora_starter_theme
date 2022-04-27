// slideout menu js

(function($, Drupal) {

    'use strict';
  
    Drupal.behaviors.islandora_starter_theme = {
      attach: function(context, settings) {
  
        // Custom code here
        //SlideNav
        $('[data-toggle="offcanvas"]').on('click', function() {
            $('.offcanvas-collapse').toggleClass('open');
            $('.slide_elements').toggleClass('open');
            $('.mainnav-wrapper').toggleClass('slide-open');
            $('.home-mainnav-wrapper').toggleClass('slide-open');
        });
      }
    };
  
  })(jQuery, Drupal);