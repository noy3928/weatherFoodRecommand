$("body").mousemove(function (e) {
  var moveX = (e.pageX * -1) / 70;
  var moveY = (e.pageY * -1) / 70;
  $(".scene").css("background-position", moveX + "px " + moveY + "px");
});
