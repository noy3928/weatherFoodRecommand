async function search(e) {
  console.log("function search starts");
  console.log("음식 이미지를 기본 이미지(물음표) 로 설정합니다.");
  // setUpDefault()
  const coords =
    e?.type === "submit" ? await korToCoords() : getCurrentCoords();
  await console.log("현재 좌표입니다.", coords);
  await getWeatherInfo(coords.latitude, coords.longitude);
  await createKakaoMap(coords.latitude, coords.longitude);

  const place = await sol(coords)
  await console.log('현재 위치입니다.' place)
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
  await changeFoodName(place, 0);

  await console.log("function search ends");
}
