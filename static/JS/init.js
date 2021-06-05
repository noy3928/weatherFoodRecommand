async function init() {
	const consoleTitleStyle = 'background: #222; color: #bada55; font-size: xx-large;'

	await console.log('%c페이지가 로드되었습니다.', consoleTitleStyle)
	showTime()

	const $form = document.getElementsByClassName('search')[0]
	$form.addEventListener('submit', () => {
		console.log('%c입력값 기반의 검색을 시작합니다.', consoleTitleStyle)
	})
	$form.addEventListener('submit', search)

	await console.log('%c초기 화면 검색을 시작합니다.', consoleTitleStyle)
	await search()

}
init()
