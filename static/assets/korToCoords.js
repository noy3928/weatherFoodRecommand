async function korToCoords() {
  //키워드 입력시 위치 정보 불러오는 api
  const inputValue = document.getElementById("searchbar").value;
  const result = await $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v2/local/search/keyword.json?y=37.514322572335935&x=127.06283102249932&radius=20000",
    data: { query: inputValue },
    headers: {
      Authorization: "KakaoAK 01c0cbd4fde85e34af273552852f8ebe",
    },
  });
  const firstResult = result["documents"][0];
  const { x, y } = firstResult;
  const coords = { x, y };
  panTo(coords);
  return {
    latitude: Number(firstResult["y"]),
    longitude: Number(firstResult["x"]),
  };
}
