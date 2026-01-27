// alert("hello javascript")

const body = document.querySelector("body");
const header = document.querySelector("header");
const fixedArrow = document.querySelector(".fixed-arrow");
const mobNavBtn = document.querySelector(".mob-nav-btn");
const navList = document.querySelectorAll(".nav-list li");

// [0,1,2,3]

navList.forEach((btn, i) => {
 btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(document.querySelector(`#sec-${i + 1}`));


  document.querySelector(`#sec-${i + 1}`).scrollIntoView({
    behavior:'smooth'
  })
 });
});

// classList.toggle() 주체 body

// console.log(fixedArrow)

mobNavBtn.addEventListener("click", (e) => {
 e.preventDefault();
 body.classList.toggle("mob-nav-open");
});

window.addEventListener("scroll", () => {
 if (window.scrollY >= 100) {
  body.classList.add("scroll");
 } else {
  body.classList.remove("scroll");
 }
});

fixedArrow.addEventListener("click", () => {
 window.scrollTo({
  top: 0,
  behavior: "smooth",
 });
});
