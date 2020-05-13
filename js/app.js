// Variables
const start = document.querySelector('#start'); 
const halt = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const tensText = document.querySelector("#tens");
const secondsText = document.querySelector("#seconds");
const minutesText = document.querySelector("#minutes");
let intervalId;
let tens = 0;
let seconds = 0;
let minutes = 0;

// EventListener
function eventListener() {
  start.addEventListener('click', startStopwatch);
  halt.addEventListener('click', pauseStopwatch);
  reset.addEventListener('click', resetStopwatch);
}

eventListener();

// Ejecuta runTens cada 10 milisegundos
function startStopwatch() {
  clearInterval(intervalId);
  intervalId = setInterval(runTens, 10);
}

function runTens() {
  tens++;
  if(tens > 9) {
    tensText.textContent = tens;
  } else if(tens < 10) {
    tensText.textContent = '0' + tens;
  }

  validateTens();
}

function validateTens() {
  if(tens === 99) {
    tens = 0;
    tensText.textContent = '0' + tens;

    runSeconds();
  }
}

function runSeconds() {
    seconds++;
    if (seconds > 9) {
      secondsText.textContent = seconds;
    } else if (tens < 10) {
      secondsText.textContent = '0' + seconds;
    }

    validateSeconds();
}

function validateSeconds() {
  if (seconds === 59) {
    seconds = 0;
    secondsText.textContent = '0' + seconds;

    runMinutes();
  }
}

function runMinutes() {
  minutes++;
  if (minutes > 9) {
    minutesText.textContent = minutes;
  } else if (minutes < 10) {
    minutesText.textContent = '0' + minutes;
  }
}

function pauseStopwatch() {
  clearInterval(intervalId);
}

function resetStopwatch() {
  tens = 0;
  seconds = 0;
  minutes = 0;
  tensText.textContent = '0' + tens;
  secondsText.textContent = '0' + seconds;
  minutesText.textContent = '0' + minutes;
}

