"use strict";

function weekBox(weatherInfo) {
  const weeklyWeatherIcon = $(".weekly-icon").toArray();
  const weeklyWeatherTmp = $(".weekly-tmp").toArray();
  console.log("showWeek test", weeklyWeatherTmp);
  const weeklyDay = $(".weekly-day").toArray();
  const weatherCoditions = weatherInfo.id;
  const weeklyTmp = weatherInfo.temp;
  const daysKR = ["일", "월", "화", "수", "목", "금", "토"];
  const now = new Date();
  let today = now.getDay();
  let cycleN = 0;

  //오늘로부터 7일간의 요일을 구하기
  for (let i = 0; i < daysKR.length; i++) {
    cycleN = today + i;
    if (cycleN > 5) today = -1;
    weeklyDay[i].textContent = daysKR[cycleN];
  }

  //날씨 적용하기.
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
        weatherId = 802;
        break;
      default:
        console.log("이건 무슨 날씨?");
        break;
    }
    weeklyWeatherIcon[i].src = `./style/image/nonAniIcon/${weatherId}.png`;
  });

  weeklyTmp.forEach((a, i) => {
    weeklyWeatherTmp[i].textContent = String(a).substr(0, 2) + "°";
  });
}

function showCurrentTmpCon(weatherInfo) {
  let tmp = String(weatherInfo.temp).slice(0, -1) + "°";
  let con = weatherInfo.id;
  let tmpEl = document.querySelector(".tmp");
  let conEl = document.querySelector(".weather-icon");
  let weatherId = 0;
  const now = new Date();
  const hours = now.getHours();

  switch (true) {
    case con < 300:
      weatherId = 200;
      break;
    case con < 400:
      weatherId = 300;
      break;
    case con < 600:
      weatherId = 500;
      break;
    case con < 700:
      weatherId = 600;
      break;
    case con < 800:
      weatherId = 741;
      break;
    case con == 721:
      weatherId = 721;
      break;
    case con < 801:
      weatherId = 800;
      break;
    case con < 802:
      weatherId = 801;
      break;
    case con < 803:
      weatherId = 802;
      break;
    case con < 805:
      weatherId = 802;
      break;
    default:
      console.log("이건 무슨 날씨?");
      break;
  }
  tmpEl.textContent = tmp;

  //시간대별로 아이콘을 바꿔주기. 밤일 경우와 낮일 경우.
  if (weatherId == 800) {
    hours < 7 || hours > 19
      ? (conEl.src = `./style/image/nonAniIcon/MOON.png`)
      : (conEl.src = `./style/image/nonAniIcon/${weatherId}.png`);
    console.log(hours, weatherId);
  } else if (weatherId == 801) {
    hours < 7 || hours > 19
      ? (conEl.src = `./style/image/nonAniIcon/CLOUDY NIGHT.png`)
      : (conEl.src = `./style/image/nonAniIcon/${weatherId}.png`);
    console.log(hours, weatherId);
  } else {
    conEl.src = `./style/image/nonAniIcon/${weatherId}.png`;
  }
}

function showDetailWeather(weatherDetailInfo) {}
