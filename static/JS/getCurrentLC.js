function getCurrentCoords() {
  const COORDS = "coords";

  function loadCoords() {
    const loadedCords =
      JSON.parse(localStorage.getItem(COORDS)) ??
      (function () {
        return navigator.geolocation.getCurrentPosition(
          (position) => {
            // handleGeoSucees
            const { latitude, longitude } = position.coords;
            const coordsObj = { latitude, longitude };
            localStorage.setItem(COORDS, JSON.stringify(coordsObj));
            console.log("test", coordsObj);
            return coordsObj;
          },
          () => {
            // handleGeoError
            console.error("Can't access geo location.");
          }
        );
      })();
    return loadedCords;
  }
  return loadCoords();
}

function geturl(place, food) {
  const features =
    "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
  // let plc = $("#searchbar").val();
  // let url = `https://www.google.com/maps/search/${place}+${food}/@37.5037201,127.0150586,14z/data=!3m1!4b1`;
  let url = `https://www.google.com/maps/search/%EC%A2%85%EB%A1%9C+%EB%8F%88%EA%B9%8C%EC%8A%A4/@37.5697172,126.9857489,17z/data=!3m1!4b1`;
  let other = window.open(url, "_blank", features);
}
