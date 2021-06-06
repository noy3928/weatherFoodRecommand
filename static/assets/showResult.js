function showResult(weather, foods) {
  const $ = document.querySelector.bind(document);
  // Commonly used DOM elements.
  function showFoods(foods) {
    console.log("랜덤으로 뽑힌 음식 재확인", foods);
    let $imgList = [...document.getElementsByClassName("menu-img")];
    foods.forEach((food, index) => {
      $imgList[index].setAttribute(
        "src",
        `./style/image/3x/${food.fileName}.png`
      );
    });
  }

  const foodNames = foods.map((food) => food.name);
  document
    .querySelector(".menu-one")
    .setAttribute("data-food-names", foodNames.join("/"));

  function showWeather() {
    // 1. Weather Icon Box

    // 2. Tmp

    // 3. Weather Desc

    // 4. Week Weather
    $weekWeather = $("week-weather");
  }

  showFoods(foods);
  showWeather();
  showTime();
  return true;
}

function changeFoodName(index) {
  const foodList = document
    .querySelector(".menu-one")
    .getAttribute("data-food-names")
    .split("/");
  const foodName = document.querySelector(".food-name");

  console.log("음식 배열입니다.", foodList);

  if (index < 3) {
    foodName.textContent = foodList[index];
  } else if (index > 2) {
    index = 0;
    foodName.textContent = foodList[index];
  } else if (index < 0) {
    index = 2;
    foodName.textContent = foodList[index];
  }
  document.querySelector(".menu-one").setAttribute("data-food-index", index);
}

function rightbutton() {
  //data-food-index의 값을 감소시키기
  let index = Number(
    document.querySelector(".menu-one").getAttribute("data-food-index")
  );
  console.log(document.querySelector(".menu-one"));
  document.querySelector(".menu-one").setAttribute("data-food-index", index--);
  changeFoodName(index);
  console.log(document.querySelector(".menu-one"));
}
function leftbutton() {
  //data-food-index의 값을 증가시키기
  let index = Number(
    document.querySelector(".menu-one").getAttribute("data-food-index")
  );
  document.querySelector(".menu-one").setAttribute("data-food-index", index++);
  changeFoodName(index);
}

// function setUpDefault() {
//   $imgList = [...document.getElementsByClassName("menu-one").children];
//   $imgList.forEach(($img) => {
//     $img.setAttribute("src", "./style/image/3x/question.png");
//   });
// }
function showTime() {
  const $dayBox = document.querySelector(".day-box");
  const $day = document.querySelector(".day");

  const daysKR = ["일", "월", "화", "수", "목", "금", "토"];
  const now = new Date();
  const day = daysKR[now.getDay()] + "요일";
  const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const minutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const time = `${hours}:${minutes}`;

  $day.textContent = `${day}, ${time}`;
}
