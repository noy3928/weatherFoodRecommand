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
