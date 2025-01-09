const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  let src = (hamburger.src.includes("hamburger")) ? "assets/img/icon-close.svg" : "assets/img/icon-hamburger.svg";
  hamburger.src = src;

  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
});