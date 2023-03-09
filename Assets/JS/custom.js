/*jshint esnext: true */

/* tabs */
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
btn1.addEventListener("click", () => {
  btn1.classList.add("btn-active");
  btn2.classList.remove("btn-active");
  img1.classList.remove("opacity-0");
  img2.classList.add("opacity-0");
});
btn2.addEventListener("click", () => {
  btn1.classList.remove("btn-active");
  btn2.classList.add("btn-active");
  img2.classList.remove("opacity-0");
  img1.classList.add("opacity-0");
});