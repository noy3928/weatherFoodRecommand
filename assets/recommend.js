(async function () {
  // Initiating recommend function

  // 1. Initializes food database
  const foods = await fetch("./assets/foodData.json")
    .then((response) => response.json())
    .then((data) => data);

  // 2. Filter
  const condition = function (food) {
    return true;
  };

  function selectRandom(arr, n = 3) {
    return;
  }

  // 2. Creates recommend function
  const recommend = await (function () {
    /*
		previous search results should be saved in localStorage
		*/

    return function () {
      //   const location = document.querySelector(".city-name").textContent;
      const weather = ""; //getWeather(location)
      console.log("검색이 감지되었습니다.");
      console.log(
        "검색의 입력값은 다음과 같습니다.",
        document.querySelector("#searchbar").value
      );
      console.log("현재 불러온 음식 db의 내용입니다.");
      console.table(foods);
      console.log("검색된 입력값의 날씨 정보입니다.");
      console.table(weather);

      const filteredFoods = foods.filter(condition);
      console.log("조건에 맞는 음식 목록입니다.");
      console.table(filteredFoods);

      // selects default three elements from the array
      const result = selectRandom(filteredFoods, undefined);
      console.log("결과입니다.");
      console.table(result);
    };
  })();

  // 3. attach to HTML
  const searchForm = document.querySelector("form.search");
  searchForm.addEventListener("submit", recommend);
})();
