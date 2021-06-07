function coordsToKor(coords) {
  const url = "https://dapi.kakao.com/v2/local/geo/coord2address.json";
  const query = `?x=127.423084873712&y=37.0789561558879&input_coord=WGS84`;
  return new Promise((resolve, reject) => {
    fetch(url + query, {
      headers: {
        Authorization: "KakaoAK 01c0cbd4fde85e34af273552852f8ebe",
      },
    }).then((response) => {
      console.log(response);
    });
  });
}
