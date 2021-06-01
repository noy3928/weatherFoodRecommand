function showResult (cityName, weather, foods) {
	// 안녕하세요!
	//네  저도 안녕하세요
	// 저도 반가워요
	const $ = document.querySelector.bind(document)
	// Commonly used DOM elements.
	const $menus = document.querySelector('.menus')
	function clearPreviousResults() {
		//$menus.innerHTML = ''
	}

	function showCity(cityName) {
		//const $imgBox = document.querySelector('.img_box')
		//const $cityImage = document.querySelector('.city-image')
		const $cityName = document.querySelector('.city-name')
		cityName = 'New York, USA' // Temporary
		$cityName.textContent = cityName
	}

	function showWeather() {
		// 1. Weather Icon Box

		// 2. Tmp

		// 3. Weather Desc

		// 4. Week Weather
		$weekWeather = $('week-weather')
	}

	function showFoods(foods) {
		const result = new DocumentFragment()
		for (let i = 0; i < 3; i++) {
			const $menu = document.createElement('div')
			$menu.setAttribute('class', 'menu')
			result.appendChild($menu)
		}

		// Returns empty divs if there's no foods to show. Else continue.
		if (foods === undefined) $menus.appendChild(result)

	}

	function showTime() {
		const $dayBox = document.querySelector('.day-box')
		const $day = $('.day')

		const daysKR = ['일', '월', '화', '수', '목', '금', '토']
		const now = new Date()
		const day = daysKR[now.getDay()] + '요일'
		const hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
		const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
		const time = `${hours}:${minutes}`

		$day.textContent = `${day}, ${time}`
	}

	try {
		clearPreviousResults()
		showCity()
		showWeather()
		//showFoods()
		showTime()
		return true
	}
	catch (e) {
		console.error(e)
		return false
	}
}
/*
weather api test
function test() {
	const url = 'http://api.openweathermap.org/data/2.5/weather'
	const latitude = 37.583328
	const longtitude = 127.0
	const key = 'b0641107a6d807bd0a87e9c615a68c99'
	apiUrl = `${url}?lat=${latitude}&lon=${longtitude}&appid=${key}&units=metric`
	fetch(apiUrl)
	.then(response => response.json())
	.then(data => {
		console.table(data)
		return data
	})
}
*/
