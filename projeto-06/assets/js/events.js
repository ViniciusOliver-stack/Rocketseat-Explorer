import {
  btnPlay,
  btnPause,
  btnStop,
  btnPlus,
  btnLess,
} from './elements.js'

export function Events({
  controls,
  timer,
  sounds,
}){
  btnPlay.addEventListener('click', function(){
    controls.play()
    sounds.pressButton()
    timer.countDown();
  });
  
  btnPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
    sounds.pressButton()
  });
  
  btnStop.addEventListener('click', function(){
    timer.resetTimer();
    controls.reset()
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
}