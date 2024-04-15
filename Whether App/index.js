
//whether App



const whetherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = "f3c7280e1183d2d8fa1bd4f42ad03c3f";


whetherForm.addEventListener("submit", event=> {

  event.preventDefault();
  const city = cityInput.value;

  if(city){

  }else{
    displayError("Please Enter City");
  }

});

async function getWeatherData (city){

}

function displayWeatherInfo(data){

}
function getWeatherEmoji(weatherId){

}
function displayError(massage){
  const errodisplay = document.createElement("p");
  errodisplay.textContent=massage;
  errodisplay.classList.add("errodisplay");

  card.textContent="";
  card.computedStyleMap.display="flex";
  card.appendChild

}