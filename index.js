const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const log = document.getElementById("log");
const timer = document.getElementById("timer");

let started,
  stopwatch,
  duration = 0;

showtimer = function () {
  duration++;
  timer.textContent = parseFloat(duration / 10);
};

start = function () {
  if (!started) {
    log.textContent = "STOPWATCH IS NOW RUNNING";
    started = true;
    stopwatch = setInterval(showtimer, 100);
  } else {
    log.textContent = "STOPWATCH IS ALREADY RUNNING !!";
  }
};

stop = function () {
  if (started) {
    clearInterval(stopwatch);
    started = false;
    log.textContent = "STOPWATCH IS NOW STOPPED";
  } else {
    log.textContent = "STOPWATCH IS ALREADY STOPPED !!";
  }
};

reset = function () {
  log.textContent = "";
  clearInterval(stopwatch);
  duration = 0;
  timer.textContent = "";
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
