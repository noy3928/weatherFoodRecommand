(async function () {
  const $ = document.querySelector.bind(document);
  const consoleTitleStyle =
    "background: #222; color: #bada55; font-size: xx-large;";
  // Initiating recommend function

  // 1. Initializes food database
  const foods = await fetch("./static/assets/foodData.json")
    .then((response) => response.json())
    .then((data) => data);

  // 2. Filter
  const condition = function (food) {
    return true; //temporary
  };

  // 3. RandomSelector
  const selectRandom = function (arr, n = 3) {
    const result = [];
    if (arr.length < n) {
      throw "Number of required random foods exceeds number of stored foods";
    }
    const used = Array(arr.length).fill(false);
    while (result.length < 3) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      if (used[randomIndex]) continue;
      used[randomIndex] = true;
      result.push(arr[randomIndex]);
    }
    return result;
  };

  // 4. Creates recommend function
  const recommend = await (function () {
    /*
		console.log('%c이전 검색 결과 안내입니다.', consoleTitleStyle)
		const previousSearchResult = localStorage.getItem('previousSearchResult')
		if (previousSearchResult) {
			console.log('이전 검색 기록 있음')
		}
		else {
			console.log('이전 검색 기록 없음')
		}
		*/

    return function (event) {
      // console.clear()
      console.log("%c추천 함수가 호출되었습니다.", consoleTitleStyle);

      let coords = {};
      if (!event) {
        // 1. If page is loaded, automatically shows info of current location. (by window.onload)
        console.log(
          "페이지 초기 화면입니다. 현재 위치를 바탕으로 날씨를 보여주고 음식을 추천합니다."
        );
        coords = getCurrentCoords();
        console.log("현재 좌표입니다.", coords);
      } else {
        // 2. If a search is submitted, shows info according to the search result. (by searchForm)
        console.log(
          "검색결과 화면입니다. 검색된 위치를 바탕으로 날씨를 보여주고 음식을 추천합니다."
        );
        const $searchbar = $("#searchbar");
        console.log("검색의 입력값은 다음과 같습니다.", $searchbar.value);
        //cords = 검색값의 좌표결과
      }

      getWeather(coords).then((weather) => {
        console.log("현재 날씨입니다.", weather);
      });

      const location = $(".city-name").textContent;

      const weather = "";
      //getWeather(location)

      console.log("현재 불러온 음식 db의 내용입니다.");
      console.table(foods);

      const filteredFoods = foods.filter(condition);
      console.log("조건에 맞는 음식 목록입니다.");
      console.table(filteredFoods);

      // Selects default three elements from the array
      try {
        const result = selectRandom(filteredFoods, 3); //수정해야함
        console.log("결과입니다.");
        console.table(result);
        showResult();
      } catch (e) {
        console.error(e);
      }
    };
  })();

  // 5. attach to HTML
  const searchForm = $("form.search");
  searchForm.addEventListener("submit", recommend);
  window.onload = recommend();
})();
