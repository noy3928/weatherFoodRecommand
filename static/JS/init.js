async function init() {
	const consoleTitleStyle = 'background: #222; color: #bada55; font-size: xx-large;'
	await console.log('%c페이지가 로드되었습니다.', consoleTitleStyle)
	const $form = document.getElementsByClassName('search')[0].addEventListener('submit', search)
	search()

}
init()
