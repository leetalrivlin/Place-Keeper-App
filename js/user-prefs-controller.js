'use strict';

function onInitPrefs() {
    let elBody = document.querySelector('body');
    onChangePageClrs(elBody);
}

function showAge(ageVal) {
document.querySelector('.ageVal').innerText = ageVal;
}

function onSavePrefs(ev) {
  ev.preventDefault();
  let elBody = document.querySelector('body');
  let elUserBgc = document.querySelector('[name=user-bgc]').value;
  let elUserTxtClr = document.querySelector('[name=user-txt-color]').value;
  let elUserBday = document.querySelector('[name=user-bday]').value;
  
  createPrefs(elUserBgc, elUserTxtClr, elUserBday);

  changePageColors(elBody, elUserBgc, elUserTxtClr);
}
