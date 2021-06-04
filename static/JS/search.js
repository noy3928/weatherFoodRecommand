async function search(e) {
	console.log('function search starts')
	//지도 생성
	const coords = e?.type === 'submit'
	? await korToCoords()
	: getCurrentCoords()

	console.log('현재 좌표입니다.', coords)
	//지도 이동
	const weather = await getWeather(coords)
	console.log('현재 날씨입니다.', weather)

	console.log('function search ends')
}
