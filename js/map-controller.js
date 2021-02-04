'use strict';

function onInitMap() {
  let elBody = document.querySelector('body');
  onChangePageClrs(elBody);
  initMap();
  renderPlaces();
}

function mapReady() {
  console.log('The map is ready');
}

function initMap(lat, lng) {
  if (!lat) lat = 29.55805;
  if (!lng) lng = 34.94821;
  let elMap = document.querySelector('#map');
  let options = {
    center: { lat, lng },
    zoom: 15,
  };
  var map = new google.maps.Map(elMap, options);

  var marker = new google.maps.Marker({
    position: { lat, lng },
    map,
    title: 'Hello World!',
  });

  google.maps.event.addListener(map, 'click', function (event) {
    let lat = event.latLng.lat();
    let lng = event.latLng.lng();

    console.log('lat', lat, 'lng', lng);
    onClickMap(lat, lng);
  });
}

function placeMarkerAndPanTo(latLng, map) {
  new google.maps.Marker({
    position: latLng,
    map: map,
  });
  map.panTo(latLng);
  console.log('latLng', latLng);
}

function getCurrLocation() {
  getPosition();
}

function getPosition() {
  if (!navigator.geolocation) {
    alert('HTML5 Geolocation is not supported in your browser.');
    return;
  }

  // One shot position getting or continus watch
  navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
  // navigator.geolocation.watchPosition(showLocation, handleLocationError);
}

function showLocation(position) {
  console.log(position);
  //   document.getElementById('latitude').innerHTML = position.coords.latitude;
  //   document.getElementById('longitude').innerHTML = position.coords.longitude;
  //   document.getElementById('accuracy').innerHTML = position.coords.accuracy;

  //   var date = new Date(position.timestamp);
  //   document.getElementById('timestamp').innerHTML =
  //     date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  initMap(position.coords.latitude, position.coords.longitude);
  // map.setCenter(new google.maps.LatLng( position.coords.latitude, position.coords.longitude ));
}

function handleLocationError(error) {
  var locationError = document.getElementById('locationError');

  switch (error.code) {
    case 0:
      locationError.innerHTML =
        'There was an error while retrieving your location: ' + error.message;
      break;
    case 1:
      locationError.innerHTML =
        "The user didn't allow this page to retrieve a location.";
      break;
    case 2:
      locationError.innerHTML =
        'The browser was unable to determine your location: ' + error.message;
      break;
    case 3:
      locationError.innerHTML =
        'The browser timed out before retrieving the location.';
      break;
  }
}

function onClickMap(lat, lng) {
  var placeName = prompt('Enter place name');
  _createPlace(placeName, lat, lng);
}

function renderPlaces() {
  let places = _loadPlacesFromStorage();
  if (!places || !places.length) return;

  let strHTML = places
    .map((place) => {
      return `<li class="list-group-item list-group-item-primary mb-2 fw-bold text-dark">
                ${place.placeName}<br />
                <span class="text-muted fw-lighter">(Coords: ${place.lat}, ${place.lng})</span>
                <button class="btn btn-dark float-end" type="button" onclick="onDelPlace(${place.id})">Delete</button>
                </li>`;
    })
    .join('');
  document.querySelector('.list-group').innerHTML = strHTML;
}

function onDelPlace(placeId) {
  deletePlace(placeId);
  renderPlaces();
}
