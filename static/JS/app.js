"use strict";

let mainweather = bodymovin.loadAnimation({
  container: document.querySelector(".weather-icon"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./static/JS/animatedIcon/500.json",
});

let descWeather = bodymovin.loadAnimation({
  container: document.querySelector(".desc-icon"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./static/JS/animatedIcon/500.json",
});

//해당되는 클래스를 배열로 만들어줌.
const weaklyWeatherIcon = $(".weakly-icon").toArray();

//애니메이션을 동작하게 하는 함수 표현 / 아이콘 넣는 함수.
const activeWeatherIcon = function (weatherCondition, DayN) {
  let weeklyWeather = bodymovin.loadAnimation({
    container: weaklyWeatherIcon[DayN],
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `./static/JS/animatedIcon/${weatherCondition}.json`,
  });
};

const weatherInfo = [800, 800, 800, 800, 800, 800, 800];

weatherInfo.forEach((a, i) => {
  activeWeatherIcon(a, i);
});
<<<<<<< HEAD
=======

showResult();
>>>>>>> upstream/main
