"use strict";
// product.html
const slidePrevBtn = document.querySelector(".prev_button");
const slideNextBtn = document.querySelector(".next_button");
const imgSlide = document.querySelector(".slide_img");

let page = 0; //인덱스
let positionValue = 0; //이미지 위치값
const TRANSFERVALUE = 300; //위치 이동 값

function next() {
  if (page < 1) {
    slidePrevBtn.removeAttribute("disabled");
    positionValue -= TRANSFERVALUE;
    imgSlide.style.transform = `translateX(${positionValue}px)`;
    page += 1;
  }
  if (page === 1) {
    slideNextBtn.setAttribute("disabled", "true");
  }
}

function back() {
  if (page > 0) {
    slideNextBtn.removeAttribute("disabled");
    positionValue += TRANSFERVALUE;
    imgSlide.style.transform = `translateX(${positionValue}px)`;
    page -= 1;
  }
  if (page === 0) {
    slidePrevBtn.setAttribute("disabled", "true");
  }
}

function init() {
  slidePrevBtn.setAttribute("disabled", "true");

  slidePrevBtn.addEventListener("click", back);
  slideNextBtn.addEventListener("click", next);
}
init();
