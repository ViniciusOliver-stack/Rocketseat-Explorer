import Sound from './sound.js'
import Timer from './timer.js'
import Controls from './controls.js'
import { Events } from './events.js';
import {
  btnPlay,
  btnPause,
  minutesDisplay,
  secondsDisplay,
} from './elements.js';

let timeTimerOut;
const sounds = Sound()
const controls = Controls({
  btnPlay,
  btnPause,
})

/*Theme */
const selectTheme = document.querySelector('#select-theme')
const lightTheme = document.querySelector('.light-theme')
const darkTheme = document.querySelector('.dark-theme')

selectTheme.addEventListener('click', () => {
  const body = document.querySelector('body')
  body.classList.toggle('dark-mode')
  lightTheme.classList.toggle('hide')
  darkTheme.classList.toggle('hide')
} )

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timeTimerOut,
  resetControls: controls.reset,
})

Events({controls, timer, sounds})

/*Btn Sounds */
const forestSound = document.querySelector('.forest');
const rainSound = document.querySelector('.rain');
const coffeShopSound = document.querySelector('.coffee-shop');
const fireplaceSound = document.querySelector('.fireplace');

forestSound.addEventListener('click', function(e){
  sounds.pressButtonForest(e)
});

coffeShopSound.addEventListener('click', function(e){
  sounds.pressButtonCoffeShop(e)
});

rainSound.addEventListener('click', function(e){
  sounds.pressButtonRain(e)
});

fireplaceSound.addEventListener('click', function(e){
  sounds.pressButtonFirePlace(e)
});


