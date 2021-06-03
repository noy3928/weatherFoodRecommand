"use strict";
const features =
  "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
// let plc = $("#searchbar").val();
function geturl(place, food) {
  // let url = `https://www.google.com/maps/search/${place}+${food}/@37.5037201,127.0150586,14z/data=!3m1!4b1`;
  let url = `https://www.google.com/maps/search/%EC%A2%85%EB%A1%9C+%EB%8F%88%EA%B9%8C%EC%8A%A4/@37.5697172,126.9857489,17z/data=!3m1!4b1`;
  let other = window.open(url, "_blank", features);
}
