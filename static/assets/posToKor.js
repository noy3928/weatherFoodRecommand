function posToKor(latitude, longtitude) {
	console.log(longtitude, latitude)
	const url = 'http://api.vworld.kr/req/address'
	const service = 'service=address'
	const request = 'request=getAddress'
	const version = 'version=2.0'
	const crs = 'crs=epsg:4326'
	const point = `point=${longtitude},${latitude}`
	const type = 'type=both'
	const zipcode = 'zipcode=false'
	const simple = 'simple=false'
	const authKey = 'key=0CE9F6B1-5C54-3F7F-B416-F6B3A26D10AB'
	const query = `?${service}&${request}&${version}&${crs}&${point}&${type}&${zipcode}&${simple}&${authKey}`

	fetch(url + query)
	.then(response => {
		console.log(response)
		return response.json()
	})
	.then(data => {
		console.log(data)
	})
}
