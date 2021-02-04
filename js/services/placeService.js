'use strict';

const PLACES = 'places';
var gPlaces;

function _createPlace(placeName, lat, lng) {
  let places = _loadPlacesFromStorage();
  if (!places || !places.length) {
    places = [];
  }
  let place = {
    id: getRandomId(),
    placeName,
    lat,
    lng,
  };
  places.push(place);
  gPlaces = places;
  _savePlacesToStorage();
  renderPlaces();
  return gPlaces;
}

function deletePlace(placeId) {
  let placeIdx = gPlaces.findIndex(place => {
    return placeId === place.id;
  });
  gPlaces.splice(placeIdx, 1);
  _savePlacesToStorage();
}

function _savePlacesToStorage() {
  saveToStorage(PLACES, gPlaces);
}

function _loadPlacesFromStorage() {
  var places = loadFromStorage(PLACES);
  return places;
}
