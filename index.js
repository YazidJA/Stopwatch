const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const log = document.getElementById("log");
const timer = document.getElementById("timer");

let started,
  stopwatch,
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

  timer.textContent = `${duration[2]} : ${duration[1]} : ${duration[0]}`; // output
};

start = function () {
  if (!started) {
    log.textContent = "STOPWATCH IS NOW RUNNING";
    started = true;
    stopwatch = setInterval(showtimer, 10);
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
  log.textContent = "STOPWATCH STATUS";
  clearInterval(stopwatch);
  duration = [0, 0, 0];
  timer.textContent = `00 : 00 : 00`;
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
