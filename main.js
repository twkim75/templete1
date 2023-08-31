"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  // 상단 navbar 스크롤시 색상변경
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// 네브바 메뉴 클릭시 이동
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (!link) return;
  scrollIntoView(link);
});

// Contact Me
const contactMeBtn = document.querySelector(".home__contact");
contactMeBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// 홈화면 스크롤시 투명도변경
const home = document.querySelector("#home");
const homeContainer = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

// arrow-up 버튼: 홈 화면으로 가기
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) arrowUp.classList.add("visible");
  else arrowUp.classList.remove("visible");
});

arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
