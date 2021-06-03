async function search(e) {
	console.log('function search starts')
	console.log(e)

	const coords = e?.type === 'submit'
	? await korToCoords()
	: getCurrentCoords()

	console.log(coords)
	console.log('function search ends')
}
