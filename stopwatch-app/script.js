let timer;
let [seconds, minutes, hours] = [0, 0, 0];
let display = document.querySelector(".stopwatch");
let lapList = document.getElementById("laps");

document.getElementById("start").addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(updateTime, 1000);
  }
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  [seconds, minutes, hours] = [0, 0, 0];
  display.textContent = "00:00:00";
  lapList.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
  const lapTime = display.textContent;
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap: ${lapTime}`;
  lapList.appendChild(lapItem);
});

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = `${h}:${m}:${s}`;

  display.classList.add("updated");
  setTimeout(() => {
    display.classList.remove("updated");
  }, 100);
}
