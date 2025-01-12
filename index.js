var delay = 1000;

let interval

let checkTick;

function beatValidation() {

  let beatval = document.getElementById('beats').value

  delay = 60000 / beatval

  checkTick = document.getElementById('check').checked


} 


function startm() {

  var tom_1 = new Audio("sounds/tom-1.mp3");

  var crash = new Audio("sounds/crash.mp3");

  beatValidation()

  let val = document.getElementById('count').innerText
  console.log(val);

  val ++;
  
  if (val > 4) {
    val = 1;
  }
  
  if (val ==1 && checkTick == true){
    crash.play()
    console.info('1 is played')
  }

  tom_1.play();

  document.getElementById('count').innerText = val;

  // btn restart

  document.getElementById('btn').innerText = 'Restart'

  document.getElementById('stop').hidden = false

}



function startfn(){
  interval = setInterval(startm,delay)
}


function stop() {

  clearInterval(interval)

  document.getElementById('btn').innerText = 'Click here to start metronome'
  document.getElementById('count').innerText = 0;
  document.getElementById('stop').hidden = true
  

}