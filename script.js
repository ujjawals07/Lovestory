"use strict";
console.log("we are ready to go");
const headerbutton = document.querySelector(".btn-scroll");
const section1 = document.querySelector("#section-1");
headerbutton.addEventListener("click", function (e) {
  const sec = section1.getBoundingClientRect();
  //console.log(sec);
  section1.scrollIntoView({ behavior: "smooth" });
});
