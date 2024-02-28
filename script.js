"use strict";
// product.html
const slidePrevBtn = document.querySelector(".prev_button");
const slideNextBtn = document.querySelector(".next_button");

let slideImg = ["images/black300px.png", "images/white300px.png"];

slideNextBtn.addEventListener("click", () => {
  let img = document.getElementById("slide_img");
  img.src = `./${slideImg}`;
});
