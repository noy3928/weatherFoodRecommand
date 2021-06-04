function showResult (weather, foods) {
	const $ = document.querySelector.bind(document)
	// Commonly used DOM elements.
	function showFoods(foods) {
		const result = new DocumentFragment()
		foods.forEach(food => {
			const $img = document.createElement('img')
			$img.setAttribute('class', 'menu-img')
			$img.setAttribute('src', `./style/image/3x/${food.fileName}.png`)
			result.appendChild($img)
		})
		$('.menu').appendChild(result)
	}
	function showWeather() {
		// 1. Weather Icon Box

		// 2. Tmp

		// 3. Weather Desc

		// 4. Week Weather
		$weekWeather = $('week-weather')
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

	showFoods(foods)
	showWeather()
	showTime()
	return true
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
