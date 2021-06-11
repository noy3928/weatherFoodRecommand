let map; // 생성함수와 이동함수에서 사용하기 위한 전역 변수.

//지도 생성함수
function createKakaoMap(latitude, longitude) {
  let mapContainer = document.querySelector(".kakao-map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
      mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    };

  // 지도를 생성한다
  map = new kakao.maps.Map(mapContainer, mapOption);

  // 지도에 마커를 생성하고 표시한다
  var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(latitude, longitude), // 마커의 좌표
    map: map, // 마커를 표시할 지도 객체
  });
}

//지도 이동함수
function panTo(coords) {
  const x = coords.x;
  const y = coords.y;
  // let mapContainer = document.querySelector(".kakao-map"), // 지도를 표시할 div
  //   mapOption = {
  //     center: new kakao.maps.LatLng(x, y), // 지도의 중심좌표
  //     level: 3, // 지도의 확대 레벨
  //     mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
  //   };

  // // 지도를 생성한다
  // var map = new kakao.maps.Map(mapContainer, mapOption);

  var moveLatLon = new kakao.maps.LatLng(y, x);
  console.log(moveLatLon);
  // 지도 중심을 부드럽게 이동시킵니다
  // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
  map.panTo(moveLatLon);
}

function moveTocurrentLc() {
  let lat = 0;
  let lng = 0;
  if (navigator.geolocation) {
    // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
    });
  } else {
    alert("GPS를 지원하지 않습니다");
  }

  function moveTo(x, y) {
    // let mapContainer = document.querySelector(".kakao-map"), // 지도를 표시할 div
    //   mapOption = {
    //     center: new kakao.maps.LatLng(x, y), // 지도의 중심좌표
    //     level: 3, // 지도의 확대 레벨
    //     mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    //   };

    // // 지도를 생성한다
    // var map = new kakao.maps.Map(mapContainer, mapOption);

    var moveLatLon = new kakao.maps.LatLng(y, x);
    console.log(moveLatLon);
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);
  }

  moveTo(lat, lng);
}
