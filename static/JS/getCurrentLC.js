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

// window.onload = getCurrentCoords(); 이미 search() 에서 불러옴

// function getLatLonbyKeyword() {
//   //키워드 입력시 위치 정보 불러오는 api
//   const searchLatLon = function () {
//     $.ajax({
//       method: "GET",
//       // url: `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lat}&y=${lon}&input_coord=WGS84`,
//       url: "https://dapi.kakao.com/v2/local/search/keyword.json?y=37.514322572335935&x=127.06283102249932&radius=20000",
//       data: { query: $("#searchbar").val() },
//       headers: {
//         Authorization: "KakaoAK 01c0cbd4fde85e34af273552852f8ebe",
//       },
//     }).done(function (msg) {
//       console.log(msg);
//       if (msg.documents[0].x !== undefined) {
//         let x = msg.documents[0].x;
//         let y = msg.documents[0].y;
//         if (x !== null && y !== null) {
//           panTo(y, x);
//         }
//         console.log(y, x);
//       } else {
//         alert("조금 더 상세히 입력해주시겠어요?");
//       }
//     });
//   };

//   const searchForm = document.querySelector("form.search");
//   searchForm.addEventListener("submit", searchLatLon);
// }

// getLatLonbyKeyword();
