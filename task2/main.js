// for img
const imagesElem = document.querySelectorAll(".slider_img");
const sliderLineElem = document.querySelector(".slider_line");
// for pagination
const dotsElem = document.querySelectorAll(".dot");
// for arrows 
const btnPrevElem = document.querySelector(".btn_prev");
const btnNextElem = document.querySelector(".btn_next");

// counter
let sliderIndex = 0;

//slider width
let sliderWidth = document.querySelector(".slider").offsetWidth;
console.log(sliderWidth);


btnPrevElem.addEventListener("click", prevSlid); // back
btnNextElem.addEventListener("click", nextSlid); // forward

// click on dot 
dotsElem.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderIndex = index;
    rollSlider();
    activeDot(sliderIndex);
  });
});



// slider forvard
function nextSlid() {
  sliderIndex++;
  if (sliderIndex >= imagesElem.length) sliderIndex = 0;
  rollSlider();
  activeDot(sliderIndex);
}
// slider back
function prevSlid() {
  sliderIndex--;
  if (sliderIndex < 0) sliderIndex = imagesElem.length - 1;
  rollSlider();
  activeDot(sliderIndex);
}

// step slider
function rollSlider() {
  sliderLineElem.style.transform = `translateX(${
    -sliderIndex * sliderWidth
  }px)`;
}


function activeDot(index) {
  dotsElem.forEach((item) => item.classList.remove("active_dot"));
  dotsElem[index].classList.add("active_dot");
}
