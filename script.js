let minutes = 0, seconds = 0, milliseconds = 0;
let timerInterval;
let isRunning = false;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapsList = document.getElementById('laps-list');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(updateTimer, 10);
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateTimerDisplay();
    lapsList.innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const lapTime = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapsList.appendChild(lapItem);
    }
}

function updateTimer() {
    milliseconds += 1;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    updateTimerDisplay();
}

function updateTimerDisplay() {
    minutesDisplay.textContent = pad(minutes);
    secondsDisplay.textContent = pad(seconds);
    millisecondsDisplay.textContent = pad(milliseconds);
}

function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}
