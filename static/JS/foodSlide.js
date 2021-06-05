var slides = $(".menu-img").toArray(), //객체를 배열로 만들어주는 매서드.
  active = 0,
  next = 1,
  prev = slides.length - 1,
  activePosition = 43;
spacing = 410;
let activeNumber = 0;

window.addEventListener("resize", () => {
  if (window.matchMedia("screen and (max-width:450px)").mastches) {
    activePosition = 43;
    console.log(activePosition);
  } else {
    activePosition = 15;
    console.log(activePosition);
  }
});

var positions = {
  ACTIVE: activePosition,
  PREV: activePosition - spacing,
  NEXT: activePosition + spacing,
  UP: activePosition - spacing * 2,
  DOWN: activePosition + spacing * 2,
};

function setUpSlides() {
  const slides = [...document.getElementsByClassName("menu-img")];
  TweenMax.set(slides, { left: positions.DOWN });
  TweenMax.set(slides[active], { left: positions.ACTIVE });
  TweenMax.set(slides[next], { left: positions.NEXT });
  TweenMax.set(slides[prev], { left: positions.PREV });
}

function animateSlides(isNext) {
  const slides = [...document.getElementsByClassName("menu-img")];
  var onDeck,
    currentSlides = [];

  if (isNext) {
    onDeck = (next + 1) % slides.length;
    currentSlides = [
      slides[prev],
      slides[active],
      slides[next],
      slides[onDeck],
    ];
    TweenMax.set(slides[onDeck], { left: positions.DOWN });
    activeNumber++;
  } else {
    onDeck = prev - 1 < 0 ? slides.length - 1 : prev - 1;
    currentSlides = [
      slides[next],
      slides[active],
      slides[prev],
      slides[onDeck],
    ];
    TweenMax.set(slides[onDeck], { left: positions.UP });
    activeNumber--; //한칸씩 움직일때마다 -1씩.
  }

  for (var i = 0; i < currentSlides.length; i++) {
    var left;

    switch (i) {
      case 0:
        left = isNext ? positions.UP : positions.DOWN;
        break;
      case 1:
        left = isNext ? positions.PREV : positions.NEXT;
        break;
      case 2:
        left = positions.ACTIVE;
        break;
      case 3:
        left = isNext ? positions.NEXT : positions.PREV;
        break;
      default:
        break;
    }
    TweenMax.to(currentSlides[i], 1, {
      left: left,
      // ease: Strong.easeInOut,
      ease: Quint.easeInOut,
      delay: i * 0.1,
    });
  }
  if (isNext) {
    prev = active;
    active = next;
    next = onDeck;
  } else {
    next = active;
    active = prev;
    prev = onDeck;
  }

  function moveCircle() {
    let allCircle = $(".show-circle").toArray();
    const activeCircle = document.querySelector(".active-circle");
    activeCircle.remove();
    if (activeNumber > allCircle.length - 1) {
      activeNumber = 0;
      allCircle[activeNumber].append(activeCircle);
    } else if (activeNumber < 0) {
      activeNumber = 2;
      allCircle[activeNumber].append(activeCircle);
    } else {
      allCircle[activeNumber].append(activeCircle);
    }
  }
  moveCircle();
}

$(".button-left").on("click", function () {
  animateSlides(true);
});

$(".button-right").on("click", function () {
  animateSlides(false);
});

setUpSlides();
