"use strict";
console.log("we are ready to go");
const headerbutton = document.querySelector(".btn-scroll");
const section1 = document.querySelector("#section-1");
const hidden = document.querySelector(".hidden");
const comment = document.querySelector(".user_comment");
const comment2 = document.querySelector(".comment2");
const pic2 = document.querySelector(".pic2");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
headerbutton.addEventListener("click", function (e) {
  const sec = section1.getBoundingClientRect();
  //console.log(sec);
  section1.scrollIntoView({ behavior: "smooth" });
});

let cur = 0;

const slider = document.querySelector(".slider");
//slider.style.overflow = "visible";
const slide = document.querySelectorAll(".slide");
slide.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
const maxslide = slide.length;

const nextarrowbtn = function () {
  if (cur === maxslide - 1) {
    cur = 0;
  } else {
    cur++;
  }

  slide.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - cur)}%)`)
  );
};
const previousbtn = function () {
  if (cur === 0) {
    cur = maxslide - 1;
  } else {
    cur--;
  }
  slide.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - cur)}%)`)
  );
};

btnRight.addEventListener("click", previousbtn);
btnLeft.addEventListener("click", nextarrowbtn);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") nextarrowbtn();
  e.key === "ArrowRight" &&  previousbtn();
});

function openwindow() {
  window.open("./story.html", "_parent");
}
const btn = document.querySelector("#btni");
btn.addEventListener("click", function () {
  openwindow();
  console.log("done");
});

function openwindow2() {
  window.open("./storytwo.html", "_parent");
}
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {
  openwindow2();
});

function openwindow3() {
  window.open("./story3.html", "_parent");
}
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function () {
  openwindow3();
});
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openpopup = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closepopup = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const btn_login = document.querySelector("#btn_login");
btn_login.addEventListener("click", openpopup);

const btn_close = document.querySelector("#btn_close");
btn_close.addEventListener("click", closepopup);

function writing() {
  window.open("./writing.html", "_parent");
}
const btn_pop = document.querySelector("#btn_pop");
btn_pop.addEventListener("click", function () {
  writing();
});
