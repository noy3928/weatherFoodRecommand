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

stars();
