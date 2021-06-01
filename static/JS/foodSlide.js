var slides = $(".menu").toArray(), //객체를 배열로 만들어주는 매서드.
  active = 0,
  next = 1,
  prev = slides.length - 1,
  activePosition = 150;
spacing = 210;

var positions = {
  ACTIVE: activePosition,
  PREV: activePosition - spacing,
  NEXT: activePosition + spacing,
  UP: activePosition - spacing * 2,
  DOWN: activePosition + spacing * 2,
};

function setUpSlides() {
  TweenMax.set(slides, { left: positions.DOWN });
  TweenMax.set(slides[active], { left: positions.ACTIVE });
  TweenMax.set(slides[next], { left: positions.NEXT });
  TweenMax.set(slides[prev], { left: positions.PREV });
}

function animateSlides(isNext) {
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
  } else {
    onDeck = prev - 1 < 0 ? slides.length - 1 : prev - 1;
    currentSlides = [
      slides[next],
      slides[active],
      slides[prev],
      slides[onDeck],
    ];
    TweenMax.set(slides[onDeck], { left: positions.UP });
  }

  for (var i = 0; i < currentSlides.length; i++) {
    var top;

    switch (i) {
      case 0:
        top = isNext ? positions.UP : positions.DOWN;
        break;
      case 1:
        top = isNext ? positions.PREV : positions.NEXT;
        break;
      case 2:
        top = positions.ACTIVE;
        break;
      case 3:
        top = isNext ? positions.NEXT : positions.PREV;
        break;
      default:
        break;
    }
    TweenMax.to(currentSlides[i], 1, {
      top: top,
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
}

setUpSlides();

$(".button-left").on("click", function () {
  animateSlides(true);
});

$(".button-right").on("click", function () {
  animateSlides(false);
});
