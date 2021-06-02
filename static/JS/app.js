"use strict";

function stars() {
  let count = 100;
  let i = 0;
  while (i < count) {
    let scene = document.querySelector(".scene");
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let size = Math.random() * 2;

    let duration = Math.random() * 10;

    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration = 5 + duration + "s";
    star.style.animationDelay = duration + "s";

    scene.appendChild(star);
    i++;
  }
}

// stars();

//----------------ajax
function searchCity() {
  let city = $("#searchbar").val();
  console.log(city);
  // 주문하기 API 연결
  $.ajax({
    type: "POST",
    url: "/city",
    data: {
      city_name: city,
    },
    success: function (response) {
      // 성공하면
      alert(response["msg"]);
      listing();
    },
  });
}

function listing() {
  let cityName = document.querySelector(".city-name");
  $.ajax({
    type: "GET",
    url: "/city",
    data: {},
    success: function (response) {
      if (response["result"] == "success") {
        let orders = response["information"];
        let img = orders[orders.length - 1]["image"];
        let name = orders[orders.length - 1]["name"];
        console.log(img);
        $("#img_form_url").attr("src", img);
        cityName.textContent = name;
        // let temp_html = `<tr>
        //                                   <th scope="row">${name}</th>
        //                                   <td>${num}</td>
        //                                   <td>${address}</td>
        //                                   <td>${phone}</td>
        //                               </tr>`;
        //   $("#orders-box").append(temp_html);
        // }
      }
    },
  });
}

var mainweather = bodymovin.loadAnimation({
  container: document.querySelector(".weather-icon"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./static/JS/icon-sunshower.json",
});

var descWeather = bodymovin.loadAnimation({
  container: document.querySelector(".desc-icon"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./static/JS/icon-sunshower.json",
});
