"use strict";

function getURL(place, food) {
  window.open(
    `https://www.google.com/maps/search/${place}+${food}/@37.5037227,127.0150586,14z/data=!3m1!4b1`,
    _blank,
    (channelmode = yes | no | 1 | 0),
    false
  );
}
