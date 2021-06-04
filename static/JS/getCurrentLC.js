// function getCurrentCoords() {
//   const COORDS = "coords";

//   function loadCoords() {
//     const loadedCords =
//       JSON.parse(localStorage.getItem(COORDS)) ??
//       (function () {
//         return navigator.geolocation.getCurrentPosition(
//           (position) => {
//             // handleGeoSucees
//             const { latitude, longitude } = position.coords;
//             const coordsObj = { latitude, longitude };
//             localStorage.setItem(COORDS, JSON.stringify(coordsObj));
//             return coordsObj;
//           },
//           () => {
//             // handleGeoError
//             console.error("Can't access geo location.");
//           }
//         );
//       })();
//     return loadedCords;
//   }
//   return loadCoords();
// }

async function getCurrentCoords() {
  if (navigator.geolocation) {
    await navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let coordsObj = { latitude, longitude };
      createKakaoMap(latitude, longitude);
      return coordsObj;
    });
  } else {
    console.log("위치정보가 지원되지 않는 브라우저입니다.");
  }
}

// window.onload = getCurrentCoords(); 이미 search() 에서 불러옴

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
      // if (msg.documents[0].x !== undefined) {
      //   let x = msg.documents[0].x;
      //   let y = msg.documents[0].y;
      //   if (x !== null && y !== null) {
      //     panTo(y, x);
      //   }
      //   console.log(y, x);
      // } else {
      //   alert("조금 더 상세히 입력해주시겠어요?");
      // }
    });
  };

  const searchForm = document.querySelector("form.search");
  searchForm.addEventListener("submit", searchLatLon);
}

getLatLonbyKeyword();

function geturl(place, food) {
  const features =
    "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
  // let plc = $("#searchbar").val();
  // let url = `https://www.google.com/maps/search/${place}+${food}/@37.5037201,127.0150586,14z/data=!3m1!4b1`;
  let url = `https://www.google.com/maps/search/%EC%A2%85%EB%A1%9C+%EB%8F%88%EA%B9%8C%EC%8A%A4/@37.5697172,126.9857489,17z/data=!3m1!4b1`;
  let other = window.open(url, "_blank", features);
}
