const minNum = 0;

const maxNum = 10;

const answer = Math.floor(Math.random()*(maxNum-minNum +1));

let attemps = 0;
let guess;
let running = true;



while (running){

  guess = window.prompt("Guess a Number between $(minNum) - $(maxNum)");
  guess=Number(guess);
  //console.log(typeof guess,guess);


    if(isNaN(guess)){
      window.alert("please enter valied number");
    }else if(guess <minNum || guess>maxNum){
      window.alert("please enter valied number");


    }else {
      attemps++;
        if(guess < answer){
          window.alert("Too low ! Try again");
        }
        else if (guess > answer){
          window.alert("Too high ! Try again");

        }else {
          window.alert("Correct naswer was $(answer), If you took you $(attmps)  attemps" )

          running=false
        }  
    }




}

