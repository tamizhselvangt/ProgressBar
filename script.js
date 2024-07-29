//DOM Elements
const circles = document.querySelectorAll(".step");
const progressBar = document.querySelector(".indicator");
const next = document.querySelector("#next");
// const prev = document.querySelector("#prev");
let currentStep = 1;

next.addEventListener("click", (e) => {
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });
});

// prev.addEventListener("click", (e) => {
//   currentStep = e.target.id === "prev" ? ++currentStep : --currentStep;
//   circles.forEach((circle, index) => {
//     circle.classList[`${index > currentStep ? "add" : "remove"}`]("active");
//   });
// });
