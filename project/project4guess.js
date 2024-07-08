let anynum=parseInt((Math.random()*100+1))
const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessField')
const lastguess=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p');

let guessremain=1;
let game=true;
if(game){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    let guess=parseInt(userinput.value)
    validate(guess)
  })
}
function validate(guess){
    if(isNaN(guess)||guess<1||guess>100){
      
      alert('please enter a valid number') //we used alert so that if true the program ends here 
    }
    else{
      
      if(guessremain>10){
        //clearGuess(guess);
        displayMessage(`Game Over. Luck kharab hai bhai jua mat khelna . sahuliyat kai liye ye lo ye tha woh ${anynum}`)
        endgame();
      }
      else{
        clearGuess(guess);
        checkGuess(guess);
      }

    }
}
function clearGuess(guess){
  userinput.value='';
  lastguess.innerHTML+= `${guess} `
  guessremain++;
  remaining.innerHTML=11-guessremain

}
function checkGuess(guess){
  if(guess===anynum){
    
    displayMessage(`Most lucky person , you are luckier than 1000000 people but still dont go in advance jua games theek`)
    endgame();

  }
  else if(guess<anynum){
   
    displayMessage(`your number is smaller than random`)
  }
  else{
   
    displayMessage(`your number is greater than random`)
  }
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h3>${message}</h3>`
}
function endgame(){
  userinput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id='newgame'> CLICK HERE to start new game </h2>`
  startOver.appendChild(p);
  game=false;
  newgame();

}
function newgame(){
 const newbutton= document.querySelector(`#newgame`)
 newbutton.addEventListener('click',function(){
   
   anynum=parseInt((Math.random()*100+1));
   guessremain=1;
   remaining.innerHTML=10;
   lastguess.innerHTML=''
   
   userinput.removeAttribute('disabled');
   userinput.value='';
   startOver.removeChild(p)
   game=true;


 })
}