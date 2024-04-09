//conversiton


const textBox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;



function convert(){

  if(toFahrenheit.checked){
    //result.textContent ="Please Select to Fahrenheit";

    temp = Number(textBox.value);
    temp=temp*9/5+32;
    result.textContent = temp.toFixed(1) + "°F";




  }else if(toCelsius.checked){

    temp = Number(textBox.value);
    temp=(temp-32) * (5/9);
    result.textContent = temp.toFixed(1) + "°C";
    //result.textContent ="Please Select to Celsius";




  }else{

    result.textContent ="Please Select a Unit";

  }


}