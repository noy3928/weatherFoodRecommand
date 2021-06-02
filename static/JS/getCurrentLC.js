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

    createKakaoMap(lat, lon);

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

        // 현재 위치의 위도와 경도로 한글로된 지명 불러오기.
        $.ajax({
          method: "GET",
          url: `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lat}&y=${lon}&input_coord=WGS84`,
          // url: `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=127.423084873712&y=37.0789561558879&input_coord=WGS84`,
          data: {},
          headers: {
            Authorization: "KakaoAK 01c0cbd4fde85e34af273552852f8ebe",
          },
        }).done(function (msg) {
          console.log(msg);
        });

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

function getLatLonbyKeyword() {
  //키워드 입력시 위치 정보 불러오는 api
  const searchLatLon = function () {
    $.ajax({
      method: "GET",
      // url: `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lat}&y=${lon}&input_coord=WGS84`,
      url: "https://dapi.kakao.com/v2/local/search/keyword.json?y=37.514322572335935&x=127.06283102249932&radius=20000",
      data: { query: $("#searchbar").val() },
      headers: {
        Authorization: "KakaoAK 01c0cbd4fde85e34af273552852f8ebe",
      },
    }).done(function (msg) {
      console.log(msg);
      // console.log($("#searchbar").val());
    });
  };

  const searchForm = document.querySelector("form.search");
  searchForm.addEventListener("submit", searchLatLon);
}

function createKakaoMap(lat, lon) {
  let mapContainer = document.querySelector(".kakao-map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
      mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    };

  // 지도를 생성한다
  var map = new kakao.maps.Map(mapContainer, mapOption);

  // 지도에 마커를 생성하고 표시한다
  var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(lat, lon), // 마커의 좌표
    map: map, // 마커를 표시할 지도 객체
  });
}

getLatLonbyKeyword();
getCurrentLocation();
