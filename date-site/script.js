const arrowIcon = document.querySelector('.fas.fa-angle-down');
const languagesDiv = document.getElementById('languages');

arrowIcon.addEventListener('click', () => {
  languagesDiv.classList.toggle('show');
});

const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll('.slider img');

let counter = 0;

nextBtn.addEventListener('click', () => {
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${counter * 100}%)`;
}

function showNextPrev() {
  prevBtn.style.opacity = 1;
  nextBtn.style.opacity = 1;
  if (counter === 0) {
    prevBtn.style.opacity = 0.5;
  } else if (counter === images.length - 1) {
    nextBtn.style.opacity = 0.5;
  }
}

showNextPrev();
function toggleNightMode() {
  const body = document.body;
  body.classList.toggle("night-mode");
}

// Проверка дали има предпочитания на потребителя за нощен режим
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDarkMode) {
  document.body.classList.add("night-mode");
}

// Извикваме функцията при клик върху бутона за превключване на нощния режим
const nightModeBtn = document.getElementById('nightModeBtn');
nightModeBtn.addEventListener('click', toggleNightMode);