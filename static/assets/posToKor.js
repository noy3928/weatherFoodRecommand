function sol() {
	// 현재 위치의 위도와 경도로 한글로된 지명 불러오기.

	return new Promise((resolve, reject) => {
		let result = $.ajax({
			method: "GET",
			// url: `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`,
			url: `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=127.423084873712&y=37.0789561558879&input_coord=WGS84`,
			data: {},
			headers: {
				Authorization: "KakaoAK 01c0cbd4fde85e34af273552852f8ebe",
			},
		}).done(function (msg) {
			return msg.documents[0].address.region_1depth_name + msg.documents[0].address.region_2depth_name
		})
		resolve(result)
	}
})
