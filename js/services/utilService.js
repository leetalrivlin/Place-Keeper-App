'use strict';

function onChangePageClrs(body) {
    let userPrefs = _loadUserPrefsFromStorage();
    if (!userPrefs) {
      console.log('there isnt anything in storage');
      return;
    }
    changePageColors(body, userPrefs.bgc, userPrefs.txtClr);
  }

function changePageColors(body, bgc, txtClr) {
  body.style.backgroundColor = bgc;
  body.style.color = txtClr;
}
