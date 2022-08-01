export default function Sound(){
  const soundForest = new Audio('https://github.com/ViniciusOliver-stack/Rocketseat-Explorer/blob/main/projeto-06/assets/music/Floresta.wav?raw=true');
  const soundRain = new Audio('https://github.com/ViniciusOliver-stack/Rocketseat-Explorer/blob/main/projeto-06/assets/music/Chuva.wav?raw=true')
  const soundCafeteria = new Audio('https://github.com/ViniciusOliver-stack/Rocketseat-Explorer/blob/main/projeto-06/assets/music/Cafeteria.wav?raw=true')
  const soundFirePlace = new Audio('https://github.com/ViniciusOliver-stack/Rocketseat-Explorer/blob/main/projeto-06/assets/music/Lareira.wav?raw=true')
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const soundAlert = new Audio('https://github.com/ViniciusOliver-stack/Rocketseat-Explorer/blob/main/projeto-06/assets/music/Alert.wav?raw=true')

  
  function pressButtonForest(e){
    if(e.target.classList.contains('active')){
      soundForest.pause()
      e.target.classList.remove('active')
    }
    else{
      soundForest.play()
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