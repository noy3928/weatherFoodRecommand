(async function () {
	// Initiating recommend function

	// 1. Initializes food database
	const foods = await fetch('./static/assets/foodData.json')
	.then((response) => response.json())
	.then((data) => data)

	// 2. Filter
	const condition = function (food) {
		return true //temporary
	}

	// 3. RandomSelector
	const selectRandom = function (arr, n = 3) {
		const result = []
		if (arr.length < n) {
			throw 'Number of required random foods exceeds number of stored foods'
		}
		const used = Array(arr.length).fill(false)
		while (result.length < 3) {
			const randomIndex = Math.floor(Math.random() * arr.length)
			if (used[randomIndex]) continue
			used[randomIndex] = true
			result.push(arr[randomIndex])
		}
		return result
	}

  // 2. Creates recommend function
  const recommend = await (function () {
    /*
		previous search results should be saved in localStorage
		*/

    return function () {
      const location = document.querySelector(".city-name").textContent;
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

  // 3. attach to HTML
  const searchForm = document.querySelector("form.search");
  searchForm.addEventListener("submit", recommend);
})();
