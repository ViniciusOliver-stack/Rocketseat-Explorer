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

function resetTimer(){
  clearTimeout(timeTimerOut);
  updateTimerDisplay(minutes, 0)
}