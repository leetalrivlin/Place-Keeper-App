'use strict';
const USER_PREFS = 'user-prefs';
var gPrefs;

function createPrefs(bgc, txtClr, bDay) {
  gPrefs = createUserPrefs(bgc, txtClr, bDay);
  _saveUserPrefsToStorage();
  return gPrefs;
}

function createUserPrefs(bgc, txtClr, bDay) {
  var userPrefs = {
    bgc,
    txtClr,
    bDay,
  };
  return userPrefs;
}

function _saveUserPrefsToStorage() {
  saveToStorage(USER_PREFS, gPrefs);
}

function _loadUserPrefsFromStorage() {
  var res = loadFromStorage(USER_PREFS);
  return res;
}
