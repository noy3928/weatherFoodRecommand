function showResult (cityName, weather, foods) {
		function showCity() {

		}
		function showWeather() {

		}
		function showFoods() {
			const result = new DocumentFragment()
			for (let i = 0; i < 3; i++) {
				const menuDiv = document.createElement('div')
				menuDiv.setAttribute('class', 'menu')
				result.appendChild(menuDiv)
			}
			const menusDiv = document.querySelector('.menus')
			console.log(menusDiv)
			document.querySelector('.menus').appendChild(result)

		}
		try {
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
