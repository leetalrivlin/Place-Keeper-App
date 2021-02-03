'use strict';

function onInitMap() {
  let elBody = document.querySelector('body');
  onChangePageClrs(elBody);
  initMap(lat, lng);
}

function initMap(lat, lng) {
  if (!lat) lat = 32.0749831;
  if (!lng) lat = 34.9120554;
  var elMap = document.querySelector('#map');
  var options = {
    center: { lat, lng },
    zoom: 16,
  };

  var map = new google.maps.Map(elMap, options);

  var marker = new google.maps.Marker({
    position: { lat, lng },
    map,
    title: 'Hello World!',
  });
}
