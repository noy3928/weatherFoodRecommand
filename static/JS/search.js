async function search(e) {
  console.log("function search starts");
  // setUpDefault()
  const coords =
    e?.type === "submit" ? await korToCoords() : getCurrentCoords();
  await getWeatherInfo(coords.latitude, coords.longitude);
  await createKakaoMap(coords.latitude, coords.longitude);

  const place = await sol(coords)

  const weather = await getWeather(coords);

  const foods = await loadFoods();

  const selectedFoods = await selectRandom(foods, 3);


  await showResult(weather, selectedFoods, place);
  await changeFoodName(0);

  await console.log("function search ends");
}
