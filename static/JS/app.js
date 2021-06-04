"use strict";

let weatherList = [800, 621, 732, 272, 372, 802, 505];

function weekCondition(weatherInfo) {
  const weeklyWeatherIcon = $(".weekly-icon").toArray();
  const weatherCoditions = weatherInfo.id;

  console.log("7일간의 날씨", weatherCoditions);

  weatherCoditions.forEach((a, i) => {
    let weatherId = 0;
    switch (true) {
      case a < 300:
        weatherId = 200;
        break;
      case a < 400:
        weatherId = 300;
        break;
      case a < 600:
        weatherId = 500;
        break;
      case a < 700:
        weatherId = 600;
        break;
      case a < 800:
        weatherId = 741;
        break;
      case a < 801:
        weatherId = 800;
        break;
      case a < 802:
        weatherId = 801;
        break;
      case a < 803:
        weatherId = 802;
        break;
      case a < 805:
        weatherId = 803;
        break;
      default:
        console.log("이건 무슨 날씨?");
        break;
    }
    weeklyWeatherIcon[i].src = `./style/image/nonAniIcon/${weatherId}.png`;
  });
  //   weeklyWeatherIcon[0].attr("src", "./style/image/nonAniIcon/800.png");
  //   console.log(weeklyWeatherIcon[0]);
}
