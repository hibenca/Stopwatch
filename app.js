let seconds = 0;
let minutes = 0;
let hours = 0;

let domSeconds = document.getElementById('seconds');
let domMinutes = document.getElementById('minutes');
let domHours = document.getElementById('hours');

function timer() {
    setTimeout(add, 1000);
};

function add() {
    if (seconds >= 60) {
        seconds = 0;
        domMinutes.innerHTML = minutes++
        timer()
    } else if (minutes >= 60) {
        minutes = 0;
        domHours.innerHTML = hours++
        timer()
    } else {
        domSeconds.innerHTML = seconds++
        timer();
    }
}

function start() {
    add()
}


function stop() {
    console.log("Stop");

}

function reset() {
    clearTimeout();
};