const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const log = document.getElementById("log");
const minText = document.getElementById("minText");
const secText = document.getElementById("secText");
const msText = document.getElementById("msText");

let running,
  stopwatch,
  ms,
  seconds,
  minutes,
  duration = [0, 0, 0]; // miliseconds, seconds, minutes

showtimer = function () {
  if (duration[1] < 60) {
    if (duration[0] < 60) {
      duration[0]++; //increments ms
    } else {
      duration[0] = 0; //resets ms
      duration[1]++; // increments secs
    }
  } else {
    duration[1] = 0; // resets secs
    duration[2]++; // increments min
  }

  // ms padding
  if (duration[0] < 10) {
    ms = "0" + duration[0];
  } else {
    ms = duration[0];
  }

  // seconds padding
  if (duration[1] < 10) {
    seconds = "0" + duration[1];
  } else {
    seconds = duration[1];
  }

  // minutes padding
  if (duration[2] < 10) {
    minutes = "0" + duration[2];
  } else {
    minutes = duration[2];
  }

  minText.innerHTML = minutes;
  secText.innerHTML = seconds;
  msText.innerHTML = ms;
};

startstop = () => {
  if (!running) {
    log.textContent = "RUNNING";
    running = true;
    stopwatch = setInterval(showtimer, 10);
    startBtn.textContent = "STOP";
  } else {
    clearInterval(stopwatch);
    running = false;
    log.textContent = "STOPPED";
    startBtn.textContent = "START";
  }
};

reset = () => {
  running = false;
  startBtn.textContent = "START";
  log.textContent = "STOPPED";
  clearInterval(stopwatch);
  duration = [0, 0, 0];
  minText.textContent = "00";
  secText.textContent = "00";
  msText.textContent = "00";
};

startBtn.addEventListener("click", startstop);
resetBtn.addEventListener("click", reset);
