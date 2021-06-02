function getCurrentLocation() {
  const API_KEY = "d0a4465b7d153b885b025b667926fff2";
  const COORDS = "coords";

  let weatherLcInfo = {
    tmp: "",
    plc: "",
    condition: "",
  };

  function getWeather(lat, lon) {
    // const weather = document.querySelector(".city-name");
    // const cityName = document.querySelector(".");

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        weatherLcInfo.tmp = String(json.main.temp).slice(0, -1);
        weatherLcInfo.plc = json.name + ", " + json.sys.country;
        weatherLcInfo.condition = json.weather["0"].id;

        console.log(
          weatherLcInfo.condition,
          weatherLcInfo.plc,
          weatherLcInfo.tmp
        );
      });
  }

  function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  }

  function handleGeoSucees(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
  }

  function handleGeoError() {
    console.log("Cant access geo location");
  }

  function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucees, handleGeoError);
  }

  function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
      askForCoords();
    } else {
      const parseCoords = JSON.parse(loadedCords);
      getWeather(parseCoords.latitude, parseCoords.longitude);
    }
  }
  loadCoords();

  showResult(weatherLcInfo.plc);
}

getCurrentLocation();
