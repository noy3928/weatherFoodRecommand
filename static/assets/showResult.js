function showResult (cityName, weather, foods) {

	// Commonly used DOM elements.
	const $menus = document.querySelector('.menus')
	function clearPreviousResults() {
		$menus.innerHTML = ''
	}

	function showCity() {
		const $imgBox = document.querySelector('.img_box')
		const $cityImage = document.querySelector('.city-image')
		const $cityName = document.querySelector('.city-name')
	}

	function showWeather() {

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
	try {
		clearPreviousResults()
		showCity()
		showWeather()
		showFoods()
		return true
	}
	catch (e) {
		console.error(e)
		return false
	}
}
