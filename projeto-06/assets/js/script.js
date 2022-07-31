import Sound from './sound.js'

/*Variáveis*/
const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const btnStop = document.querySelector('.stop');
const btnPlus = document.querySelector('.plus');
const btnLess = document.querySelector('.less');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const forestSound = document.querySelector('.forest');
const rainSound = document.querySelector('.rain');
const coffeShopSound = document.querySelector('.coffee-shop');
const fireplaceSound = document.querySelector('.fireplace');

const sounds = Sound()

let minutes = Number(minutesDisplay.textContent)
let timeTimerOut;

/*Funções */
function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function incrementTimer(){
  minutes = minutes + 5;
  updateTimerDisplay(minutes, 0)
}

function decrementTimer(){
  if(minutes <= 5){
    sounds.alertAudio()
    alert('O tempo mínimo é de 5 minutos');
  }
  else{
    minutes = minutes - 5;
    updateTimerDisplay(minutes, 0)
  }
}

function countDown(){
  timeTimerOut = setTimeout(function(){

    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if(minutes <= 0 && seconds <= 0){
      sounds.kitchenTimerAudio()
      updateTimerDisplay(minutes, 0)
      resetControls()
      return;
    }

    if(seconds <= 0){
      seconds = 3;
      --minutes;
    }
    updateTimerDisplay(minutes, seconds = String(seconds - 1));
    
    countDown();
  }, 1000)
}

function resetControls(){
  btnPause.classList.add('hide')
  btnPlay.classList.remove('hide')
}

function resetTimer(){
  clearTimeout(timeTimerOut);
  updateTimerDisplay(minutes, 0)
}

/*Event-driver */

btnPlay.addEventListener('click', function(){
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')
  sounds.pressButton()
  countDown();
});

btnPause.addEventListener('click', function(){
  clearTimeout(timeTimerOut);
  resetControls()
  sounds.pressButton()
});

btnStop.addEventListener('click', function(){
  resetTimer();
  resetControls();
  sounds.pressButton()
});

btnPlus.addEventListener('click', function(){
  incrementTimer();
  sounds.pressButton()
});

btnLess.addEventListener('click', function(){
  decrementTimer();
  sounds.pressButton()
});

/*Btn Sounds */
forestSound.addEventListener('click', function(e){
  sounds.pressButtonForest(e)
})

coffeShopSound.addEventListener('click', function(e){
  sounds.pressButtonRain(e)
});
rainSound.addEventListener('click', function(e){
  sounds.pressButtonCoffeShop(e)
});
fireplaceSound.addEventListener('click', function(e){
  sounds.pressButtonFirePlace(e)
});
