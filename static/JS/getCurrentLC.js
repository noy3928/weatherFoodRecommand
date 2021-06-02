function getCurrentCoords() {
	const COORDS = "coords"

	function loadCoords() {
		const loadedCords = JSON.parse(localStorage.getItem(COORDS)) ??	(function() {
			return navigator.geolocation.getCurrentPosition(position => { // handleGeoSucees
				const {latitude, longitude} = position.coords
				const coordsObj = {latitude, longitude}
				localStorage.setItem(COORDS, JSON.stringify(coordsObj))
				return coordsObj
			},
			() => { // handleGeoError
				console.error("Can't access geo location.")
			})
		})()
		return loadedCords
	}
	return loadCoords()
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
