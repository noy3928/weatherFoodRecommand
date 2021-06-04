function loadFoods() {
	return fetch("./static/assets/foodData.json")
	.then((response) => response.json())
	.then((data) => data);
}
