let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".events .info .time .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .info .time .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .info .time .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .info .time .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);

let skillsSec = document.querySelector(".our_skills");
let progSpans = document.querySelectorAll(".our_skills .skill .prog span");
let textProgSpans = document.querySelectorAll(".our_skills .skill h3 span");
let skillStarted = false;

let statsSec = document.querySelector(".stat");
let statsSpans = document.querySelectorAll(".stat .box .number");
let statsStarted = false;

function startCount(el, data) {
  let goal = el.dataset[data];
  let textContentNum = parseInt(el.textContent);
  let count = setInterval(() => {
    isNaN(el.textContent)
      ? (el.textContent = `${textContentNum++}%`)
      : el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / parseInt(goal));
}

window.onscroll = function () {
  if (window.scrollY >= skillsSec.offsetTop - 300) {
    progSpans.forEach((el) => {
      el.style.width = el.dataset.width;
    });
    if (!skillStarted) {
      textProgSpans.forEach((el) => startCount(el, "width"));
    }
    skillStarted = true;
  }
  if (window.scrollY >= statsSec.offsetTop) {
    if (!statsStarted) {
      statsSpans.forEach((el) => startCount(el, "goal"));
      statsStarted = true;
    }
  }
};
