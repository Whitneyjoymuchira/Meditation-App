const App = () => {
    let song = document.querySelector(".song");
    let play = document.querySelector(".play");
    let outline = document.querySelector(".moving-outline circle");
    let video = document.querySelector(".vid-container video");

    //sounds
    let sounds = document.querySelectorAll(".sound-picker button");
    //time display
    let timeDisplay = document.querySelector(".time-display");
    //length of outline
    let outlineLength = outline.getTotalLength();
    //duration
    let fakeDuration = 600;
    //animate
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;
    let timeSelect=document.querySelectorAll('.time-select button')

    //AddEventListener
    play.addEventListener('click', () => {
        checkPlaying(song)
    })
    //select sound
timeSelect.forEach(element =>{
    element.addEventListener('click', function(){
        fakeDuration=this.getAttribute('data-time')
        timeDisplay.textContent=`${Math.floor(fakeDuration / 60)}: ${Math.floor(fakeDuration % 60)}`
    })
})

    //check if playing or paused
    const checkPlaying = (song) => {
        if (song.paused) {
            song.play();
            video.play();
            console.log('video playing')
            play.src = './svg/pause.svg'
        } else {
            song.pause();
            video.pause();
            play.src = './svg/play.svg'

        }
    }
    //animate circle
    song.ontimeupdate = () => {
        let currentTime = song.currentTime
        //console.log(Math.floor(currentTime))
        let elapsed = fakeDuration - currentTime
        let seconds = Math.floor(elapsed % 60)
        let minutes = Math.floor(elapsed / 60)
    
    //animate progress circle
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength
    outline.style.strokeDashoffset = progress

    //decorate text
    timeDisplay.textContent=`${minutes} :${seconds}`
    }
};

App();
