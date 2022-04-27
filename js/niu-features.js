// JavaScript for General Page Features

// Back To Top Scripting 
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.islandora_starter_theme = {
    attach: function(context, settings) {

      // Custom code here
      $(window).scroll(function () {
          if ($(this).scrollTop() > 50) {
          $('#back-to-top').fadeIn();
          } else {
          $('#back-to-top').fadeOut();
          }
      });
          
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
      $('#back-to-top').tooltip('hide');
      $('body,html').animate({
      scrollTop: 0
      }, 800);
      return false;
      });
      
      //$('#back-to-top').tooltip('show');
      $('#back-to-top').tooltip();
      
      
      //Third Level Nav
      $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
          'use strict';
          event.preventDefault(); 
          event.stopPropagation(); 
          $(this).parent().toggleClass('open');
          $(this).parent().siblings().removeClass('open');
      });

      //Stop double clicks on dropdown
      $('.dropdown-toggle').click(function(e) {
          e.preventDefault();
          e.stopPropagation();
      
          return false;
      });
      
      // This script is needed to toggle the active class on the .panel-body .nav li and highlight them when on that page
      
      $(document).ready(function () {
      var href = window.location.pathname;
      var page = (href.substr(href.lastIndexOf("/")+1, href.length) || 'index.shtml');
      $('a[href="' + page + '"]', '.leftCol .nav li')
          .closest('li')
          .addClass('active')
          .siblings('.active')
              .removeClass();
      });
      
      
      // This script is used to add collapse-chevron-auto-rotate for automatically rotating chevron icons in elements that trigger a collapse
      
      $(function () {
      $('.collapse')
          .on('show.bs.collapse', function () {
              $('[data-toggle="collapse"][href="#' + $(this).attr('id') + '"]').find('.glyphicon-chevron-right')
                  .removeClass('glyphicon-chevron-right')
                  .addClass('glyphicon-chevron-down');
          })
          .on('hide.bs.collapse', function () {
              $('[data-toggle="collapse"][href="#' + $(this).attr('id') + '"]').find('.glyphicon-chevron-down')
                  .removeClass('glyphicon-chevron-down')
                  .addClass('glyphicon-chevron-right');
          });
      });

    }
  };

/*
  let th = document.getElementById("Thailand");
  let ib = document.getElementById("Indonesia");
  let my = document.getElementById("Myanmar");
  let vn = document.getElementById("Vietnam");
  let mn = document.getElementById("Malaysia");
  let ph = document.getElementById("Philippines");
  let kr = document.getElementById("Cambodia");
  let la = document.getElementById("Laos");
  let et = document.getElementById("East Timor");
  let bn = document.getElementById("Brunei");
  let sg = document.getElementById("Singapore");

  console.log(th.id);
  console.log(ib.id);
  console.log(my.id);
  console.log(vn.id);
  console.log(mn.id);
  console.log(ph.id);
  console.log(kr.id);
  console.log(la.id);
  console.log(et.id);
  console.log(bn.id);
  console.log(sg.id);

  window.addEventListener('load', (event) => {
      let countries = document.querySelectorAll('.field--block-content--region-map-links-card div ul li');

      let paths = document.querySelectorAll("#svg1926 path")
     
    
      let i = 0;
      let postIndex = 0;
      let currentCountry = countries[postIndex];
      let sCountry = paths[postIndex];
      let firstCountry = currentCountry.dataset.country;
      console.log(countries);
      console.log(sCountry);
      console.log(firstCountry);

      //const listItemDname = listItemC.dataset.exampleName;

      countries.forEach(function(el) {

          el.addEventListener("mouseenter", function() {
            //var countryCode = el.getAttribute("data-country");
            let countryCode = el.dataset.country;
            //var svgCountry = document.querySelector("#" + countryCode);
            let svgCountry = document.getElementById(countryCode);
            el.classList.add("on");
            svgCountry.classList.add("on");
          });
        
          el.addEventListener("mouseleave", function() {
            var countryCode = el.getAttribute("data-country");
            var svgCountry = document.querySelector("#" + countryCode);
            el.classList.remove("on");
            svgCountry.classList.remove("on");
          });
        
        });

    });
*/
//let wordStates = document.context.querySelector('.field--block-content--region-map-links-card div ul li[data-country="Thailand"]');

//console.log(wordStates.id);

  //let country = document.getElementById("Thailand");
  //console.log(country.id);


// Find all the <a> elements in the list
var items = document.querySelectorAll("UL.list-of-countries LI A");

// To each of them, add an event handler for when the mouse enters its box, and also when it leaves
items.forEach(item => {
item.addEventListener("mouseover", itemMouseOver);
item.addEventListener("mouseout", itemMouseOut);
});

function itemMouseOver(evt) {
// Get the value of the data-area-id attribute for the <a> we are entering
var id = evt.target.dataset['country'];
// Use it to find the right circle, and add the class "active" to its class attaribute
document.getElementById(id).classList.add("active");
}

function itemMouseOut(evt) {
// Get the value of the data-area-id attribute for the <a> we are entering
var id = evt.target.dataset['country'];
// Use it to find the right circle, and remove the class "active" from its class attaribute
document.getElementById(id).classList.remove("active");
}


// Find all the <circle> elements in the list
var path = document.querySelectorAll("svg path");

// To each of them, add an event handler for when the mouse enters its box, and also when it leaves
path.forEach(item => {
item.addEventListener("mouseover", pathMouseOver);
item.addEventListener("mouseout", pathMouseOut);
});

function pathMouseOver(evt) {
// Get the id of the circle
var id = evt.target.id;
// Use it to find the right list item, the one with data-area-id="<id>", and add the class "active" to its class attribute
document.querySelector('.list-of-countries-item a[data-country="'+id+'"]').parentElement.classList.add("active");
}

function pathMouseOut(evt) {
// Get the id of the circle
var id = evt.target.id;
// Use it to find the right list item, the one with data-area-id="<id>", and remove the class "active" from its class attribute
document.querySelector('.list-of-countries-item a[data-country="'+id+'"]').parentElement.classList.remove("active");
}

})(jQuery, Drupal);