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
