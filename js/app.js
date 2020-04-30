// Variables
const start = document.getElementById('start'); 
const halt = document.getElementById('stop');
const reset = document.getElementById('reset');
const tensText = document.getElementById('tens');
const secondsText = document.getElementById('seconds');
const minutesText = document.getElementById('minutes');
let intervalId;
let tens = 0;
let seconds = 0;
let minutes = 0;

// EventListener
eventListener();
function eventListener() {
  start.addEventListener('click', startStopwatch);
  halt.addEventListener('click', watchStop);
  reset.addEventListener('click', resetStopwatch);
}
// Ejecuta runTens cada 10 milisegundos
function startStopwatch() {
  clearInterval(intervalId);
  intervalId = setInterval(runTens, 10);
}

function runTens() {
  tens++;
  if(tens > 9) {
    tensText.innerHTML = tens;
  } else if(tens < 10) {
    tensText.innerHTML = '0' + tens;
  }

  validateTens();
}

function validateTens() {
  if(tens == 99) {
    tens = 0;
    tensText.innerHTML = '0' + tens;

    runSeconds();
  }
}

function runSeconds() {
    seconds++;
    if (seconds > 9) {
      secondsText.innerHTML = seconds;
    } else if (tens < 10) {
      secondsText.innerHTML = '0' + seconds;
    }

    validateSeconds();
}

function validateSeconds() {
  if (seconds == 59) {
    seconds = 0;
    secondsText.innerHTML = '0' + seconds;

    runMinutes();
  }
}

function runMinutes() {
  minutes++;
  if (minutes > 9) {
    minutesText.innerHTML = minutes;
  } else if (minutes < 10) {
    minutesText.innerHTML = '0' + minutes;
  }
}

function watchStop() {
  clearInterval(intervalId);
}

function resetStopwatch() {
  tens = 0;
  seconds = 0;
  minutes = 0;
  tensText.innerHTML = '0' + tens;
  secondsText.innerHTML = '0' + seconds;
  minutesText.innerHTML = '0' + minutes;
}

