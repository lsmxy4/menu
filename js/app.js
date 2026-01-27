const body = document.querySelector("body");
const header = document.querySelector("header");
const fixedArrow = document.querySelector(".fixed-arrow");
const mobNavBtn = document.querySelector(".mob-nav-btn");
const navList = document.querySelectorAll(".nav-list li");

navList.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(`#sec-${i + 1}`).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

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

const section = document.querySelector('.sec-5');
const contents = document.querySelectorAll('.sec-5 .content');
const menuLinks = document.querySelectorAll('.sec-5 .menu li a');

const bgImages = [
  'Frame0.png',
  'Frame1.png',
  'Frame2.png',
  'Frame3.png'
];

contents[0].classList.add('active');
menuLinks[0].classList.add('active');
section.style.backgroundImage = `url(../img/${bgImages[0]})`;

menuLinks.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    contents.forEach(c => c.classList.remove('active'));
    menuLinks.forEach(m => m.classList.remove('active'));

    contents[index].classList.add('active');
    link.classList.add('active');

    section.style.backgroundImage = `url(../img/${bgImages[index]})`;
  });
});
