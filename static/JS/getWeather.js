function getWeather(coords) {
	const API_KEY = "d0a4465b7d153b885b025b667926fff2"
	const url = 'https://api.openweathermap.org/data/2.5/weather'
	const query = `?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metirc`
	return fetch(url+query)
	.then(response => response.json())
	.then(json => {
		const temp = String(json.main.temp).slice(0, -1)
		const condition = json.weather['0'].id
		return {
			temp, condition
		}
	})
}
