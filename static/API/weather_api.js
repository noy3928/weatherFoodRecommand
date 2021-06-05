function getWeatherInfo(lat, lon) {
  function currentWeatherInfo(latitude, longitude) {
    var apiurl =
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=b0641107a6d807bd0a87e9c615a68c99&units=metric";
    $.ajax({
      type: "GET",
      url: apiurl,
      data: {},
      success: function (response) {
        let temp = response["main"]["temp"];
        let id = response["weather"][0]["id"];

        const weatherInfo = { temp, id };
        console.log("현재기상", weatherInfo.id);
        showCurrentTmpCon(weatherInfo);
        return weatherInfo;
      },
    });
  }

  function weatherSevenDay(latitude, longitude) {
    var apiurl =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&exclude=current,minutely,hourly,alerts&appid=62c98c080227e940379a9e1989d33035";
    $.ajax({
      type: "GET",
      url: apiurl,
      data: {},
      success: function (response) {
        day1 = response["daily"][1]["weather"][0]["id"];
        day2 = response["daily"][2]["weather"][0]["id"];
        day3 = response["daily"][3]["weather"][0]["id"];
        day4 = response["daily"][4]["weather"][0]["id"];
        day5 = response["daily"][5]["weather"][0]["id"];
        day6 = response["daily"][6]["weather"][0]["id"];
        day7 = response["daily"][7]["weather"][0]["id"];
        temp1 = response["daily"][1]["temp"]["day"] - 273;
        temp2 = response["daily"][2]["temp"]["day"] - 273;
        temp3 = response["daily"][3]["temp"]["day"] - 273;
        temp4 = response["daily"][4]["temp"]["day"] - 273;
        temp5 = response["daily"][5]["temp"]["day"] - 273;
        temp6 = response["daily"][6]["temp"]["day"] - 273;
        temp7 = response["daily"][7]["temp"]["day"] - 273;

        const weatherInfo = {
          id: [day1, day2, day3, day4, day5, day6, day7],
          temp: [temp1, temp2, temp3, temp4, temp5, temp6, temp7],
        };
        console.log("토요일날씨", weatherInfo.id[0]);
        weekBox(weatherInfo);
      },
    });
  }

  currentWeatherInfo(lat, lon);
  weatherSevenDay(lat, lon);
}
