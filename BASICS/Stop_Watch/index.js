const display = document.getElementById("display");

let timer = null;
let starttime = 0;
let elpassetime = 0;
let isrunning = false;

function start() {
  if (!isrunning) {
    starttime = Date.now() - elpassetime;
    timer = setInterval(update, 10);
    isrunning = true;
  }
}

function stop() {
  if (isrunning) {
    clearInterval(timer);
    isrunning = false;
  }
}

function reset() {
 clearInterval(timer);
 starttime=0;
 elpassetime=0;
 isrunning=false;
 display.textContent="00:00:00:00";
}

function update() {
  const currentTime = Date.now();
  elpassetime = currentTime - starttime;

  let hours = Math.floor(elpassetime / (1000 * 60 * 60));
  let minutes = Math.floor((elpassetime / (1000 * 60)) % 60);
  let seconds = Math.floor((elpassetime / 1000) % 60);
  let milsecs = Math.floor((elpassetime % 1000) / 10);

  // Display the elapsed time
  display.textContent = `${hours}:${minutes}:${seconds}:${milsecs}`;
}
