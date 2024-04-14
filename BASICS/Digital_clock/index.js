

//update clock

function updateclock(){

  const now = new Date();
  let hours= now.getHours().toString().padStart(2,"0");
  const meridium = hours >=12 ? "PM"  : "AM";

  hours = hours % 24 || 24;
  const minitus = now.getMinutes().toString().padStart(2,0);
  const seconds =now.getSeconds().toString().padStart(2,0);

  const timeString = `${hours}:${minitus}:${seconds}:${meridium}`;
  document.getElementById("clock").textContent = timeString;


}

updateclock();


//update clock every i seconds

setInterval(updateclock,1000);

//set interval ======> The setInterval() method calls a function at specified intervals (in milliseconds).

//The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

//1 second = 1000 milliseconds.

