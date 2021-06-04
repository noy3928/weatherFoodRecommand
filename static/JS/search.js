async function search(e) {
  console.log("function search starts");

  const coords =
    e?.type === "submit" ? await korToCoords() : getCurrentCoords();
  console.log("현재 좌표입니다.", coords);
  await createKakaoMap(coords.latitude, coords.longitude);
  const weather = await getWeather(coords);
  console.log("현재 날씨입니다.", weather);

  const foods = loadFoods();
  console.log("음식 db입니다.");
  console.table(foods);

  console.log("function search ends");
}
