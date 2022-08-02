export default function Controls({
  btnPlay,
  btnPause,
}){
  function play(){
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
  }

  function pause(){
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
  }

  function reset(){
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
  }

  return{
    play,
    pause,
    reset
  }
}