var burger = document.getElementById("burger-button");

burger.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("open");
  burger.classList.toggle("open");
});