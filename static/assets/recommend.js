(async function () {

	// Initiate recommend function

	// 1. initialize food database
	const foods = await fetch('assets/foodData.json')
	.then(response => response.json())
	.then(data => data)

	// 2. create recommend function
	const recommend = await (function() {
		const previousResults = []

		return function () {
			const location = document.querySelector('.city-name').innerText
			const weather = ''//getWeather(location)
			console.log('검색 값이 입력되었습니다.')
			console.log('검색의 입력값은 다음과 같습니다.', document.querySelector('#searchbar').value)
			console.log('현재 불러온 음식 db의 내용입니다.')
			console.table(foods)
			console.log('검색된 입력값의 날씨 정보입니다.')
			console.table(weather)

			function condition(food) {
				return true
			}

			const selectedFoods = foods.filter(condition)
			console.log('음식 db 중 날씨 조건에 해당하는 항목입니다.')
			console.table(selectedFoods)
		}
	})()

	// 3. attach to HTML
	const searchForm = document.querySelector('form.search')
	searchForm.addEventListener('submit', recommend)


	console.log('추천 시스템이 준비되었습니다.')
})()
