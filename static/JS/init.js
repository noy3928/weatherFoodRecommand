async function init() {
  await checkWindowWth();
  await foodSlide();
  const $form = document.getElementsByClassName("search")[0];
  $form.addEventListener("submit", search);
  await search();
}
init();
