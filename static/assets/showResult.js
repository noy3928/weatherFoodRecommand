function showResult (weather, foods) {
	const $ = document.querySelector.bind(document)
	// Commonly used DOM elements.
	function showFoods(foods) {
		console.log('랜덤으로 뽑힌 음식 재확인', foods)
		const $imgList = $('.menu-one').children
		foods.forEach((food, index) => {
			$imgList[index].setAttribute('src', `./style/image/3x/${food.fileName}.png`)
		})
	}
	function showWeather() {
		// 1. Weather Icon Box

		// 2. Tmp

		// 3. Weather Desc

		// 4. Week Weather
		$weekWeather = $('week-weather')
	}





	showFoods(foods)
	showWeather()
	showTime()
	return true
}

function setUpDefault() {
	$imgList = [...document.getElementsByClassName('menu-one')]
	$imgList.forEach($img => {
		$img.setAttribute('src', './style/image/3x/question.svg')
	})
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
