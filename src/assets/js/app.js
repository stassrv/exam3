import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import './lib/slick.min.js';

$(document).foundation();

let bestSlider = $('#best');

	bestSlider.slick({
		infinite: false,
		dots: true,
		prevArrow: bestSlider.find('[data-prev]'),
		nextArrow: bestSlider.find('[data-next]')
	});

//Add map
function initMap() {
    //Create map and asign to this baMap var
    let mapCenter = {
        lat: 40.679931,
        lng: -73.899009
    };
    let baMap = new google.maps.Map(document.getElementById('ba-map'), {
    center: mapCenter,
    zoom: 12,
  });

  let cities = {
    br: {lat: 40.679931,lng: -73.899009}
  };
  let mapMarkers = {};

  for(let city in cities){
    
    let marker = new google.maps.Marker(
        {
            position: cities[city],
             map: baMap,
             icon: 'img/2-layers.svg'	
          }
      );
  }
  // The marker, positioned at Uluru
  
  baMap.setCenter(mapCenter);

  $('#city-select').on('change', function (e) {
      baMap.panTo(cities[this.value]);
  })
}
$(document).ready(function (e){
    initMap();
});

(function($) {
$(function() {

  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},800);
    return false;
  });

});
})(jQuery);
