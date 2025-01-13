let delay = 1000;
let interval;
let checkTick;

let tom_1 = new Audio('sounds/tom-1.mp3');
let crash = new Audio('sounds/crash.mp3');


function beatValidation() {

    let beatval = document.getElementById('beats').value;

    delay = 60000 / beatval;
}

function startm() {

    clonedTom = tom_1.cloneNode()
    clonedCrash = crash.cloneNode()

    checkTick = document.getElementById('check').checked;

    let val = document.getElementById('count').innerText;

    val++;

    // resetting the value of count to 1
    if (val > 4) {
        val = 1;
    }
    // if its first beat, play crash
    if (val == 1 && checkTick == true) {
        clonedCrash.play();
        console.info('1 is played');
   }
    else {
        clonedTom.play();
    }

    // appending the value of count to the value of Val
    document.getElementById('count').innerText = val;
    document.getElementById('btn').hidden = true;
    document.getElementById('stop').hidden = false;
}

function startfn() {
    if (interval) {
        clearInterval(interval);
    }

    beatValidation();
    interval = setInterval(startm, delay);
}

function stop() {
    clearInterval(interval);
    document.getElementById('btn').innerText = 'Start metronome';
    document.getElementById('btn').hidden = false;
    document.getElementById('count').innerText = ""
    document.getElementById('stop').hidden = true;
}