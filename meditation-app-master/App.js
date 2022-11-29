const App=()=>{
 let song=document.getElementsByClassName('song')  
  let play=document.getElementsByClassName('play')  
  let outline=document.querySelector('.moving-outline circle')
  let video=document.querySelector('.vid-container')

  //sounds
let sounds=document.querySelectorAll('.sound-picker button')
//time display
let time=document.querySelector('time-display')
//length of outline
let outlineLength=outline.getTotalLength()
//duration
let fakeDuration=600;
//animate
outline.style.strokeDasharray=outlineLength
outline.style.strokeDashoffset=outlineLength
}


App()