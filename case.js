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

switch (value) {
  case 1:
    "result1";
    break;
  case "value===case2":
    "what to do";
    break;
  default:
    "if no other cases are found";
}

switch (ms) {
  case ms < 10:
    msText = "0" + ms;
    ms++;
    break;
  case ms < 60:
    msText = ms;
    ms++;
    break;
  default:
    ms = 0;
    seconds++;
    switch (seconds) {
      case seconds < 10:
        secondsText = "0" + seconds;
        seconds++;
        break;
      case seconds < 60:
        secondsText = seconds;
        seconds++;
        break;
      default:
        seconds = 0;
        minutes++;
        minutesText = minutes;
    }
}
