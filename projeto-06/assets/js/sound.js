export default function Sound(){
  const soundForest = new Audio('../assets/music/Floresta.wav')
  const soundRain = new Audio('../assets/music/Chuva.wav')
  const soundCafeteria = new Audio('../assets/music/Cafeteria.wav')
  const soundFirePlace = new Audio('../assets/music/Lareira.wav')
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const soundAlert = new Audio('../assets/music/Alert.wav')
  function pressButtonForest(e){
    if(e.target.classList.contains('active')){
      soundForest.pause()
      e.target.classList.remove('active')
    }
    else{
      soundForest.play()
      soundForest.volume = 50
      soundForest.loop = true;
      e.target.classList.add('active')
    }
  }

  function pressButtonRain(e){
    if(e.target.classList.contains('active')){
      soundRain.pause()
      e.target.classList.remove('active')
    }
    else{
      soundRain.play()
      soundRain.loop = true;
      e.target.classList.add('active')
    }	
  }

  function pressButtonCoffeShop(e){
    if(e.target.classList.contains('active')){
      soundCafeteria.pause()
      e.target.classList.remove('active')
    }
    else{
      soundCafeteria.play()
      soundCafeteria.loop = true;
      e.target.classList.add('active')
    }
  }

  function pressButtonFirePlace(e){
    if(e.target.classList.contains('active')){
      soundFirePlace.pause()
      e.target.classList.remove('active')
    }
    else{
      soundFirePlace.play()
      soundFirePlace.loop = true;
      e.target.classList.add('active')
    }
  }

  function pressButton(){
    buttonPressAudio.play()
  }

  function kitchenTimerAudio(){
    kitchenTimer.play()
  }
  function alertAudio(){
    soundAlert.play()
  }

  return{
    pressButtonForest,
    pressButtonRain,
    pressButtonCoffeShop,
    pressButtonFirePlace,
    pressButton,
    kitchenTimerAudio,
    alertAudio
  }
}