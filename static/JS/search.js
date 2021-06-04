async function search(e) {
  console.log("function search starts");

  const coords =
    e?.type === "submit" ? await korToCoords() : getCurrentCoords();
  await console.log("현재 좌표입니다.", coords);
  await getWeatherInfo(coords.latitude, coords.longitude);
  await createKakaoMap(coords.latitude, coords.longitude);
  const weather = await getWeather(coords);
  await console.log("현재 날씨입니다.", weather);

  const foods = await loadFoods();
  await console.log("음식 db입니다.");
  await console.table(foods);

  const selectedFoods = await selectRandom(foods, 3);
  await console.log("랜덤으로 뽑힌 음식입니다.");
  await console.table(selectedFoods);

  await console.log("showResult 함수를 호출합니다.");
  await showResult(weather, selectedFoods);

  await console.log("function search ends");
}
