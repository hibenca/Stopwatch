//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let t = null;

//Define var to hold stopwatch status
let status = false;

//Define time DOM ID
let time = document.getElementById('time');


//Stopwatch functional logic
function stopWatch() {

    seconds++

    if (seconds >= 60) {
        seconds = 0;
        minutes++;

        if (minutes >= 60) {
            minutes = 0;
            hours++

        }

    }

    //if seconds/minutes/hours are only one digit, add a leading 0 to the value
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }
    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    //Display updated time values to user
    time.innerHTML = displaySeconds + ":" + displayMinutes + ":" + displayHours;
}


function Start() {
    if (status === true) {
        return undefined
    } else {
        status = true;
        startStop();
    }
};

function Stop() {
    status = false;
    startStop();
};


function startStop() {
    if (status === true) {
        t = window.setInterval(stopWatch, 1000);
    } else if (status === false) {
        window.clearInterval(t);
    }
};

function Reset() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    window.clearInterval(t);
    time.innerHTML = "00:00:00"
};