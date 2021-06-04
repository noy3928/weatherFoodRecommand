function sol() {
  let result = "";
  // 37.56720278147306, 126.97825990897105
  // 현재 위치의 위도와 경도로 한글로된 지명 불러오기.
  $.ajax({
    method: "GET",
    // url: `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lat}&y=${lon}&input_coord=WGS84`,
    url: "https://dapi.kakao.com/v2/local/geo/coord2address.json?x=126.97825990897105&y=37.56720278147306&input_coord=WGS84",
    data: {},
    headers: {
      Authorization: "KakaoAK 01c0cbd4fde85e34af273552852f8ebe",
    },
  }).done(function (msg) {
    console.log("카카오에서 불러온 정보", msg);
    result =
      msg.documents[0].address.region_1depth_name +
      msg.documents[0].address.region_2depth_name;
  });

  console.log(weatherLcInfo.condition, weatherLcInfo.plc, weatherLcInfo.tmp);

  return result;
}

console.log(sol());
