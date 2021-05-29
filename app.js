"use strict";

function stars() {
  let count = 500;
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
function order() {
  let name = $("#inlineFormInputGroupUsername2").val();
  let num = $("#inputGroupSelect01").val();
  let address = $("#inlineFormInputGroupUsername3").val();
  let phoneNum = $("#inlineFormInputGroupUsername4").val();
  // 주문하기 API 연결
  $.ajax({
    type: "POST",
    url: "/order",
    data: {
      sample_name: name,
      sample_num: num,
      sample_address: address,
      sample_phoneNum: phoneNum,
    },
    success: function (response) {
      // 성공하면
      alert(response["msg"]);
    },
  });
}

function listing() {
  $.ajax({
    type: "GET",
    url: "/order",
    data: {},
    success: function (response) {
      if (response["result"] == "success") {
        let orders = response["information"];
        for (let i = 0; i < orders.length; i++) {
          let name = orders[i]["name"];
          let num = orders[i]["num"];
          let address = orders[i]["address"];
          let phone = orders[i]["phone"];

          let temp_html = `<tr>
                                          <th scope="row">${name}</th>
                                          <td>${num}</td>
                                          <td>${address}</td>
                                          <td>${phone}</td>
                                      </tr>`;
          $("#orders-box").append(temp_html);
        }
      }
    },
  });
}
