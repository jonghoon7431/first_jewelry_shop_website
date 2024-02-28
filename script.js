"use strict";
// product.html
const slidePrevBtn = document.querySelector(".prev_button");
const slideNextBtn = document.querySelector(".next_button");

let slideImg = ["images/black300px.png", "images/white300px.png"];
let currentIndex = 0;

slideNextBtn.addEventListener("click", () => {
  let img = document.getElementById("slide_img");
  currentIndex = (currentIndex + 1) % slideImg.length;
  img.src = `./${slideImg[currentIndex]}`;
});

slidePrevBtn.addEventListener("click", () => {
  let img = document.getElementById("slide_img");
  currentIndex = (currentIndex - 1 + slideImg.length) % slideImg.length;
  img.src = `./${slideImg[currentIndex]}`;
});

//모든 버튼이 동일 작동 하게 만들 방법
//좌우 이동 드래그 슬라이더 생성
