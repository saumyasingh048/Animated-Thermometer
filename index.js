// DOM - Document Oject Model References
const thermometer = document.querySelector(".thermometer");

const animatedThermometer = () => {
  thermometer.innerHTML = "&#xf2cb";
  thermometer.style.color = "#099e59";
  setTimeout(() => {
    thermometer.innerHTML = "&#xf2ca";
    thermometer.style.color = "#078148";
  }, 1000);
  setTimeout(() => {
    thermometer.innerHTML = "&#xf2c9";
    thermometer.style.color = "#f8b627";
  }, 2000);
  setTimeout(() => {
    thermometer.innerHTML = "&#xf2c8";
    thermometer.style.color = "#f88527";
  }, 3000);
  setTimeout(() => {
    thermometer.innerHTML = "&#xf2c7";
    thermometer.style.color = "#d63031";
  }, 4000);
};

const startAnimation = () => {
  animatedThermometer();
  setInterval(() => {
    animatedThermometer();
  }, 5000);
};

startAnimation();
