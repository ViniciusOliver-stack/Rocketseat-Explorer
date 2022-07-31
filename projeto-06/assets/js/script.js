import Sound from './sound.js'
import Timer from './timer.js'

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

let minutes = Number(minutesDisplay.textContent)
let timeTimerOut;

const sounds = Sound()
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  minutes,
  timeTimerOut,
  resetControls
})

/*Event-driver */

btnPlay.addEventListener('click', function(){
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')
  sounds.pressButton()
  timer.countDown();
});

btnPause.addEventListener('click', function(){
  clearTimeout(timeTimerOut);
  resetControls()
  sounds.pressButton()
});

btnStop.addEventListener('click', function(){
  timer.resetTimer();
  resetControls();
  sounds.pressButton()
});

btnPlus.addEventListener('click', function(){
  timer.incrementTimer();
  sounds.pressButton()
});

btnLess.addEventListener('click', function(){
  timer.decrementTimer();
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
